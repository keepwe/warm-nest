import $ from "jquery"
function Broadcast() {
    //小圆点点亮
	$(".homebannernav li").eq(0).addClass("active");
	var index = 0;
    var timer = null;
    $(".homebannernav li").hover(function() {
        clearInterval(timer);
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".homebannerlist li").eq(index).css('opacity', 0).animate({'opacity': 1}, 500);
        $(".homebannerlist li").eq(index).siblings().css('opacity', 1).animate({'opacity': 0}, 500);
    }, function() {
        auto();
    });
    
    auto();
    //图片自动轮播
	function auto() {
	    timer = setInterval(function() {
            index++;
            if (index > 1) {
                index = 0;
            }
            $(".homebannernav li").eq(index).addClass("active").siblings().removeClass("active");
            $(".homebannerlist li").eq(index).css('opacity', 0).animate({ 'opacity': 1},500);
            $(".homebannerlist li").eq(index).siblings().css('opacity', 1).animate({ 'opacity': 0}, 500);
        }, 5000);
    }

	//鼠标移入移除事件
	$(".homebanner").mouseover(function(){
		$("#leftBtn").css("display","block");
		$("#rightBtn").css("display","block");
        clearInterval(timer);
	});
	$(".homebanner").mouseleave(function(){
		$("#leftBtn").css("display","none");
		$("#rightBtn").css("display","none");
        timer=setInterval(function() {
            index++;
            if (index > 1) {
                index = 0;
            }
            $(".homebannernav li").eq(index).addClass("active").siblings().removeClass("active");
            $(".homebannerlist li").eq(index).css('opacity', 0).animate({ 'opacity': 1},500);
            $(".homebannerlist li").eq(index).siblings().css('opacity', 1).animate({ 'opacity': 0}, 500);
        }, 5000);
	});

    $("#leftBtn").click(function(){
        index+=-1;
        if (index < 0) {
            index = 1;
        }
        $(".homebannernav li").eq(index).addClass("active").siblings().removeClass("active");
        $(".homebannerlist li").eq(index).css('opacity', 0).animate({ 'opacity': 1},500);
        $(".homebannerlist li").eq(index).siblings().css('opacity', 1).animate({ 'opacity': 0}, 500);
    });
    $("#rightBtn").click(function(){
        index+=1;
        if (index > 1) {
            index = 0;
        }
        $(".homebannernav li").eq(index).addClass("active").siblings().removeClass("active");
        $(".homebannerlist li").eq(index).css('opacity', 0).animate({ 'opacity': 1},500);
        $(".homebannerlist li").eq(index).siblings().css('opacity', 1).animate({ 'opacity': 0}, 500);
    })
	
}
export default Broadcast;
