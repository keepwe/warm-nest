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
    
    auto()
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
        }, 6000);
    }
	//鼠标移入移除事件
	$(".homebanner").mouseover(function(){
		$("#leftBtn").css("display","block")
		$("#rightBtn").css("display","block")
		$("#leftBtn").click(function(){
			
		})
		$("#rightBtn").click(function(){
			
		})
	})
	$(".homebanner").mouseleave(function(){
		$("#leftBtn").css("display","none")
		$("#rightBtn").css("display","none")
	})
	
}
export default Broadcast;
