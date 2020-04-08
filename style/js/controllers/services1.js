$(function(){
	var declareLi=$('#declare_process ul li');
	$.each(declareLi,function(index,value){
	    $(value).click(function(e){
	        $(this).stop().animate({'width':'610px'},'200');
	        $(this).siblings('#declare_process ul li').stop().animate({'width':'69px'},'200');
	    });
	});
	
	$('#tab_menu li').mouseover(function() {
		var _index = $(this).index();
		$(this).addClass('active3').siblings().removeClass('active3');
		$('#tab_content>div').eq(_index).show().siblings().hide();
	});
})