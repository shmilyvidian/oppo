$(function(){
	var $onlineBanner=$('#online-banner');
	var $li=$('#online-switch li');

	var dist=$onlineBanner.width()/3+'px';
	var timer=null;
	var index=0;
	timer=setInterval(move2,4000);
	function move1(){
		if (index>0) {index--;}
		else{index=$li.length-1;}
		$li.removeClass('switchActive').eq(index).addClass('switchActive');
		$onlineBanner.animate({'left':'-'+dist},800,function(){
			$onlineBanner.find('a:first').appendTo($onlineBanner);
			$onlineBanner.css({'left':'0'});
		})
	}
	function move2(){
		if (index<$li.length-1) {index++;}
		else{index=0;}
		$li.removeClass('switchActive').eq(index).addClass('switchActive');
		$onlineBanner.find('a:last').prependTo($onlineBanner); 
		$onlineBanner.css({'left':'-'+dist});
		$onlineBanner.animate({'left':0},800);
	}
	$('#online-next').click(function(){
		clearInterval(timer);
		move2();
		timer=setInterval(move2,4000);
		return false;
	})
	$('#online-prev').click(function(){
		clearInterval(timer);
		move1();
		timer=setInterval(move2,4000);
		return false;
	})
})