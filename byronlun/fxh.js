1、全局代码中的this


// 显示定义全局对象的属性
this.a = 10; // global.a = 10
alert(a); // 10
 
// 通过赋值给一个无标示符隐式

b = 20;
alert(this.b); // 20
 
// 也是通过变量声明隐式声明的
// 因为全局上下文的变量对象是全局对象自身
var c = 30;
alert(this.c); // 30


2、函数代码中的this


/*这种类型的代码中，this值的首要特点（或许是最主要的）是它不是静态
的绑定到一个函数。正如我们上面曾提到的那样，this是进入上下文时确定
，在一个函数代码中，这个值在每一次完全不同。不管怎样，在代码运行时
的this值是不变的，也就是说，因为它不是一个变量，就不可能为其分配一
个新值*/

var foo = {x: 10};
 
var bar = {
  x: 20,
  test: function () {
 
    alert(this === bar); // true
    alert(this.x); // 20
 
    this = foo; // 错误，任何时候不能改变this的值
 
    alert(this.x); // 如果不出错的话，应该是10，而不是20
 
  }
 
};
 
// 在进入上下文的时候
// this被当成bar对象
// determined as "bar" object; why so - will
// be discussed below in detail
 
bar.test(); // true, 20
 
foo.test = bar.test;
 
// 不过，这里this依然不会是foo
// 尽管调用的是相同的function
 
foo.test(); // false, 10




SO：在通常的函数调用中，this是由激活上下文代码的调用者来提供的，
即调用函数的父上下文(parent context )。this取决于调用函数的
方式


var foo = {
  bar: function () {
    alert(this); // foo(object)
    alert(this === foo); //true
  }
};
 
foo.bar(); // foo(object), true
 
var exampleFunc = foo.bar;
 
alert(exampleFunc === foo.bar); // true
 
// 再一次，同一个function的不同的调用表达式，this是不同的
 
exampleFunc(); // global(window), false

3、特殊的，作为构造函数调用时，this是指向这个new出来的新的对象

function test() {　　　　
	this.x = 1;　　
}　　
var o = new test();　　
alert(o.x); // 1

//——————this不是指向全局变量
　
var x = 2;　　
function test() {　　　　
	this.x = 1;　　
}　　
var o = new test();　　
alert(x); //2

/*权威解释：new运算符调用“test”函数的内部的[[Construct]] 方法，
接着，在对象创建后，调用内部的[[Call]] 方法。 所有相同的函
数“test”都将this的值设置为新创建的对象。*/
————有请远成大大讲一下（我看不懂）



var的副作用
————隐式全局变量和明确定义的全局变量间有些小的差异，就是通过delete
操作符让变量未定义的能力。
1. 通过var创建的全局变量（任何函数之外的程序中创建）是不能被删除的。
2. 无var创建的隐式全局变量（无视是否在函数中创建）是能被删除的。

//定义三个全局变量

var global_var = 1;
global_novar = 2; // 反面教材
(function () {
   global_fromfunc = 3; // 反面教材
}());

// 试图删除
delete global_var; // false
delete global_novar; // true
delete global_fromfunc; // true

// 测试该删除
typeof global_var; // "number"
typeof global_novar; // "undefined"
typeof global_fromfunc; // "undefined"


最后分享一个学习前段的公众号：前端大全
每天都会推送一次文章，关于JavaScript，浏览器，一些新技术等
但是，目前我感觉很多还是看不懂的，不过感觉很棒。