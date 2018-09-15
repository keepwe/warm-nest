/*
搜索逻辑:
1. 搜索框获取焦点：空（不显示下拉框），反之（取数据）
2. 搜索框失去焦点：隐藏下拉框
3. 搜索框文字个数限制最大60个.
*/
import $ from "jquery"
var global_keydown = false;        // 当执行完，keydown后， 会触发keyup事件，此处做限制.
var global_show = true;
function searchBoxBlurEvent() {
    $(".search_menu").addClass("hide");
    $("#searchtext").animate({ width: '90px' });
}
function searchBoxFocusEvent() {
    $("#searchtext").animate({ width: "140" });
    searchMenuFillData($.trim($('#searchtext').val()));
}
function searchMenuFillData(keyword) {
    if ($.trim(keyword) === "") {
        $(".search_menu").addClass("hide");
    }
//  else {
//      if (global_keydown == false) {
//          $.get('/Product/ShowKeyWords', { keyword: keyword }, function (data) {
//              var json = $.parseJSON(data);
//              if (json.length > 0) {
//                  $(".search_menu").removeClass("hide");
//                  var html = "";
//                  for (var i = 0; i < json.length; i++) {
//                      html += '<li><a href="/product-search/' + json[i].KeyWordBase64 + '">' + json[i].KeyWord + '</a></li>';
//                  }
//                  $('.search_menu ul').html(html);
//              } else {
//                  $(".search_menu").addClass("hide");
//              }
//          })
//      } else {
//          global_keydown = false;
//      }
//  }
}
function searchBoxKeyupEvent(e) {
    searchMenuFillData($.trim($(this).val()));
}
function searchBoxKeyPress(e) {
    switch (e.which) {
        case 13:
            if ($.trim($(this).val()) != "") {
                gotoSearchPage($.trim($(this).val()));
            } else {
                // Tool.alertMsg({ content: '请输入搜索内容', width: '300px', height: '150px' });
            }
            break;
    }
}
function searchBoxKeyDown(e) {
    switch (e.which) {
        case 38:
            var liarr = $('.search_menu ul li');
            var i_active = -1;
            $.each(liarr, function (index, item) {
                if ($(item).hasClass('active'))
                    i_active = index;
            });
            if (i_active == 0) i_active = liarr.length;
            i_active = i_active - 1;
            $.each(liarr, function (index, item) {
                $(item).removeClass('active');
                if (i_active == index) {
                    $(item).addClass('active');
                    $('#searchtext').val($(item).find('a').get(0).innerHTML.replace("&amp;", "&"));
                }
            });
            global_keydown = true;
            break;
        case 40:
            var liarr = $('.search_menu ul li');
            var i_active = -1;
            $.each(liarr, function (index, item) {
                if ($(item).hasClass('active'))
                    i_active = index;
            });
            if (i_active == liarr.length - 1) i_active = -1;
            i_active = i_active + 1;
            $.each(liarr, function (index, item) {
                $(item).removeClass('active');
                if (i_active == index) {
                    $(item).addClass('active');
                    $('#searchtext').val($(item).find('a').get(0).innerHTML.replace("&amp;","&"));
                }
            });
            global_keydown = true;
            break;
    }
}
function gotoSearchPage(keyword) {
    if (keyword != "") {
//      window.location.href = '/product-search/' + Base64.Encode(keyword).Replace("/", "%2f");
    } else {
//         Tool.alertMsg({ content: '请输入搜索内容', width: '300px', height: '150px' });
    }
}
function initSearchMenu() {
    $("#searchtext").keypress(searchBoxKeyPress).keyup(searchBoxKeyupEvent).keydown(searchBoxKeyDown).focus(searchBoxFocusEvent).blur(searchBoxBlurEvent);

    $('.search_all div').mouseover(function () {
        $("#searchtext").unbind('blur');
    });

    $('.search_all div').mouseout(function () {
        $("#searchtext").bind('blur', searchBoxBlurEvent);
    });

    $('.search_menu ul li').on('mouseover', function () {
        $('.search_menu ul li').each(function () { $(this).removeClass("active"); })
        $(this).addClass("active");
    });

    $("#sbx_searchpage,#searchbox_foot").keyup(function (e) {
        if (e.which == 13) {
            if ($(this).val() != "") {
                gotoSearchPage($(this).val());
            } else {
                //Tool.alertMsg({ content: '请输入搜索内容', width: '300px', height: '150px' });
            }
        }
    });
}
function SetRootCss() {
    var order = $("#channelorder").val();
    if (order > 0) {
        $("dt").removeClass("active");
        $("#nav > dl").eq(order - 1).find("dt").addClass("active");
    }
}

$(function () {
    initSearchMenu();
    SetRootCss();
});
