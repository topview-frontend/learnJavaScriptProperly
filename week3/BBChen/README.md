<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		ul {
			list-style-type: none;
			width: 300px;
			position: relative;
			margin: 100px auto;
		}
		ul li {
			margin: 10px;
		}
	</style>
</head>
<body>
		<ul>
			<li>
				<label>user：</label><input type="text" name="username" id="username"/>
			</li>
			<li>
				<label>pass：</label><input type="password" name="password" id="password"/>
			</li>
			<li>
				<input type="button" id="login" value="登陆"/>&nbsp;&nbsp;
				<input type="button" value="注册" id="register"/>&nbsp;&nbsp;
				<input type="button" id="deleteAll" value="删除所有用户"/>
			</li>
		</ul>
	<script>

	//说明：
	//localStorage的主要方法有三个：
	//存储操作：localStorage.setItem(String keyName, String keyValue);
	//读取操作：localStorage.getItem(String keyName);
	//删除操作： localStorage.clear();注意这是删除所有数据的；如果删除指定键名的
	//可以使用localStorage.removeItem(String keyName);

		//存储新注册的用户
		localStorage.clear();
		var register = document.getElementById("register");

		register.onclick = function() {
			//获取用户名和密码字段
			var userName = document.getElementById("username").value;
			var password = document.getElementById("password").value;

			//将新注册的用户名和密码放到newUserd对象里面
			var newUser = {user: userName, pass: password}; 

			 //usersJSON变量用来存取用户及密码
			var usersJSON = {data:[]};

			//假如客户端已经存储有了数据，则将数据取出来
			if( localStorage.getItem("users")) { 
				usersJSON = localStorage.getItem("users" ); //这是字符串形式的json数据
				usersJSON = JSON.parse(usersJSON); //将字符串形式的json转换成对象形式json
				console.log(usersJSON);
				var repeat = 0; //判断存储器中是否已经存在新注册的用户的标识
				for(var i = 0; i < usersJSON.data.length; i++) {
					if(usersJSON.data[i].user === newUser.user) { //如果有重复，则使repeat值为真（1）
						repeat = 1; 
						break;
					}
				}
				if(repeat) { //如果重复，弹窗提示
					alert("已经存在该用户，不能重复注册");
				} else { //否则，将新增的用户加到usersJSON对象里面去
					usersJSON.data.push(newUser); //将新用户push进去
					console.log(usersJSON);
					usersJSON = JSON.stringify(usersJSON); //又把userJSON转成字符串形式
					localStorage.setItem("users",usersJSON); //将字符串形式的json数据存到localStorage
					alert("保存成功！");
				}
			}else { //否则
				usersJSON.data.push(newUser);
				usersJSON = JSON.stringify(usersJSON); 
				localStorage.setItem("users",usersJSON);
				alert("保存成功！");
			}

			
		}



		//登陆验证
		var login = document.getElementById("login");
		login.onclick = function() {

			//获取用户名和密码字段
			var userName = document.getElementById("username").value;
			var password = document.getElementById("password").value;

			//取得localStorage存储器的数据
			var usersJSON = localStorage.getItem("users");

			if(usersJSON) { //如果存在数据则...
				var pass = false; //定义一个验证登陆是否通过的标识变量，默认值为false;
				usersJSON = JSON.parse(usersJSON); //将JSON字符串转换成对象
				console.log(usersJSON);
				for(var i = 0; i < usersJSON.data.length; i++) {
					//如果存在记录使得用户名和密码均相等，则验证通过，另pass等于true
					if( usersJSON.data[i].user === userName && usersJSON.data[i].pass === password){
						pass = true;
						break;
					}
				}
				if(pass) { //假如验证通过，则进入你的主页
					alert("恭喜你，登陆成功！");
					//在这里写跳转到主页的代码；
				} else { //如果验证不通过，则提示用户
					alert("密码错误，请重新输入");
				}

			} else { //如果不存在数据,则弹窗提示用户去注册用户
				alert("localStorage没有数据,请注册新用户！")
			}
		}
		
		
		//删除所用用户的操作
		var deleteAll = document.getElementById("deleteAll");
		deleteAll.onclick = function() {
			if(confirm("您确定要删除所有用户吗？")){
				localStorage.clear();
				alert("删除所有用户成功！");
			}
			
		}


	</script>
</body>
</html>