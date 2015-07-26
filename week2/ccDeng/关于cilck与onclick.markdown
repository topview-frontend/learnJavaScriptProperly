## 关于cilck与onclick
##### 我们经常看到如下的代码
* JQ调用click()方法触发onclick 
```javaScript
    $('#btn3').click(function() {
        somethingdone;
    });
```
* JS定义onclick事件
```javaScript
    document.getElementById('btn3').onclick = function() {
        somethingdone;  
    };
```
* JQ用on方法监听click事件
```javaScript
    $('#btn3').on('click',function() {
        somethingdone;
    });
```
* * *
* 如果我像下面这样写可以么？
```javaScript
    $('#btn3').onclick = function() {
        somethingdone;  
    };
```
##### 解释：这样是不行的，页面没有任何反应，因为onclick是JS的属性，让它能点击并且有事件，而JQ实际上是通过调用方法触发原本的JS方法实现方便编程，并不能这样混淆【这是我搜到的解释，但是具体看JQ源代码】
* * *
#### 那么它们的区别其实就是click()用于JQ，而onclick用于JS吗？
* 那在换一个例子，这样写可以么？
```javaScript
    document.getElementById('btn3').click();
```
##### 解释：这样可不可以的话，要看具体的整个DOM代码，下面来看个例子[demo.html]，通过例子我们看以发现DOM的click()方法可以模拟一次单击事件，也就是调用原本定义的onclick属性方法，也就是取决于它本身有没有onclick事件，有则触发，没有则无反应

``` html
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<button id="btn3" onclick="change()">dd</button>  
	<button id="btn4">ee</button> 

	<script src="jquery-2.1.4.min.js"></script>
	<script>  
		$('#btn4').click(function() {  
            $('#btn3').click();  
		});  
		function change() {  
			alert('onclick');  
		}  
	</script>    	
</body>
</html>
```

* * *
##### 其实它们区别是这样的：
1. 在JS中onclick是绑定事件，告诉浏览器在鼠标点击时候要做什么
2. 在JS中click本身是方法作用是触发onclick事件，只要执行了元素的click()方法，就会触发onclick事件
3. 而JQ跟JS的混淆使用问题就是在上面说了，JQ可通过click()方法传一个参数function进去定义onclick事件，JQ也通过本身的很多方法可以调用这些事件啊什么的

* 下面再看一个有趣的例子
```
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<button id="btn3" onclick="change()">dd</button>
	<script src="jquery-2.1.4.min.js"></script>
	<script>    
		function change() {  
			console.log('2');  
		}  
		$('#btn3').click(function() {  
				console.log('1');  //追加
		});  
	</script>  	
</body>
</html>
```

在上述例子中click方法中的function代码会在onclick事件执行完后执行，此时click方法起到追加事件的作用，这是它们的另一个有趣的区别：

1. onclick这种方式，每次触发“Click”事件，只能执行标记的方法[只能绑定一次，再次绑定会把之前的覆盖]。
2. 而$('').click这种方式更像一个方法队列，你可以为click事件注册多个处理函数。每次触发click时，函数队列依次执行。[可以绑定多次，再次绑定会在前一个程序执行完后触发]
    
