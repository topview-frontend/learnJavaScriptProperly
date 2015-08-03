# JavaScript 几种使用时需要注意的语法 

## 相等运算符

Javascript有两组相等运算符，一组是==和!=，另一组是===和!==。前者只比较值的相等，后者除了值以外，还比较类型是否相同。
请尽量不要使用前一组，永远只使用===和!==。因为==默认会进行类型转换，规则十分难记（详细规则请看JavaScript高级程序设计51——52页）。如果你不相信的话，请回答下面五个判断式的值是true还是false：
　　false == 'false'
　　false == undefined
　　false == null
　　null == undefined
　　0 == ''
前三个是false，后两个是true。

## with

with的本意是减少键盘输入。比如
　　obj.a = obj.b;
　　obj.c = obj.d;
可以简写成
　　with(obj) {
　　　　a = b;
　　　　c = d;
　　}
但是，在实际运行时，解释器会首先判断obj.b和obj.d是否存在，如果不存在的话，再判断全局变量b和d是否存在。这样就导致了低效率，而且可能会导致意外，因此最好不要使用with语句。

##  单行的块结构

if、while、do和for，都是块结构语句，但是也可以接受单行命令。比如
　　if (ok) t = true;
甚至写成
　　if (ok)
　　　　t = true;
这样不利于阅读代码，而且将来添加语句时非常容易出错。建议不管是否只有一行命令，都一律加上大括号。
　　if (ok){
　　　　t = true;
　　}
　　
## 加号运算符

+号作为运算符，有两个含义，可以表示数字与数字的和，也可以表示字符与字符的连接。
　　alert(1+10); // 11
　　alert("1"+"10"); // 110
如果一个操作项是字符，另一个操作项是数字，则数字自动转化为字符。
　　alert(1+"10"); // 110
　　alert("10"+1); // 101
## NaN

NaN是一种数字，表示超出了解释器的极限。它有一些很奇怪的特性：
　　NaN === NaN; //false
　　NaN !== NaN; //true
　　alert( 1 + NaN ); // NaN

## 单个单个地插入dom元素

这并不是javascript自身的问题。javascript编程都会涉及DOM操作，在对DOM操作上会犯很多错误，但这是最明显的一个。
DOM操作会使浏览器重绘页面，所以如果有一连串的元素一个接一个的插入页面中，这会急剧增加浏览器渲染页面的负担。
``` javascript
var list = document.getElementById("list"),
 items = ["one", "two", "three", "four"],
 el;
 
 for (var i = 0; items[i]; i++) {
 el = document.createElement_x("li");
 el.appendChild( document.createTextNode(items[i]) );
 list.appendChild(el); // slow, bad idea
 }
```
Document fragments 是一个DOM元素容器，可以使用它同时添加这些元素到页面中。Document fragment自身不是一个DOM节点，它不会在页面DOM树中显示，并且在把它插入DOM之前它是不可见的。下面是它的用法：
```javascript
var list = document.getElementById("list"),
 frag = document.createDocumentFragment(),
 items = ["one", "two", "three", "four"],
 el;
 
 for (var i = 0; items[i]; i++) {
 el = document.createElement_x("li");
 el.appendChild( document.createTextNode(items[i]) );
 frag.appendChild(el); // better!
 }
 
 list.appendChild(frag);
```

## for循环和for in循环
数组的遍历最好通过for循环，不要通过for in，因为for。。。in的效率比for差很多。同时在调用数组length属性的时候会有一定性能开销，因此最好的做法是先把数组的length属性赋值给变量来提升性能。
```javascript
for (var i = 0; i < arr.length; i++)
for (var i = 0, len = arr.length; i < len; i++) //better
```

## 关于require.js

如果觉得计划里面的那篇文章都是英文，难看懂的话，推荐先去看一下阮一峰的关于[模块化编程](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)以及[require.js](http://www.ruanyifeng.com/blog/2012/11/require_js.html)的三篇blog，看完大致可以了解之后，就可以看远成大大的那一篇（我只是看了一点，我也不知道能不能看懂）