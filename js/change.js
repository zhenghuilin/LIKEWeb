/*
	Function  :1.1
	Author    :zhl
	Build_Date:2017-8-8
	Version   :1.0
 */

//1. 公共变量声明块........................................................
/*var character =document.getElementById("1");
var illegal =document.getElementById("2");
var maintain =document.getElementById("3");
var travel =document.getElementById("4");*/
/*var id1 =document.getElementById("id1");
var id2 =document.getElementById("id2");
var id3 =document.getElementById("id3");
var id4 =document.getElementById("id4");*/
//2. 函数定义块...........................................................
		$("#recommend_lab").click(function(){ 
			$("#recommend_lab").addClass("active"); // 追加样式
			$("#hot_lab").removeClass(); // 删除样式 
			$("#focus_on_lab").removeClass(); // 删除样式 
			$("#time_lab").removeClass(); // 删除样式 
			$("#more_lab").removeClass(); // 删除样式 
			$("#recommend_news").css("display","block");
			$("#hot_news").css("display","none");
			$("#focus_on_news").css("display","none");
			$("#time_news").css("display","none");
			$("#more_news").css("display","none");
			}); 
    	$("#hot_lab").click(function(){ 
			$("#recommend_lab").removeClass(); // 删除样式 
			$("#hot_lab").addClass("active"); // 追加样式
			$("#focus_on_lab").removeClass(); // 删除样式 
			$("#time_lab").removeClass(); // 删除样式 
			$("#more_lab").removeClass(); // 删除样式 
			$("#recommend_news").css("display","none");
			$("#hot_news").css("display","block");
			$("#focus_on_news").css("display","none");
			$("#time_news").css("display","none");
			$("#more_news").css("display","none");
			}); 
    	$("#focus_on_lab").click(function(){ 
			$("#recommend_lab").removeClass(); // 删除样式 
			$("#hot_lab").removeClass(); // 删除样式 
			$("#focus_on_lab").addClass("active"); // 追加样式
			$("#time_lab").removeClass(); // 删除样式 
			$("#more_lab").removeClass(); // 删除样式 
			$("#recommend_news").css("display","none");
			$("#hot_news").css("display","none");
			$("#focus_on_news").css("display","block");
			$("#time_news").css("display","none");
			$("#more_news").css("display","none");
			}); 
    	$("#time_lab").click(function(){ 
			$("#recommend_lab").removeClass(); // 删除样式 
			$("#hot_lab").removeClass(); // 删除样式 
			$("#focus_on_lab").removeClass(); // 删除样式 
			$("#time_lab").addClass("active"); // 追加样式
			$("#more_lab").removeClass(); // 删除样式 
			$("#recommend_news").css("display","none");
			$("#hot_news").css("display","none");
			$("#focus_on_news").css("display","none");
			$("#time_news").css("display","block");
			$("#more_news").css("display","none");
			}); 
    	$("#more_lab").click(function(){ 
			$("#recommend_lab").removeClass(); // 删除样式 
			$("#hot_lab").removeClass(); // 删除样式 
			$("#focus_on_lab").removeClass(); // 删除样式 
			$("#time_lab").removeClass(); // 删除样式 
			$("#more_lab").addClass("active"); // 追加样式
			$("#recommend_news").css("display","none");
			$("#hot_news").css("display","none");
			$("#focus_on_news").css("display","none");
			$("#time_news").css("display","none");
			$("#more_news").css("display","block");
			}); 

//3. 事件注册块...........................................................



//4. 初始化块............................................................
