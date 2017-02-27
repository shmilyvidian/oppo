// 西蒙函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
// 搜索框
addLoadEvent(clickShow);
function clickShow(){
	var oSearch=document.getElementById('search');
	var oSearchbox=document.getElementById('search-box');
	var oGlobal=document.getElementById('global');
	var oGlobalbox=document.getElementById('global-box');
	var trueoff2=true;
	var trueoff1=true;
	oSearch.onclick=function(){
		if (oGlobalbox.style.display=='block') {
			oGlobalbox.style.display='none';oGlobal.className='global';trueoff2=true;
		}
		if (trueoff1) {
			oSearch.className+=' header-top-active';
			oSearchbox.style.display='block';trueoff1=false;
		}else{
			oSearch.className='search';
			oSearchbox.style.display='none';trueoff1=true;
		}
	}
	oGlobal.onclick=function(){
		if (oSearchbox.style.display=='block') {
			oSearchbox.style.display='none';oSearch.className='search';trueoff1=true;
		}
		if (trueoff2) {
			oGlobal.className+=' header-top-active';
			oGlobalbox.style.display='block';trueoff2=false;
		}else{
			oGlobal.className=' global';
			oGlobalbox.style.display='none';trueoff2=true;
		}
		
	}
}
//header-bottom在线商城延迟菜单
addLoadEvent(onlineshop);
function onlineshop(){
	var oshop=document.getElementById('li-3');
	var oBox=document.getElementById('onlineshop');
	var timer=null;
	oshop.onmouseover=function(){
		clearTimeout(timer);
		oBox.style.display='block';
	}
	oshop.onmouseout=function(){
		timer=setTimeout(function(){
			oBox.style.display='none';
		},1000);
	}
	oBox.onmouseover=function(){
		clearTimeout(timer);
		oBox.style.display='block';
	}
	oBox.onmouseout=function(){
		// clearTimeout(timer);
		oBox.style.display='none';
	}
}
//header-bottom当前状态
addLoadEvent(Present);
function Present(){
	var url=window.location.href;
	var oUl=document.getElementById('header-bottom-active');
	var aLink=oUl.getElementsByTagName('a');
	for (var i = 0; i < aLink.length; i++) {
		var href=aLink[i].getAttribute('href');
		if (url.indexOf(href)!=-1) {
			aLink[i].className='header-bottom-active';
		};
	};
}
//回到顶部和意见反馈
$(function(){
	var $back=$('#right-bottom');
	$(window).scroll(function(){
		if ($(window).scrollTop()>100) {
			$back.show();
		}else{
			$back.hide();
		}
	})
	$('#right-bottom a:eq(0)').click(function(){
		$('html,body').animate({scrollTop:0},1000);
	})
	return false;
	
})
//addLoadEvent(Backtop);
// function Backtop(){
// 	var back=document.getElementById('right-bottom');
// 	var aLink1=back.getElementsByTagName('a')[0];
// 	//var screenh = document.documentElement.clientHeight || document.body.clientHeight; 
// 	var sTop=0;
// 	// window.onscroll=function(){
// 	// 	var sTop=document.documentElement.scrollTop||document.body.scrollTop;
// 	// 	if (sTop>=100) {
// 	// 		back.style.display='block';
// 	// 	}else{
// 	// 		back.style.display='none';
// 	// 	}
// 	// 	//back.style.top=screenh-back.offsetHeight+sTop+'px';
// 	// }
// 	var timer=setInterval(function(){
// 		sTop=document.documentElement.scrollTop||document.body.scrollTop;
// 		if (sTop>=100) {
// 			back.style.display='block';
// 		}else{
// 			back.style.display='none';
// 		}
// 	},10);
// 	aLink1.onclick=function(){
// 		// clearInterval(timer);
// 		//window.scrollTo(0,-10);
		
// 		function pageScroll() {
// 			window.scrollBy(0,-10);
// 			var timer=setTimeout('pageScroll()',100);
// 			if (sTop==0) {clearTimeout(timer)};
// 		}
// 		return false;
// 		//window.scrollTo(0,0);


// 		// sTop=0;
// 	}
// }
