$(document).ready(function(e) {
    

    $( function() {
	$("#dd").draggable({'proxy':'clone'});//元素拉动
	$("#dd1").draggable();	
	
       $("#aa").accordion( {   //折叠标签
		  width:400,
		  height:200,
		  fit:false
	   });
	});
	//
	$("#num").numberbox({min:5,max:20});
	$("#1").click(function()
	{
		$("#num").numberbox('enable')
	});
	$("#2").click(function()
	{
		$("#num").numberbox('disable')
	});
	//限制数据的输入的输入框
	
	$("#tt").tree( {
	  onClick: function(node)           
	  {
		alert(node.text);  
	  }
	});
	
	});