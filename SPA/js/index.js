$(function () {
    $('#tou').load('header.html');
    $('#jiao').load('footer.html');


    //轮播图


    //加定时器
    var timer = setInterval(movetop, 1000)
    var x = 0
    $('.shengti-5 ul li').click(function () {
        var x = $(this).index();
        $('.zutu').eq(x).show().siblings().hide();
        $('.lunbotu-xia').eq(x).show().siblings().hide();

        //点击按钮时圆点进行换色
        $('.shengti-5').find('ul').children('li').eq(x).css('background', 'darkgray').siblings('li').css('background', 'green');
    })

    function movetop() {
        x++
        x = x < 3 ? x : 0
        $('.zutu').eq(x).show().siblings().hide();
        $('.lunbotu-xia').eq(x).show().siblings().hide();

        //点击按钮时圆点进行换色
        $('.shengti-5').find('ul').children('li').eq(x).css('background', 'darkgray').siblings('li').css('background', 'green');


    }

    $('.zutu, .lunbotu-xia').hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(movetop, 1000)
    })


})