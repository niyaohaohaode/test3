$(function() {
	$('#submit').click(function() {
		alert('提交成功')
	})
	$('#subPageHeadBtn').click(function() {
		if ($('header>nav').is(':hidden')) {
			$('header>nav').show();
		} else {
			$('header>nav').hide();
		}
	})
	
	
	var planLi=$('#plan_principle ul li');
	$.each(planLi,function(index,value){
	    $(value).click(function(e){
	        $(this).stop().animate({'width':'610px'},'200');
	        $(this).siblings('#plan_principle ul li').stop().animate({'width':'69px'},'200');
	    });
	});
});
