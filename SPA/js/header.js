$(function () {
    $('.header-middle ul li').click(function () {
        var index = window.location.hash.substring(1);
        $(this).eq(index).addClass('header-center').siblings('li').removeClass('header-center')

    });

    var index = window.location.hash.substring(1);
    $('.header-middle>ul>li').eq(index).addClass('header-center').siblings('li').removeClass('header-center');


    /*//缩小屏幕的时候*/
    $('.san-tiao-gang').click(function () {
        $('.header-middle ul').slideToggle(700);
    })



})