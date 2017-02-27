
//点击文本框，它的前一个input设置为选中
$(function(){
	var $ques14=$('#ques-14');
	$('#yes').click(function(){
		$ques14.slideDown('fast');
	})
	$('#no').click(function(){
		$ques14.slideUp('fast');
		/*$ques14.find('span').removeClass('ischeck');
		$ques14.find("input[type='radio']").prop('checked','false');*/
	})
	$(".ques-radio input[type='text']").focus(function(){
		$(this).parent().find('input').prop('checked','true').end().parent().find('span').removeClass('ischeck');
		$(this).siblings().siblings().addClass('ischeck');
	})
	$(".ques-checkbox input[type='text']").focus(function(){
		$(this).parent().find('input').prop('checked','true');
		$(this).siblings().siblings().addClass('ischeck');
	})
	$("input[type='checkbox']").click(function(){
		if ($(this).is(':checked')) {
			$(this).next().addClass('ischeck');
		}else{
			$(this).next().removeClass('ischeck');
		}			
	});
	$("input[type='radio']").click(function(){
		if ($(this).is(':checked')) {
			$(this).parent().parent().find('span').removeClass('ischeck');
			$(this).next().addClass('ischeck');
		}		
	});
	//点击提交时，判断是否每个问题都至少勾选了一个答案
	var ques1=$('.ques-1 input');
	var ques2=$('.ques-2 input');
	var ques3=$('.ques-3 input');
	var ques4=$('.ques-4 input');
	var ques5=$('.ques-5 input');
	var ques6=$('.ques-6 input');
	var ques7=$('.ques-7 input');
	var ques8=$('.ques-8 input');
	var ques9=$('.ques-9 input');
	var ques10=$('.ques-10 input');
	var ques11=$('.ques-11 input');
	// var ques12=$('.ques-12 textarea');
	// var ques13=$('.ques-13 textarea');
	var ques14=$('.ques-14 input');
	$('#submit').click(function(){
		if (!ques1.is(':checked')) {
			$('em').css('display','inline-block');
			ques1.parents('.ques-1').find('.color').show();
			$('html,body').animate({scrollTop:280},300);
		}else if(!ques2.is(':checked')){
			$('em').css('display','inline-block');
			ques2.parents('.ques-2').find('.color').show().end().siblings().find('.color').hide();
			$('html,body').animate({scrollTop:478},300);
		}else if(!ques3.is(':checked')){
			$('em').css('display','inline-block');
			ques3.parents('.ques-3').find('.color').show().end().siblings().find('.color').hide();
			$('html,body').animate({scrollTop:580},300);
		}else if(!ques4.is(':checked')){
			$('em').css('display','inline-block');
			ques4.parents('.ques-4').find('.color').show().end().siblings().find('.color').hide();
			$('html,body').animate({scrollTop:735},300);
		}else if(!ques5.is(':checked')){
			$('em').css('display','inline-block');
			ques5.parents('.ques-5').find('.color').show().end().siblings().find('.color').hide();
			$('html,body').animate({scrollTop:945},300);
		}else if(!ques6.is(':checked')){
			$('em').css('display','inline-block');
			ques6.parents('.ques-6').find('.color').show().end().siblings().find('.color').hide();
			$('html,body').animate({scrollTop:1155},300);
		}else if(!ques7.is(':checked')){
			$('em').css('display','inline-block');
			ques7.parents('.ques-7').find('.color').show().end().siblings().find('.color').hide();
			$('html,body').animate({scrollTop:1305},300);
		}else if (!$('#no').is(':checked')) {
				if(!ques14.is(':checked')){
					$('em').css('display','inline-block');
					ques14.parents('.ques-14').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1412},300);
				}else if(!ques8.is(':checked')){
					$('em').css('display','inline-block');
					ques8.parents('.ques-8').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1605},300);
				}else if(!ques9.is(':checked')){
					$('em').css('display','inline-block');
					ques9.parents('.ques-9').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1725},300);
				}else if(!ques10.is(':checked')){
					$('em').css('display','inline-block');
					ques10.parents('.ques-10').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1875},300);
				}else if(!ques11.is(':checked')){
					$('em').css('display','inline-block');
					ques11.parents('.ques-11').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:2035},300);
				}else{
					ques11.parents('.ques-11').find('.color').hide();  
					$('em').css('display','none');  
				}

			}else{
				if(!ques8.is(':checked')){
					$('em').css('display','inline-block');
					ques8.parents('.ques-8').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1410},300);
				}else if(!ques9.is(':checked')){
					$('em').css('display','inline-block');
					ques9.parents('.ques-9').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1522},300);
				}else if(!ques10.is(':checked')){
					$('em').css('display','inline-block');
					ques10.parents('.ques-10').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1672},300);
				}else if(!ques11.is(':checked')){
					$('em').css('display','inline-block');
					ques11.parents('.ques-11').find('.color').show().end().siblings().find('.color').hide();
					$('html,body').animate({scrollTop:1832},300);
				}else{
					ques11.parents('.ques-11').find('.color').hide();  
					$('em').css('display','none');  
				}
			}
	})
});