 //banner
//addLoadEvent(play);
// function motion (element,final_x,final_y,interval) {
// 	var elementId=document.getElementById(element);
	
// 	var xpos=elementId.offsetLeft;
// 	var ypos=elementId.offsetTop;

// 	if(elementId.timer){
// 		clearTimeout(elementId.timer);
// 	}
// 	var dist;
// 	if (xpos<final_x) {dist=Math.ceil((final_x-xpos)/40);xpos+=dist;};
// 	if (ypos<final_y) {dist=Math.ceil((final_y-ypos)/40);ypos+=dist;};
// 	if (xpos>final_x) {dist=Math.ceil((xpos-final_x)/40);xpos-=dist;};
// 	if (ypos>final_y) {dist=Math.ceil((ypos-final_y)/40);ypos-=dist;};
// 	elementId.style.left=xpos+"px";
// 	elementId.style.top=ypos+"px";
// 	var repeat="motion('"+element+"',"+final_x+","+final_y+","+interval+")";
// 	elementId.timer=setTimeout(repeat,interval);
// }

// function play(){
// 	var oPrev=document.getElementById('prev');
// 	var oNext=document.getElementById('next');
// 	var oSwitch=document.getElementById('switch');
// 	var aSwitch=oSwitch.getElementsByTagName('li');

// 	var oPic=document.getElementById('picture');
// 	var aPic=oPic.getElementsByTagName('li');

// 	var num=0;
// 	var timer2=null;

// 	oPrev.onclick=function(){
// 		clearInterval(timer2);
// 		if (num>0) {
// 			aSwitch[num].className='';
// 			num--;
// 			aSwitch[num].className='switchActive';
// 		}else{
// 			num=aSwitch.length-1;
// 			aSwitch[0].className='';
// 			aSwitch[num].className='switchActive';
// 		}
// 		var x=oPic.offsetLeft+oPic.offsetWidth/4;
// 		if (oPic.offsetLeft==0) { x=-oPic.offsetWidth/4*3;}
// 		motion('picture',x,0,1);
// 		timer2=setInterval(repeat,3000);
// 	}
// 	oNext.onclick=function(){
// 		clearInterval(timer2);
// 		if (num<aSwitch.length-1) {
// 			aSwitch[num].className='';
// 			num++;
// 			aSwitch[num].className='switchActive';
// 		}else{
// 			num=0;
// 			aSwitch[aSwitch.length-1].className='';
// 			aSwitch[num].className='switchActive';
// 		}
// 		var x=oPic.offsetLeft-oPic.offsetWidth/4;
// 		if (oPic.offsetLeft==-oPic.offsetWidth/4*3) {x=0;}		
// 		motion('picture',x,0,1);
// 		timer2=setInterval(repeat,3000);
// 	}
// 	for (var i = 0; i < aSwitch.length; i++) {
// 		aSwitch[i].index=i;
// 		aSwitch[i].onclick=function(){
// 			clearInterval(timer2);
// 			num=this.index;
// 			for (var i = 0; i < aSwitch.length; i++) {
// 				aSwitch[i].className='';
// 			}
// 			aSwitch[num].className='switchActive';
// 			motion('picture',-oPic.offsetWidth/4*(this.index),0,1);
// 			timer2=setInterval(repeat,3000);
// 		}
// 	};
// 	function repeat(){
// 		if (num<aSwitch.length-1) {
// 			aSwitch[num].className='';
// 			num++;
// 			aSwitch[num].className='switchActive';
// 		}else{
// 			num=0;
// 			aSwitch[aSwitch.length-1].className='';
// 			aSwitch[num].className='switchActive';
// 		}
// 		var x=oPic.offsetLeft - oPic.offsetWidth/4;
// 		if (oPic.offsetLeft<=-oPic.offsetWidth/4*3) {x=0;}		
// 			motion('picture',x,0,1);
// 	}
// 	timer2=setInterval(repeat,3000);
// 	oPic.onmouseover=function(){
// 		clearInterval(timer2);
// 	}
// 	oPic.onmouseout=function(){
// 		timer2=setInterval(repeat,3000);
// 	}
// }

$(function(){
	var $li=$('#picture li');
	var $Switch=$('#switch li');
	var index=0;
	var timer=null;
	timer=setInterval(interval,3000);
	function interval(){
		if (index<$li.length-1) {
			index++;
		}else{
			index=0;
		}
		change(index);
	}
	function change(){
		$li.fadeOut().eq(index).fadeIn();
		// $li.fadeOut(2000).eq(index).fadeIn(2000);
		$Switch.removeClass('switchActive').eq(index).addClass('switchActive');
	}
	$('#next').click(function(){
		clearInterval(timer);
		if (index<$li.length-1) {
			index++;
		}else{
			index=0;
		}
		change(index);
		timer=setInterval(interval,3000);
		return false;
	})
	$('#prev').click(function(){
		clearInterval(timer);
		if (index>0) {
			index--;
		}else{
			index=$li.length-1;
		}
		change(index);
		timer=setInterval(interval,3000);
		return false;
	})
	$Switch.each(function(item){
		$(this).click(function(){
			clearInterval(timer);
			index=item;
			change(index);
			timer=setInterval(interval,3000);
		})
	})
	$li.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(interval,3000);
	})
	
})

