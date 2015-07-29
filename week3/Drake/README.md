## Why Ajax
为什么要使用Ajax呢？  
首先我看看90年代的前端和后台是如何交互的。

举个例子我想在淘宝上面想买本书。当我通过书名来搜索的时候，那么搜索结果是如何显示出来的呢？这个时候就需要**重新加载页面**。接着，你会发现，除了搜索结果之外，其他东西都没变，但却需要刷新一遍页面，很显然用户体验是十分不友好的咯。并且，重新加载的话，就需要发送HTTP请求，要知道当时的带宽(bnadwidth)可是很贵的。

后来，浏览器们实现了`XMLHttpRequest`对象。通过他来完成数据的发送和接受，并且**不需要刷新页面**。接着，Google利用这种技术实现了他的*Gmail*和*Google Maps*。这使得JavaScript焕发生机~

于是，有人把这种可以**异步发送和接收数据**的技术，称为**Ajax**。  
讲了那么多，究竟什么是Ajax呢？

## What
Ajax是一个组合技能。我们来讲讲这4个字母的意思。

第一个字母`A`是`Async`，也就是异步。
为什么使用异步呢？其实是为了不阻塞后面代码的执行，从而加快速度。

第二个字母是`J`。当然就是`JavaScript`拉。而第三个字母`a`是`and`。

最后一个字母`x`是`XML`。他是一种数据格式。我们不一定要使用`XML`，为了方便，我们使用`JSON`，因为他可以直接转成JavaScript的对象。

## How
首先，利用`XMLHttpRequest`这个对象，来**定义一个HTTP请求**。
```javascript
var client = new XMLHttpRequest();
```
那么，当我们发送请求那一刻起，就触发了很多事件。比如，`error`表示请求发生错误，而`load`则表示客户端已经完整地接受了服务器返回的数据。但是，我们要根据HTTP状态码来判断返回的结果是如何的。

```javascript
client.onload = function() {
  if (client.status >= 200 && client.status <= 304) {
    successHandler();
  } else {
    failureHandler();
  }
};

function successHandler() {
  console.log(client.responseText);
}

function failureHandler() {
  console.error('ERROR: There was a problem with the request');
}
```

接着，我们就来部署并且这个请求，包括请求的URL，请求的方法，以及是否异步。
```javascript
client.open('GET', './food.json', true);
```
最后，我们发送这个请求，同时附带一些参数。
```javascript
client.send(null);
```

但最后我们会得到下面这样的错误：`xx Cross origin requests xx`，或者`No 'Access-Control-Allow-Origin' xxx`。

## Why Failed
之所以会产生这样的原因是因为Ajax的[same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)(同源策略)。意思是Ajax不能向不同源的服务器发送请求。什么是不同源呢？比如协议不同，主机名不同，端口号不同~

为什么有这种东西呢？答案是为了**安全**。如果有个坏蛋可以随意访问你本地的文件，那不是很糟糕。不止这样，你网上的敏感信息都可以随随便便获取得到。

## How To Solve
我们可以利用一些工具在本地建立一个服务器。比如[live-server](https://www.npmjs.com/package/live-server)。他不但可以建立一个服务器，还可以**live reload**(修改文件后自动刷新浏览器)

1. 首先你得要安装[Node.js](https://nodejs.org/download/)和NPM
2. 然后安装*live-server*: `npm install -g live-server`
3. 最后开启服务器: `live-server --port=portNumber path`(比如`live-server --port=3000 .`)
