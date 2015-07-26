# call() 和 apply()的用法与区别

标签（空格分隔）： 学习笔记 javascript


---

call() 和 apply()可以改变对象方法的运行环境。就是能劫持另外一个对象的方法，继承另外一个对象的属性.
call 和 apply 都是为了改变某个函数运行时的context即上下文而存在的，换句话说，就是为了改变函数体内部 this 的指向。


#两者的区别
-----
call() 和apply(),其区别主要是传入参数的方式不同

>` func1.call(this, arg1, arg2);  
func1.apply(this, [arg1, arg2]);`
 
简单来说，可以用下面几个式子表示

> thisA.functionA.apply(thisB, [arg1, arg2, ...]) 
> = thisA.functionA.call(thisB, arg1, arg2, ...)
> = thisB.functionA(arg1, arg2, ...)

其中 this 是你想指定的上下文，可以是任何一个 JavaScript 对象(JavaScript 中一切皆对象)，call 需要把参数**按顺序**传递进去，而 apply 则是把参数放在数组里

```javaScript
    /*定义一个人类*/  
    function Person(name,age)  
    {  
        this.name=name;  
        this.age=age;  
    }  
    /*定义一个学生类*/  
    function Student(name,age,grade)  
    {  
        Person.apply(this,arguments);  
        this.grade=grade;  
    }  
    //创建一个学生类  
    var student=new Student("zhangsan",21,"一年级");  
    //测试  
    alert("name:"+student.name+"\n"+"age:"+student.age+"\n"+"grade:"+student.grade);  
    //大家可以看到测试结果name:zhangsan age:21  grade:一年级  
    //学生类里面我没有给name和age属性赋值啊,为什么又存在这两个属性的值呢,这个就是apply的神奇之处.  
```
 call示例
在Studen函数里面可以将apply中修改成如下:
`Person.call(this,name,age);`

 apply的一些其他巧妙用法
**可以将数组解析为一个一个的参数,这个就是apply的一个巧妙的用处**
 
  **a) Math.max** 
  Math.max([param1,param2])是不支持的。
  但是它支持Math.max(param1,param2,param3…),所以可以根据apply的特点来解决`var max=Math.max.apply(null,array)`
  
这块在调用的时候第一个参数给了一个null,这个是因为没有对象去调用这个方法,我只需要用这个方法帮我运算,得到返回的结果就行,.所以直接传递了一个null过去

 **b)Math.min**  可以实现得到数组中最小的一项
同样和 max是一个思想 `var min=Math.min.apply(null,array);`


**c) Array.prototype.push** 可以实现两个数组合并
同样push方法没有提供push一个数组,但是它提供了push(param1,param,…paramN) 所以同样也可以通过apply来装换一下这个数组,即:

>var arr1=new Array("1","2","3");  
var arr2=new Array("4","5","6");  
Array.prototype.push.apply(arr1,arr2);  

arr1调用了push方法,参数是通过apply将数组装换为参数列表的集合

 [了解更清楚](http://blog.csdn.net/myhahaxiao/article/details/6952321)请点击

**还有一个经常会用到call()的地方**
<h2>类数组对象</h2>

**具有**：指向对象元素的数字索引下标以及length属性告诉我们对象的元素个数
**不具有**：诸如 push 、 sforEach 以及 indexOf等数组对象具有的方法

<h2>类数组对象的介绍</h2>
想了解具体的类数组对象有哪些？可以看看这篇博文
[JavaScript类数组对象参考](http://m.blog.csdn.net/blog/hztgcl1986/9203389#)
两个典型的类数组的例子是：**DOM方法** 和 **特殊变量 arguments**

**类数组借用数组方法**
假设数组array的slice()方法
>`array.slice(arg0,arg1....)`

可以使用 下面的方式进行借用

>`Array.prototype.m.call(array, arg0, arg1, ...)`

**将类数组对象转化为数组**
>`Array.prototype.slice.call(arguments)`

 

