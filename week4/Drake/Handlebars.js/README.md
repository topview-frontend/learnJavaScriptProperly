<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Handlebars.js Tutorial](#handlebarsjs-tutorial)
  - [Why Templating Engine](#why-templating-engine)
  - [When to Use](#when-to-use)
  - [Why Handlebars.js](#why-handlebarsjs)
  - [Handlebars.js Overview](#handlebarsjs-overview)
    - [3 Main Parts of Handlebars](#3-main-parts-of-handlebars)
      - [Handlebars Expressions](#handlebars-expressions)
      - [Data](#data)
      - [Compile Function](#compile-function)
  - [Compare to Non-Handlebars Project](#compare-to-non-handlebars-project)
    - [Non-Handlebars Project First](#non-handlebars-project-first)
    - [Handlebars Project](#handlebars-project)
  - [HandleBars Syntax](#handlebars-syntax)
  - [4 Ways to Load/Add Template](#4-ways-to-loadadd-template)
    - [Script Tags](#script-tags)
    - [Use Custom Function](#use-custom-function)
    - [Use AMD And Require.js](#use-amd-and-requirejs)
    - [Precompile The Templates](#precompile-the-templates)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Handlebars.js Tutorial
原文链接: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/

*Handlebars.js*是一个JavaScript写的**templating engine**(模版引擎)，用于客户端(也可以用于服务器端)。我们都知道，你引入的JavaScript library，其实就是你引入了一个JavaScript文件。同理，你也可以在HTML里面引入一个template(另一个HTML文件)，这个template会被解析(parse)以及被interpolated(注入, 就是有许多你设定好的placehoder，注入后会被你传进的数据替换掉= =)

## Why Templating Engine
如果你想要开发JavaScript应用的话，你应该要使用一个用于客户端(client side)的JavaScript templating engine，为了充分地解耦(decouple)，也就是让你的HTML和JavaScript分离开，这会使得管理HTML和JavaScript文件的时候更加可靠和容易~

当然，你也可以使用[JSDom](https://github.com/tmpvar/jsdom)，或者你可以使用服务器端(server-side)的template，生成并发送HTML文件给客户端。但是我更推荐你使用的客户端的template，因为他比server-side的template快，并且他可以提供最简单的方式创建和维护你的template。

而且，几乎所有的JavaScript框架都会使用一个JavaScript templating engine。因此，你最后也会使用templating engine，因为你最终也会使用一个框架。

## When to Use
- 你使用的JavaScript框架需要使用一个templating engine，比如`Backbone.js`, `Ember.js`等等。
- 你页面需要经常更新，尤其是数据发生了改变。
- 你app的互动性很强，并且需要响应速度快。
- 你想开发一个多视图(multiple-view)的SPA(single-page application)
- 你想更好地管理你的HTML，你不想你的JavaScript包含了重要的HTML markup。例如，

  ```javascript
  showData.forEach(function(eachShoe) {
    theHTMLOfShoes +=  '<li class="shoes">' + '<a href="/' + eachShoe.name.toLowerCase() + '">' + eachShoe.name + ' -- Price: ' + eachShoe.price + '</a></li>';

    return theHTMLOfShoes;
  });
  ```

## Why Handlebars.js
除了*Handlebars.js*，还有很多很多的templating engines，比如`Underscore.js`的Template, `Mustache.js`, `EJS`或者`Dust.js`等等。

但是我们只学习其中最好的一个，也就是**Handlebars.js**，他扩展并取代了`Mustache.js`。

至于选择`Handlebars.js`的原因有：

- 他高级，特色丰富，流行，社区活跃。
- 他是**logic-less**的templating enginge，也就说在你的template里面是没有逻辑的。
- 更重要的是，`Meteor.js`，`Derby.js`都会使用他，并且`Backbone.js`的模版引擎语法也跟这个差不多

因此，你学习了Handlebars.js之后，你以后在学习框架的时候就事半功倍~

## Handlebars.js Overview
简单介绍一下：*Handlebars.js*是一个JavaScript写的compiler，他可以把任何HTML和Handlebars expression编译到一个函数里面去。这个函数会接受一个参数，这个参数就是你想要注入的数据。然后返回一个HTML字符串，最后你就可以把他插入到DOM里面了。

### 3 Main Parts of Handlebars
#### Handlebars Expressions

用`{{}}`来表示一个expression。其中，`content`可以是一个变量或者一个**helper function**。
```javascript
{{content}}
```

或者像这样，下面的例子是*Handlebars Block Expressions*(下面会再详解)
```javascript
{{#each}} ​
  HTML content and other Handlebars expresion go here.
{{/each}}
```

下面是Handlebars expresion和HTML混合在一起适用
```javascript
<div> Name: {{customerName}} </div>
```

我们可以在`script`标签里面嵌入Handlebars template，但是`type`一定要是`text/x-handlebars-template`。
```javascript
<script id="header" type="text/x-handlebars-template">​
  <div> Name: {{ headerTitle }} </div>​
​</script>
```

#### Data
第2主要部分就是你想要注入的数据。你可以传一个对象给Handlebars的一个函数。如果这个对象有一个数组的话，你可以使用`each`helper来遍历他。

假设你的数据是这样子的，
```javascript
var theData = {
  customers: [{
    firstName: 'Michael',
    lastName: 'Alexander',
    age: 20
  }, {
    firstName: 'Drake',
    lastName: 'Leung',
    age: 29
  }]
};
```

然后你可以使用`each`来遍历他:
```html
<script id="header" type="text/x-handlebars-template">
  {{#each customers}}
  <li> {{ firstName }} {{ lastName }} </li>
  {{/each}}
</script>
```

#### Compile Function
最后一部分只需要2步:

1. 使用Handlebars的编译函数来编译我们的template，结果会返回一个函数。
2. 然后传一个参数给这个函数，这个参数就是我们想要显示的数据

所以，3部分综合起来的话，就是这样:

1. HTML age: 使用Handlebars expresion来建立template，然后加上`script`标签（在一个单独的HTML里面不需要使用`script`标签)
    ```javascript
    <script id="header" type="text/x-handlebars-template">
      <div> {{ headerTitle }} </div>
      Today is {{ weeekDay }}
    </script>
    ```

2. 在JavaScript文件里面：初始化一个`data` object。
    ```javascript
    var theData = {
      headerTitle: 'Shop Page',
      weeekDay: 'Wednesday'
    };

    var theTemplateScript = $('#header').html();
    ```

3. 同样也是在JavaScript文件里面，我们使用编译函数去编译template
    ```javascript
    var theTemplate = Handlebars.compile(theTemplateScript);
    ```

    接着，`theTemplate`函数可以接受一个参数，也就是我们想要插入的数据：
    ```javascript
    $(document.body).append(theTemplate(theData));
    ```

    调用`theTemplate()`函数会返回一个HTML字符串，然后我们就可以把他插入到DOM里面去。

## Compare to Non-Handlebars Project
### Non-Handlebars Project First

先下载好依赖(`curl`新技能get)
```bash
curl http://code.jquery.com/jquery-1.9.1.min.js > jquery-1.9.1.min.js 
curl https://github.com/downloads/wycats/handlebars.js/handlebars-1.0.rc.1.min.js > Handlebars.js
```

接着，创建一个`index.html`
```html
<html>​
<head>​
  <meta charset="utf-8">
</head>​

<body>​
  The List of Shoes:
  <ul class="shoesNav">
  </ul>​

  <script src="jquery-1.9.1.min.js"></script>​
</body>​
​</html>
```

然后，创建`app.js`。你可以注意到在JS文件里面参杂了许多HTML。
```javascript
$(function () {
  ​var shoesData = [{
    name: 'Nike',
    price: 199.00
  }, {
    name: 'Loafers',
    price: 59.00
  }, {
    name: 'Wing Tip',
    price: 259.00
  }];
​
​function updateAllShoes(shoes)  {
  ​var theHTMLListOfShoes = '';
​
  shoesData.forEach (function (eachShoe)  {
    theHTMLListOfShoes += '<li class="shoes">' + '<a href="/' + eachShoe.name.toLowerCase() + '">' + eachShoe.name + ' -- Price: ' + eachShoe.price + '</a></li>';
  });

  return theHTMLListOfShoes;
}

$(".shoesNav").append(updateAllShoes(shoesData));
​
});
```
最后，打开浏览器就可以看到效果了：3个item的list。那么，我们下面讲使用`Handlebars.js`来实现上面的效果。

### Handlebars Project
首先，改变`index.html`：在`ul`的**闭合标签**前面加上这段template。
```html
<!-- index.html -->
<script id="shoe-template" type="x-handlebars-template">​
  {{#each this}}​
    <li class="shoes">
      <a href="/{{name}}">{{name}} -- Price: {{price}} </a>
    </li>​
  {{/each}}
​</script> 
```

接着，修改`app.js`。你会发现之前的`updateAllShoes()`完全被删除掉了。并且，**所有的HTML代码都被移到了`index.html`**。
```javascript
$(function () {
  var shoesData = [{
    name: 'Nike',
    price: 199.00
  }, {
    name: 'Loafers',
    price: 59.00
  }, {
    name: 'Wing Tip',
    price: 259.00
  }];

  //Get the HTML from the template   in the script tag​
  var theTemplateScript = $("#shoe-template").html();
​
  //Compile the template​
  var theTemplate = Handlebars.compile (theTemplateScript);
  $(".shoesNav").append (theTemplate(shoesData));
​
  ​//We pass the shoesData object to the compiled handleBars function​
  ​// The function will insert all the values from the objects in their respective places in the HTML and returned HTML as a string. Then we use jQuery to append the resulting HTML string into the page​
});
```
从上面的例子，我们可以看到：使用了`handleBars.js`之后，我们的HTML代码就和JavaScript代码彻底分离了。JS文件里面的代码就只有JS代码，没有HTML代码。所以，当项目变大的时候，我们才能够更好地维护我们的项目

## HandleBars Syntax
在这里不翻译，请看[原文](http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/)或者[官方文档](http://handlebarsjs.com/)

## 4 Ways to Load/Add Template  
那么，我们怎样才可能把我们的template应用到我们的app呢？

### Script Tags
我替换了原文的例子，[在线demo](http://codepen.io/anon/pen/EjMJPr?editors=101)
```javascript
<script id="quiz" type="x-handlebars-template">​
  Who is the Cool boy: {{ name }}
​</script>​
```

**Pro**: 容易上手。  
**Cons**: script tag soup。

因此不建议使用~

### Use Custom Function
这个是一个[StackOverflow User](http://stackoverflow.com/questions/8366733/external-template-in-underscore)写的函数。

```javascript
// And this is the definition of the custom function ​
​function render(tmpl_name, tmpl_data) {
  if (!render.tmpl_cache) {
    render.tmpl_cache = {};
  }
​
  if (!render.tmpl_cache[tmpl_name] ) {
    var tmpl_dir = '/static/templates';
    var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';
​
    var tmpl_string;
    $.ajax({
        url: tmpl_url,
        method: 'GET',
        async: false,
        success: function(data) {
            tmpl_string = data;
        }
    });
​
    render.tmpl_cache[tmpl_name] = _.template(tmpl_string);
  }
​
  return render.tmpl_cache[tmpl_name](tmpl_data);
}
```
那么，当你要加载`mytemplate.html`的时候，你可以这样像下面这样，第2个参数就是你想要注入的data。
```javascript
var rendered_html = render('mytemplate', {});
```
**Pros**: templates可以单独放在一个HTML文件里面，容易维护。  
**Con**: 需要依赖`underscore.js`

### Use AMD And Require.js
我替换了原文的demo。([查看整个demo](./demo/use_requirejs/))

```javascript
​requirejs.config({
    "paths": {
      "jquery": "//libs.useso.com/js/jquery/2.1.1-rc2/jquery.min",
      "handlebars": "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.min",
      "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
    }
});

require([
  'jquery',
  'handlebars',
  'text!template/coolBoy.html'
], function($, Handlebars, coolBoyTemplate) {
  var coolBoy = {
    name: 'Drake'
  };

  var coolBoyCompiledTemplate = Handlebars.compile(coolBoyTemplate);
  var coolBoyView = coolBoyCompiledTemplate(coolBoy);

  $(document.body).append(coolBoyView);
});
```
**Pros**: 模块化。

### Precompile The Templates
前面的第1,3种方法都需要客户端来编译template，这恰恰也是Templateing engine最开销最大的地方。

所以，为了减少延迟(latency)和加快页面执行，Handlebars有一个`node.js`module来precompile(预编译)你的代码.

在这里不多讲。

原文链接: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
