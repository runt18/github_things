$(function(){
	
		$('.main-top-img').mousemove(function(event){
		$('.main-top-picbig-box').css('display','block');
		$('.smallpiccheck').css('display','block');
		
		var event = event||window.event;
	//	滚动的距离
		var scolltop = $(window).scrollTop();
//		鼠标 在imgbox 中的坐标
		var x = event.clientX - $('.main-top-img').offset().left;
		var y = event.clientY - ($('.main-top-img').offset().top - scolltop);
//		大图的大小
		var bigheight = parseInt($('.bigpic').css('height'));
		var bigwidth = parseInt($('.bigpic').css('width'));
		var boxheight = parseInt($('.main-top-img').css('height'));
		var boxwidth = parseInt($('.main-top-img').css('width'));
//		横向
		if(x<(boxwidth/2)/(bigwidth/boxwidth)){
			$('.bigpic').css('left',0);
		}else if(x>boxwidth-(boxwidth/2)/(bigwidth/boxwidth)){
			$('.bigpic').css('left',boxwidth-bigwidth);
		}else{
			var bigleft = -x*bigwidth/boxwidth + boxwidth/2
			$('.bigpic').css('left',bigleft)
		}
//		纵向
		if(y<(boxheight/2)/(bigheight/boxheight)){
			$('.bigpic').css('top',0);
		}else if(y>boxheight-(boxheight/2)/(bigheight/boxheight)){
			$('.bigpic').css('top',boxheight-bigheight);
		}else{
			var bigtop = -y*bigheight/boxheight + boxheight/2
			$('.bigpic').css('top',bigtop)
		}
//		小图蒙层
		$('.smallpiccheck').css('height',boxheight/(bigheight/boxheight))
		$('.smallpiccheck').css('width',boxwidth/(bigwidth/boxwidth))
		var checkheight = parseInt($('.smallpiccheck').css('height'));
		var checkwidth = parseInt($('.smallpiccheck').css('width'));
		if(x<parseInt(checkwidth)/2){
			$('.smallpiccheck').css('left',0)
		}else if(x+parseInt(checkwidth)/2>parseInt(boxwidth)){
			$('.smallpiccheck').css('left',parseInt(boxwidth) - parseInt(checkwidth))
		}else{
			$('.smallpiccheck').css('left',x - parseInt(checkwidth)/2)
		}
		if(y<parseInt(checkheight)/2){
			$('.smallpiccheck').css('top',0)
		}else if(y+parseInt(checkheight)/2>parseInt(boxheight)){
			$('.smallpiccheck').css('top',parseInt(boxheight) - parseInt(checkheight))
		}else{
			$('.smallpiccheck').css('top',y - parseInt(checkheight)/2)
		}
		
	})
	$('.main-top-img').mouseleave(function(){
		$('.main-top-picbig-box').css('display','none');
		$('.smallpiccheck').css('display','none');
	})
})
