//basic.js

//测试代码，连缀调用
$("div").css("color","red").click(function(){alert("ok")});

//创建一个新的basic对象
function $(selector) {
	return new BB(selector);
}



function BB(selector){
	this.eles = [];
	getEles(this,this.eles,selector);
	console.log(this.eles.length);

	this.click = function(fn) {
		for(var i = 0; i < this.eles.length; i++) {
			this.eles[i].onclick = fn;
		}
		return this;
	};
	this.css = function(attr,value){
		for(var i = 0; i < this.eles.length; i++) {
			this.eles[i].style[attr] = value;
		}
		return this;
	}
}

//获取节点数组
//#id
function getEles(me,eles,selector){
	var length = selector.length;
	console.log(selector.charAt(0));
	switch(selector.charAt(0)){
		case "#" : 
			eles.push(document.getElementById(selector.substr(1,length-1)));
			break;
		case "." :
			var classes = document.getElementsByClassName(selector.substr(1,length-1)); 
			for(var i = 0; i < classes.length; i++){
				eles.push(classes[i]);
			}
			
			break;
		default  :
			var tagNames = document.getElementsByTagName(selector) 
			for(var i = 0; i < tagNames.length; i++){
				eles.push(tagNames[i]);
			}
			break;

	}
}


//click
