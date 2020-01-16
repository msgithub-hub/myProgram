//全屏滚动
//  页面加载完成时或页面调整大小时获取屏幕的高宽
window.onload = window.onresize = function () {
    $('.welcome,.content').height(window.innerHeight);//设置高
    $('.welcome,.content').width(window.innerWidth);//设置宽
};

//欢迎动画
$(function () {
    var isWheelling = false;//设置开光  判断能否滚动
    $('.welcome img').delay(700).fadeIn();
    $('.p-all').eq(0).delay(1000).slideDown();
    $('.p-all').eq(1).delay(1300).slideDown();
    $('.p-all').eq(2).delay(1600).slideDown();
    // $('.p-all').eq(0).delay(1000).animate({'margin-top': 20}, 400);
    // $('.p-all').eq(1).delay(1500).animate({'margin-top': 30}, 400);
    // $('.p-all').eq(2).delay(2500).animate({'margin-top': 10}, 400);

    //延时和双击隐藏
    var timer = setTimeout(cang, 6000);
    $('.welcome').dblclick(cang);
    //隐藏方法
    function cang() {
        $('.welcome').slideUp();
        clearTimeout(timer);
        isWheelling = true;
    }

    //全屏滚动
    // $('body').css('scrollTop',0)
    //初始化第一层
    $('body').animate({'scrollTop': 0}, 100);
    //全屏滚动
    //谷歌和IE浏览器的滚轮事件  通过wheelDelta值判断向上向下滚
//            当wheelDelta>0  向上滚 ； 当wheelDelta<0  向下滚
    var index = 0
    window.onmousewheel = function (e) {
        if (isWheelling) {
            isWheelling = false;//关闭开关
            if (e.wheelDelta < 0) {//当wheelDelta < 0  向上滚

                if (index < $('.content').length - 1) {
                    index++;
                }
                $('body').animate({
                    'scrollTop': index * innerHeight
                }, 500, function () {
                    isWheelling = true;
                })

                //全屏滚动时，导航栏里的字变颜色，圆点也跟着走
                $(".now-dian0").eq(index - 1).css("color", "#fff").siblings().css("color", "#bab5c1")
                $(".now-dian0").eq(index - 1).addClass("now-dian").siblings().removeClass("now-dian")
                if (index == 4) {
                    $(".now-dian0").css("color", "#bab5c1")
                    $(".now-dian0").eq(index).css("color", "#fff")
                    $(".now-dian0").eq(index - 1).css("color", "#fff")
                    $(".now-dian0").removeClass("now-dian")
                    $(".now-dian0").eq(index).addClass("now-dian")
                    $(".now-dian0").eq(index - 1).addClass("now-dian")
                }
            } else if (e.wheelDelta > 0) {
                if (index > 0) {
                    index--
                }
                if (index != 0) {

                    $(".now-dian0").eq(index - 1).css("color", "#fff").siblings().css("color", "#bab5c1")
                    $(".now-dian0").eq(index - 1).addClass("now-dian").siblings().removeClass("now-dian")
                }
                $('body').animate({
                    'scrollTop': index * innerHeight
                }, 500, function () {
                    isWheelling = true;
                })
            }
        }
    }
    //火狐的滚轮事件
    //添加事件监听  通过Detail的值来判断向上向下滚
    //Detail>0 向上滚；Detail<0 向下滚
    window.addEventListener('DOMMouseScroll', function (e) {
        if (isWheelling) {
            isWheelling = false;//关闭开关
            if (e.detail > 0) {//当wheelDelta < 0  向上滚
                //显示下一屏
                if (index < $('.content').length - 1) {
                    index++;
                }
                $('html').animate({
                    'scrollTop': index * innerHeight
                }, 500, function () {
                    isWheelling = true;
                })
            } else if (e.detail < 0) {
                //显示上一屏
                if (index > 0) {
                    index--
                }
                $('html').animate({
                    'scrollTop': index * innerHeight
                }, 500, function () {
                    isWheelling = true;
                })
            }
        }
    }, false)


    //bangkuai2里的特效
    //轮播图
    var a = 0;
    $('.goleft').click(function () {
        if (a == 0) {
            a = 3
        } else {
            a--
        }
        $('.bangkuai2-center').eq(a).show().addClass('animated bounceInRight').siblings('.bangkuai2-center').hide().removeClass("animated bounceInRight");
    });


    $('.goright').click(function () {
        if (a == 3) {
            a = 0
        } else {
            a++
        }
        $('.bangkuai2-center').eq(a).show().addClass('animated bounceInLeft').siblings('.bangkuai2-center').hide().removeClass("animated bounceInLeft");
    });


    //bangkuai4里的特效
    $('.sunshine').click(function () {
        $('.sunshinelove-1').animate({left: '-78px'}, 500, function () {
            $('.sunshine-1').animate({left: '6px'})
            $('.bangkuai4-2').hide();
            $('.bangkuai4-1').show();
        })
    })
    $('.sunshinelove').click(function () {
        $('.sunshine-1').animate({left: '93px'}, 500, function () {
            $('.sunshinelove-1').animate({left: '0px'})
            $('.bangkuai4-2').show();
            $('.bangkuai4-1').hide();
        })
    })

    //点击导航栏会有白色点点
    $('.daohanglang>li').click(function () {
        $(this).addClass('now-dian').siblings('li').removeClass('now-dian')
    })

    //点击导航栏,相应弹出对应板块内容
    $('.now-dian0').click(function () {

        index = $(this).index() + 1;
        if (index == 5 || index == 4) {
            index = 4

            $(".now-dian0").css("color", "#bab5c1")
            $(".now-dian0").eq(index).css("color", "#fff")
            $(".now-dian0").eq(index - 1).css("color", "#fff")
            $(".now-dian0").removeClass("now-dian")
            $(".now-dian0").eq(index).addClass("now-dian")
            $(".now-dian0").eq(index - 1).addClass("now-dian")
        } else {
            //点击导航栏里的内容，变白色，没点的颜色不变
            $(this).css('color', 'white').siblings('li').css('color', '#bab5c1');
        }


        //点击导航栏里的内容，屏幕内容以滚轮的方式向下滚动
        $("html").animate({
            scrollTop: index * innerHeight
        }, 500)

    });


    //点击header导航里内容跳转页面
    var mainHash = window.location.hash.substring(1);
    if (mainHash) {
        cang();
        index = mainHash;
        $('html').animate({scrollTop: (index) * innerHeight}, 500)
        $('body').animate({scrollTop: (index) * innerHeight}, 500)

    }


})

