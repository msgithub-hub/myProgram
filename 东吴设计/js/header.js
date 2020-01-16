//头部
$(function () {
    var a = window.location.hash.substring(1);

    $('.head_nav').eq(a).addClass('show').siblings('.head_nav').removeClass('show');
    if (parseFloat($('body').css('width')) <= 768) {
        $('.head_nav').eq(a).css('display', 'block')
        //$('.head_nav').eq(a).siblings('.head-nav').children('.head_right').css('display','none')
        $('.head_nav').eq(a).children('.head_right').click(function () {
            $('.head_nav').css('display', 'block')
            $('.header_off').css('display', 'block ')

        })
        $('.header_off').click(function () {
            $('.head_nav').eq(a).siblings('li').css('display', 'none')
        })

    }
    window.onload = window.onresize = function () {
        if (parseFloat($('body').css('width')) <= 768) {
            $('.header_off').css('display', 'block ')
        }
        if (parseFloat($('body').css('width')) > 768) {
            $('.header_off').css('display', 'none')
            $('.head_nav').css('display', 'block')
        }


    };


})