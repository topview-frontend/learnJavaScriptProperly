<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Object For Kids](#object-for-kids)
  - [Why Object](#why-object)
  - [What Is Object](#what-is-object)
  - [How](#how)
  - [Property Access](#property-access)
  - [Property VS Method](#property-vs-method)
  - [Property Descriptors](#property-descriptors)
    - [Write](#write)
    - [Configurable](#configurable)
    - [Enumerable](#enumerable)
    - [Immutability](#immutability)
  - [Object Utility](#object-utility)
    - [遍历一个对象](#%E9%81%8D%E5%8E%86%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1)
    - [Shadow clone & Deep clone](#shadow-clone-&-deep-clone)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Object For Kids

## Why Object
什么是对象呢？其实就是一种数据类型。就是表示数据的一种方式～(请列举你学过的数据类型)

为什么会有对象呢？ 肯定是为了解决某个问题才产生的。

一开始，我们只有`string`,`number`这些primitive type。那么，当数据变得复杂的时候，这些primitive type就不能胜任了。比如，一本书，他的基本信息有书名啊，作者等等，你怎么利用primitive type来表示一本书呢？因此，我们需要一种新的数据类型。(结构体？)

所以，这就是对象。他就是用来表示一些复杂的数据。

## What Is Object
在JavaScript里面，`Object`一种数据类型。还有其他的数据类型是`number`, `string`这些primitive type。

有一句话是错误的:

> 在JavaScript，所有东西都是对象。

这个很明显是错误的嘛。不是还有primitive type吗？

```javascript
var msg = 'aha';
msg instanceof Object; // false
typeof msg;
```
很显然，上面的`msg`只是primitive type中的`string`类型。

另外，JavaScript内置了许多有用的`Object`的subtype，他们都是继承`Object`的。

- `String`, `Number`, `Boolean`
- `Object`
- `Function`
- `Array`
- `Date`, `RegExp`, `Error`

(记得首字母要大写~)

```javascript
Function instanceof Object // true
```
所以说函数其实也是对象咯。因此在jQuery中，我们可以这样`$(selector)`(此时`$`作为一个函数来使用)，也可以`$.ajax()`(此时`$`是看做一个对象)

## How
那究竟在JavaScript中如何表示一个对象呢？有2种方式。

- 第一种，`literal form`：
  ```javascript
  // apple is a object,
  // he has a 'property' named 'color'
  var apple = {
    color: 'black'
  };
  ```

- 第2种，`constructed form`:
  ```javascript
  var apple = new Object();
  apple.color = 'black';
  ```

那么这2种的区别是什么呢？后者给对象添加property的时候需要一个一个地添加。所以，我们一般都会使用前者。


## Property Access
我们访问一个对象的property也有2种方法。

- 第1种: `apple.color`
- 第2种: `apple['color']`

第2种特别好用，当key是一个变量的时候:
```javascript
// what we do is cloning lots of hotWing :)
var hotWing = {
  isDrakeLove: true
};

var hotWingClone = {};

for (var key in hotWing) {
  hotWingClone[key] = hotWing[key];

  // This will fail
  // hotWingClone.key = hotWing.key;
}

console.log(hotWingClone);
```
那么，为什么`obj.property`又可以访问一个对象的属性呢？

实际上，当你访问一个对象的属性时，浏览器引擎会进行一个`[[Get]]`操作。而给属性赋值的话，就会调用`[[Put]]`操作。
`[[Get]]`和`[[Put]]`都会先在该对象中找这个property，如果找不到的话，就去原型链中找。在原型链中找的话，那么他们的操作就会变得有点复杂。

那么，是不是所有的property都可以被访问呢？如果我们想某个特定的property不可以被修改，那应该怎么办呢？  
这个时候我们就要用到*property descriptors*。

## Property VS Method
当一个对象的property是一个函数的时候，很多人都会把这个函数称为这个对象的一个方法(method)。这个在JavaScript中其实是不对的。因为**这个函数并不属于这个对象，只是这个对象的property的值是一个函数而已**。

```javascript
var tips = function() {
  console.log('I am so clever');
}

var me = {
  giveTips: tips
};

var you = {
  giveTips: tips
}

me.giveTips == you.giveTips; // true

```
这个问题在继承中不容忽视~


## Property Descriptors
property descriptors定义了一个property的characteristics，比如`value`，可写(`writable`), 可枚举(`enumerable`), 可配置(`configurable: true`)等等。

```javascript
var coolBoy = {
  name: 'Drake'
}

Object.getOwnPropertyDescriptor(coolBoy, 'name');
// {value: "Drake", writable: true, enumerable: true, configurable: true}
```

### Write
那么，如果我想要`coolBoy`的`name`不能被修改呢？因为我们只想`Drake`是`coolBoy`。
```javascript
var coolBoy = {};

Object.defineProperty(coolBoy, 'name', {
  value: 'Drake',
  writable: false
});

// 当某人冒充coolBoy的时候，是不会如他所愿的～
coolBoy.name = 'skykobe';

console.log('Mirror~Mirror, please tell me who is the cool boy: ' + coolBoy.name);
```

然而坏蛋也是很聪明的，他想直接修改我的property descriptors。

### Configurable
当我设置了`configurable`为`false`的话，坏蛋再也不能直接修改property descriptors

```javascript
'use strict';

Object.defineProperty(coolBoy, 'name', {
  value: 'Drake',
  writable: false,
  configurable: false
});

Object.defineProperty(coolBoy, 'name', {
  value: 'byronlun',
  writable: false
}); // TypeError
```
然而，坏蛋还是不死心。既然他得不到的东西，也不想别人得到，所以他想把`Drake`删掉。
```javascript
delete coolBoy.name;
```
但是，这个还是不行的，因为我们已经设置了`configurable`。哈哈哈～

### Enumerable
如果设置了`enumerable: false`表示不可枚举。不可枚举什么意思？比如，`for-in`的时候就遍历不了。

### Immutability
讲了这么久property，我们再来讲讲Object吧。

- Object.preventExtensions()
- Object.seal()
- Object.freeze()

## Object Utility
问题来了，怎么判断一个对象为空～

### 遍历一个对象
```javascript
var CoolBoy = {
  name: 'Drake'
};

var boy1 = Object.create(CoolBoy);
boy1.sayHi = function() { console.log('Hi~') };

Object.keys(boy1);
Object.getOwnPropertyNames(boy1);
for (var key in boy1) {
  console.log(key);
}
```
`Object.keys()`会遍历所有可枚举的property，而`Object.getOwnPropertyNames()`会遍历所有的property(包括不可枚举的)。并且，两者只会遍历这个对象，而不会遍历整个原型链。`for-in`则相反～

### Shadow clone & Deep clone
怎么把一个对象copy? shadow copy的话只是单纯地引用，并没有重新copy一份新的。

如果是shadow copy的话，就直接用我们刚才遍历一个对象的方法。但是，如果是deep copy的话，就一点困难了，我也不懂～  
但是一个trick就是利用`JSON.stringify()`

```javascript
var smallBanana = {
  color: ['black']
};

var smallApple = {};
Object.keys(smallBanana).forEach(function(key) {
  smallApple[key] = smallBanana[key];
});
smallApple.color.push('white');
console.log(smallBanana.color);

var bigBanana = JSON.parse(JSON.stringify(smallBanana));
bigBanana.color.push('yellow');

console.log(smallBanana.color);
```
用`JSON.stringify()`来进行deep clone时候，传入的object一定要**JSON-safe**。
