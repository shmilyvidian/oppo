// 热门推荐jquery
$(function(){
	var $hotRecommend=$('#hotRecommend');
	$hotRecommend.find('li').hover(function(){
		$hotRecommend.find('img').hide();
		$(this).find('img').show().css('animation','change1 1s');
		//$(this).find('img').fadeIn();
	})
})
//热门推荐js
// addLoadEvent(m);
// function m(){
// 	var oUl=document.getElementById('hotRecommend');
// 	var aLi=oUl.getElementsByTagName('li');
// 	for (var i = 0; i < aLi.length; i++) {
// 		//aLi[i].index=i;
// 		aLi[i].onmouseover=function(){
// 			this.children[1].style.display='block';
// 			this.children[1].style.animation='change1 1s';
// 		}
// 		aLi[i].onmouseout=function(){
// 			this.children[1].style.display='none';
// 		}
// 	};
// }


// brand-aside-top
addLoadEvent(fixed);
function fixed(){
	var oBrandasideTop=document.getElementById('brand-aside-top');
	var sTop=0;
	var BodyHeight=document.body.clientHeight;
	var ScreenHeight=window.screen.availHeight;
	// alert(BodyHeight);
	// alert(ScreenHeight);
	var timer=setInterval(function(){
		sTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (sTop>=1340&&sTop<=(BodyHeight-ScreenHeight)) {
			oBrandasideTop.style.position='fixed';
			oBrandasideTop.style.top=0+'px';
			oBrandasideTop.style.left=926+'px';
			oBrandasideTop.style.animation='change1 2s';
		}else{
			oBrandasideTop.style.position='';
		}
	},10);

}
$(function(){
	var $share=$('.icon-share');
	$share.click(function(){
		var $block=$(this).parent('li').siblings(':gt(1)');
		if($block.is(":hidden")){
			$(this).css('background-position','-50px -50px');
			$block.css('display','inline-block');
		}else{
			$block.css('display','none');
			$(this).css('background-position','-50px -25px');
		}
	})
	$('.icon-zan').one('click',function(){
		var num=parseInt($(this).parents("li").text());
		$(this).parents("li").find("a").eq(1).text(num+1);
		$(this).css('background-position','-25px -50px');
	})
	var $content=$('.brand-article-page');
	$(window).scroll(function(){
		if ($(window).scrollTop()>2500) {
			if ($content.eq(1).hide()) {
				$('.load-img').eq(0).show();
			}else{
				$('.load-img').eq(0).hide();
			}
			$content.eq(1).show();
			// var timer=setTimeout(function(){
				
			// 	$('.load-img').eq(0).hide();
			// },1000);
			// clearTimeout(timer);
		}
	})
})
