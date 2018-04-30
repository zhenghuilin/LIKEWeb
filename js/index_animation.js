/*左侧从发布的动态开始随导航栏置顶*/
window.onload = function () {
    var pos =  $('#div_left_top').offset();// offset() 获得div_left_top当前的位置，左上角坐标(x,y)
    $(window).scroll(function () { //滚动条滚动事件
        if ($(this).scrollTop() > pos.top-60 ) {
            $('#div_left_top').css('top', $(this).scrollTop() - pos.top+60);
        } else if ($(this).scrollTop() <=  pos.top+60 ) {
            $('#div_left_top').css('top',0).css('position', 'relative');
       }
    })
    var tab_options_all =  $('#tab_options_all').offset();
     $(window).scroll(function () { //滚动条滚动事件
        if ($(this).scrollTop() > tab_options_all.top-50 ) {
            $('#tab_options_all').css('top', $(this).scrollTop() - tab_options_all.top+50);
        } else if ($(this).scrollTop() <=  tab_options_all.top+50 ) {
            $('#tab_options_all').css('top',0).css('position', 'relative');
       }
    })
    var recommend =  $('#recommend').offset();
     $(window).scroll(function () { //滚动条滚动事件
        if ($(this).scrollTop() > recommend.top-60 ) {
            $('#recommend').css('top', $(this).scrollTop() - recommend.top+60);
        } else if ($(this).scrollTop() <=  recommend.top+60 ) {
            $('#recommend').css('top',0).css('position', 'relative');
       }
    })
};



/*添加链接和分享到主题的点击事件，其下面出现一个div*/
var link_a  = document.getElementById('link_a');
		var share_a  = document.getElementById('share_a');
		var link_add = document.getElementById('link_add');
		var share_topic = document.getElementById('share_topic');
		link_a.onclick = function(){
		    var val = link_add.style.display;
		    if(val == 'none'){
		        link_add.style.display = 'block'; //显示
		    }else{
		        link_add.style.display = 'none'; //隐藏
		    }
		}
		share_a.onclick = function(){
		    var val = share_topic.style.display;
		    if(val == 'none'){
		        share_topic.style.display = 'block'; //显示
		    }else{
		        share_topic.style.display = 'none'; //隐藏
		    }
		}

/*展开全文和收起全文的事件*/
	function init(){
        var len = 100;      //默认显示字数
        var ctn = document.getElementById("content_details");  //获取div对象
        var content = ctn.innerHTML;                   //获取div里的内容

        //alert(content);
        var span = document.createElement("span");     //创建<span>元素
        var a = document.createElement("a");           //创建<a>元素
        span.innerHTML = content.substring(0,len);     //span里的内容为content的前len个字符

        a.innerHTML = content.length>len?"&nbsp;... 展开全文":"";  ////判断显示的字数是否大于默认显示的字数    来设置a的显示        
        a.href = "javascript:void(0)";//让a链接点击不跳转

        a.onclick = function(){
            if(a.innerHTML.indexOf("展开全文")>0){      //如果a中含有"展开"则显示"收起"
              a.innerHTML = "&nbsp;<<&nbsp;收起全文";
              span.innerHTML = content;
            }else{
                a.innerHTML = "&nbsp;... 展开全文";
                span.innerHTML = content.substring(0,len);
            }
        }
        // 设置div内容为空，span元素 a元素加入到div中
        ctn.innerHTML = "";
        ctn.appendChild(span);
        ctn.appendChild(a);
     }
     init();