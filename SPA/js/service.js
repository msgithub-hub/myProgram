$(function(){
    $('#tou').load('header.html');
    $('#jiao').load('footer.html');


    //轮播图
    $('.service-wrap-son2-2 ul li').click(function () {
        var x = $(this).index();
        $('.service-wrap-son2-1-all').eq(x).show().siblings().hide();

        //点击按钮时圆点进行换色
        $('.service-wrap-son2-2').find('ul').children('li').eq(x).css('background', 'green').siblings('li').css('background', 'white');
    })



})