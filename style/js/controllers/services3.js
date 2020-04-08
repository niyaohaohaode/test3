$(function(){
	var buildLi=$('#build_content ul li');
	$.each(buildLi,function(index,value){
	    $(value).click(function(e){
	        $(this).stop().animate({'width':'610px'},'200');
	        $(this).siblings('#build_content ul li').stop().animate({'width':'69px'},'200');
	    });
	});
	
	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		spaceBetween: 26,
		// autoplay:true
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	})
	
	
})