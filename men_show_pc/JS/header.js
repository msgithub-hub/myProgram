$(function(){
    $('.tou-title .a').hover(function() {
        $(this).find('.ul-li').slideDown()
    },function(){
       $(this).find('.ul-li').stop(true,false).slideUp();
    });
    $('.tou-title>li').hover(function(){
        $(this).addClass('now').siblings('li').removeClass('now')
    })
})
