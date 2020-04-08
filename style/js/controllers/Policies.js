$(function() {
	$('#tab_Menu li').mouseover(function() {
		var _index = $(this).index();
		// $(this).children('a').addClass('on1').parents().siblings().children('a').removeClass('on1');
		$(this).children('i').addClass('on2').parents().siblings().children('i').removeClass('on2');
		// $("#tab_Menu ul li i").addClass('on2').parents().siblings().children('i').removeClass('on2')
		$('#tab_content>div').eq(_index).show().siblings().hide();
	});
	$('#tab_Menu2 a').click(function() {
		var _index2 = $(this).index();
		$(this).addClass('on3').siblings().removeClass('on3');
		$('#tab_content2>div').eq(_index2).show().siblings().hide();
	});
})
