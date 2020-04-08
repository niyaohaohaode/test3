$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		slidesPerView: 5,
		slidesPerGroup: 5,
		loop: true,
		loopFillGroupWithBlank: true,
		spaceBetween: 20,
		// autoplay:true
	})
	$('#tab_menu li').mouseover(function() {
		var _index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('#tab_content>div').eq(_index).show().siblings().hide();
		$('#tab_menu ul li i').remove('.icon');
		$('#tab_menu ul li.active').append('<i class="icon"><em></em></i>');
	});
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
});


