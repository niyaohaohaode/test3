
$(function() {
	// 首页侧边导航栏点击出现隐藏
	$('.slideNavBtn').click(function() {
		if ($('#navBtn_control').is(':hidden')) {
			$('#navBtn_control').show(); 
			$("#mobileShowLogo").hide()
		} else { 
			$('#navBtn_control').hide();
			$("#mobileShowLogo").show()
		}
	})
})
// 首页轮播图初始化
$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false,
		animationSpeed: 100,
		slideshowSpeed: 5000,
		animation: "fade"
	});
});
