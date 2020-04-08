$(function(){
	var buildLi=$('#build_content ul li');
	$.each(buildLi,function(index,value){
	    $(value).click(function(e){
	        $(this).stop().animate({'width':'610px'},'200');
	        $(this).siblings('#build_content ul li').stop().animate({'width':'69px'},'200');
	    });
	});
	
	
})