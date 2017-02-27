 addLoadEvent(serPic);
function serPic(){
	var oUl=document.getElementById('service-img');
	var aLi=oUl.getElementsByTagName('li');
	var oPrev=document.getElementById('ser-prev');
	var oNext=document.getElementById('ser-next');
	var timer=null;
	var dist=0;
	oUl.style.width=aLi[0].offsetWidth*4+'px';

	timer=setInterval(move,3000);	
	
	function move(){
		if (dist<=-(aLi[0].offsetWidth*2)) {
			oUl.style.transform="translate("+0+"px"+","+0+")";
			oUl.style.transition="transform 0s";dist=0;
		}
		dist=dist-aLi[0].offsetWidth;
		oUl.style.transform="translate("+dist+"px"+","+0+")";
		oUl.style.transition="transform 1s";
	}
	oNext.onclick=function(){
		clearInterval(timer);
		move();
		timer=setInterval(move,3000);
		return false;
	}
	oPrev.onclick=function(){
		clearInterval(timer);
		if (dist>=0) {
			dist=-(aLi[0].offsetWidth*2);
			oUl.style.transform="translate("+dist+"px"+","+0+")";
			oUl.style.transition="transform 0s";
		}
		dist=dist+aLi[0].offsetWidth;
		oUl.style.transform="translate("+dist+"px"+","+0+")";
		oUl.style.transition="transform 1s";
		timer=setInterval(move,3000);
		return false;
	}
 }

$(function(){
	$('.icons-open').click(function(){
		$(this).parent('a').siblings().toggle();
		$('.li-content:visible').siblings().find('i').css('background-position','-184px -602px');
		$('.li-content:hidden').siblings().find('i').css('background-position','-184px -580px');
		
		return false;
	})
})
