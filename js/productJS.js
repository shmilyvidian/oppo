addLoadEvent(proShow);
function proShow(){
	var aSeries=document.getElementsByClassName('phone-series');
	var aIcon=document.getElementsByClassName('icon');
	var aPhone=document.getElementsByClassName('phone-list');
	for (var i = 0; i < aIcon.length; i++) {
		aIcon[i].index=i;
		aIcon[i].onclick=function(){
			if (aPhone[this.index].style.display=='block')
            {
				aSeries[this.index].style.borderBottom='10px solid #fff';
				aPhone[this.index].style.display='none';
				this.style.backgroundPosition='-190px -739px';
			}
            else
            {
				for (var i = 0; i < aIcon.length; i++) 
                {
					aSeries[i].style.borderBottom='10px solid #fff';
					aIcon[i].style.backgroundPosition='-190px -739px';
					aPhone[i].style.display='none';
				}
				aSeries[this.index].style.borderBottom='10px solid #47B488';
				this.style.backgroundPosition='-190px -763px';
				aPhone[this.index].style.display='block';
			}
			return false;
		}
	};
}
$(function(){
	var $rList=$('#r-list');
	var $rImg=$('#r-list a');

	var $aList=$('#a-list');
	var $aImg=$('#a-list a');
	var dist=$aList.width()/$aImg.length+'px';

	var $aPrev=$('#a-prev');
	var $aNext=$('#a-next');
	var $rPrev=$('#r-prev');
	var $rNext=$('#r-next');
	 function next(element){
		element.animate({'left':'-'+dist},300,function(){
			element.css('left','0').find('a:first').appendTo(this);
		});
	 }
	 function prev(element){
	 	element.find('a:last').prependTo(element);
		element.css({'left':'-'+dist});
		element.animate({'left':0},300);
	 }
	$aNext.click(function(){
		next($aList);
	})
	$rNext.click(function(){
		next($rList);
	})
	$aPrev.click(function(){
		prev($aList);
		return false;
	})
	$rPrev.click(function(){
		prev($rList);
		return false;
	})
})
