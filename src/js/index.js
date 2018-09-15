import $ from "jquery"
$(document).ready(function () {
//var first = $(".table").firstChild;
//var last = $(".table").lastChild;
  $(".autumn_btn_left").click(function () {
    let leftVal = parseInt($(".autumn_bg_box").css("left"));
    $(".autumn_bg_box").animate({left:leftVal+390},function () {
      if (leftVal>-555){
        $(".autumn_bg_box").css("left","-1335px");
      }
    });
    if (leftVal ===-555){
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(3).addClass("small_active");
    }else if(leftVal === -945){
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(0).addClass("small_active");
    }else if (leftVal === -1335) {
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(1).addClass("small_active");
    }else if (leftVal===-165) {
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(2).addClass("small_active");
    }
  });
  $(".autumn_btn_right").click(function () {
    let leftVal = parseInt($(".autumn_bg_box").css("left"));
    $(".autumn_bg_box").animate({left:(leftVal-390)},function () {
      if (leftVal <-1335){
        $(".autumn_bg_box").css("left","-555px");
      }
    });
    if (leftVal ===-555){
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(1).addClass("small_active");
    }else if(leftVal === -945){
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(2).addClass("small_active");
    }else if (leftVal === -1335) {
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(3).addClass("small_active");
    }else if (leftVal===-1725) {
      $(".table-block").removeClass("small_active");
      $(".table-block").eq(0).addClass("small_active");
    }
  });
  $(".table-block").click(function () {
    var index = $(".table-block").index(this);
    if (index===0){
      $(".autumn_bg_box").animate({left:"-555px"})
    }else if(index===1){
      $(".autumn_bg_box").animate({left:"-945px"})
    }else if(index===2){
      $(".autumn_bg_box").animate({left:"-1335px"})
    }else{
      $(".autumn_bg_box").animate({left:"-1725px"})
    }
    $(this).addClass("small_active");
    $(this).siblings().removeClass("small_active");
  });

});
