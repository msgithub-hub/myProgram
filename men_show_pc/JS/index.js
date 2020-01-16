//shenti1，开始轮播图
$(function () {
    $('#tou1').load('header.html');
    //点击左右按钮，切换图片
    // var index = 0;
    // $('.left1').click(function () {
    //     if (index == 0) {
    //         index = 2
    //     } else {
    //         index--
    //     }
    //     $('.shenti1').find('.shenti1-1').eq(index).fadeIn().siblings('.shenti1-1').fadeOut();
    //     //点击按钮时圆点进行换色
    //     $('.diandian').children('li').eq(index).css('background', 'blue').siblings('li').css('background', 'white');
    //
    //     //文字动态效果
    //     $(".shenti1-1").eq(index).addClass("show").siblings().removeClass("show");
    //     $(".shenti1-p-1-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-1-2").addClass("animated slideInRight");
    //
    //     $(".shenti1-p-2-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-2-2").addClass("animated slideInRight");
    //
    //     $(".shenti1-p-3-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-3-2").addClass("animated slideInRight");
    //
    // });
    //
    //
    // $('.right1').click(function () {
    //     if (index == 2) {
    //         index = 0
    //     } else {
    //         index++
    //     }
    //     $('.shenti1').find('.shenti1-1').eq(index).fadeIn().siblings('.shenti1-1').fadeOut();
    //     //点击按钮时圆点进行换色
    //     $('.diandian').children('li').eq(index).css('background', 'blue').siblings('li').css('background', 'white');
    //
    //     //文字动态效果
    //     $(".shenti1-1").eq(index).addClass("show").siblings().removeClass("show");
    //     $(".shenti1-p-1-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-1-2").addClass("animated slideInRight");
    //
    //     $(".shenti1-p-2-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-2-2").addClass("animated slideInRight");
    //
    //     $(".shenti1-p-3-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-3-2").addClass("animated slideInRight");
    // });
    //
    // //点击圆点进行换色,并切图
    // $('li').click(function () {
    //     var index = $(this).index()
    //     $('.shenti1').find('.shenti1-1').eq(index).fadeIn().siblings('.shenti1-1').fadeOut();
    //     $('.diandian').children('li').eq(index).css('background', 'blue').siblings('li').css('background', 'white');
    // })
    //
    // //添加定时器
    // var dingshiqi=setInterval(function(){
    //     if (index == 2) {
    //         index = 0
    //     } else {
    //         index++
    //     }
    //     $('.shenti1').find('.shenti1-1').eq(index).fadeIn().siblings('.shenti1-1').fadeOut();
    //     //点击按钮时圆点进行换色
    //     $('.diandian').children('li').eq(index).css('background', 'blue').siblings('li').css('background', 'white');
    //
    //     //文字动态效果
    //     $(".shenti1-1").eq(index).addClass("show").siblings().removeClass("show");
    //     $(".shenti1-p-1-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-1-2").addClass("animated slideInRight");
    //
    //     $(".shenti1-p-2-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-2-2").addClass("animated slideInRight");
    //
    //     $(".shenti1-p-3-1").addClass("animated slideInLeft");
    //     $(".shenti1-p-3-2").addClass("animated slideInRight");
    // },2900)
    // //鼠标放入图片，定时器停止
    // $('.shenti1').mouseover(function(){
    //     clearInterval(dingshiqi)
    // })
    // //鼠标移出图片，定时器运动
    // $('.shenti1').mouseleave(function(){
    //     dingshiqi=setInterval(function(){
    //         if (index == 2) {
    //             index = 0
    //         } else {
    //             index++
    //         }
    //         $('.shenti1').find('.shenti1-1').eq(index).fadeIn().siblings('.shenti1-1').fadeOut();
    //         //点击按钮时圆点进行换色
    //         $('.diandian').children('li').eq(index).css('background', 'blue').siblings('li').css('background', 'white');
    //
    //         //文字动态效果
    //         $(".shenti1-1").eq(index).addClass("show").siblings().removeClass("show");
    //         $(".shenti1-p-1-1").addClass("animated slideInLeft");
    //         $(".shenti1-p-1-2").addClass("animated slideInRight");
    //
    //         $(".shenti1-p-2-1").addClass("animated slideInLeft");
    //         $(".shenti1-p-2-2").addClass("animated slideInRight");
    //
    //         $(".shenti1-p-3-1").addClass("animated slideInLeft");
    //         $(".shenti1-p-3-2").addClass("animated slideInRight");
    //     },2900)
    //
    // })


//.shenti2的轮播图效果
    var index1 = 0;
    $('.shuangjiantou .right2').click(function () {
        index1 == 3 ? index1 = 0 : index1++;
        $('.shenti2').find('.qiehuan').eq(index1).show().addClass('animated bounceInLeft').siblings('.qiehuan').hide().removeClass("animated bounceInLeft");
        $('.bigyuanall').eq(index1).show().parent().siblings('.bigyuan').children('.bigyuanall').hide();
    });
    $('.shuangjiantou .left2').click(function () {
        index1 == 0 ? index1 = 3 : index1--;
        $('.shenti2').find('.qiehuan').eq(index1).show().addClass('animated bounceInRight').siblings('.qiehuan').hide().removeClass("animated bounceInRight");
        $('.bigyuanall').eq(index1).show().parent().siblings('.bigyuan').children('.bigyuanall').hide();
    })
//.shu-angniu的轮播图效果
    $('.bigyuan').click(function () {
        index1 = $(this).index();
        $('.shenti2').find('.qiehuan').eq(index1).show().addClass('animated bounceInRight').siblings('.qiehuan').hide().removeClass("animated bounceInRight");
        $('.bigyuanall').eq(index1).show().parent().siblings('.bigyuan').children('.bigyuanall').hide();
    });


//点击shenti4中的图片，进行显示隐藏
    $('.xlacdpic').click(function () {
        $(this).nextAll('.xlacdziti').stop().slideToggle().end().parent(".xlacdsange").siblings('.xlacdsange').find(".xlacdziti").slideUp();
    })
//点击“+”号，进行切图
    $('.xlacd-jiahaozong').click(function () {
        $(this).addClass('x');
        $(this).parent('.xlacdsange').siblings('.xlacdsange').children('.xlacd-jiahaozong').removeClass('x');
        $(this).next('.xlacdziti').stop().slideToggle().end().parent(".xlacdsange").siblings('.xlacdsange').find(".xlacdziti").slideUp();
    });

//shengti5 wufengtu 效果
    var i = 0;
    $('.left5').click(function () {
        if (i == 0) {
            i = 2
        } else {
            i--
        }
        $('.wufengtusange').find('.wufengtusange-see').children('.wufengtu').eq(i).fadeIn().addClass('animated bounceInRight').siblings('.wufengtu').fadeOut();
        //点击.left5进行换色
        $('.angniu5').find('.diandian5').children('.diandian5-1').eq(i).css('background', 'blue').siblings('.diandian5-1').css('background', 'white');
    });


    $('.right5').click(function () {
        if (i == 2) {
            i = 0
        } else {
            i++
        }
        $('.wufengtusange').find('.wufengtusange-see').children('.wufengtu').eq(i).show().addClass('animated bounceInRight').siblings('.wufengtu').hide();
        //点击.right5进行换色
        $('.angniu5').find('.diandian5').children('.diandian5-1').eq(i).css('background', 'blue').siblings('.diandian5-1').css('background', 'white');
    });

//添加定时器
    var timer = setInterval(function () {
        if (i == 0) {
            i = 2
        } else {
            i--
        }
        $('.wufengtusange').find('.wufengtusange-see').children('.wufengtu').eq(i).fadeIn().siblings('.wufengtu').fadeOut();
        //点击.left5进行换色
        $('.angniu5').find('.diandian5').children('.diandian5-1').eq(i).css('background', 'blue').siblings('.diandian5-1').css('background', 'white');
    }, 2000);

//鼠标进入图片时，定时器取消,鼠标移出，定时器继续工作
    $('.wufengtusange-see').mouseover(function () {
        clearInterval(timer)
    })
    $('.wufengtusange-see').mouseout(function () {
        timer = setInterval(function () {
            if (i == 0) {
                i = 2
            } else {
                i--
            }
            $('.wufengtusange').find('.wufengtusange-see').children('.wufengtu').eq(i).fadeIn().siblings('.wufengtu').fadeOut();
            //点击.left5进行换色
            $('.angniu5').find('.diandian5').children('.diandian5-1').eq(i).css('background', 'blue').siblings('.diandian5-1').css('background', 'white')
        }, 2000)
    });
//清除定时器（移入.angniu5时）
    $('.angniu5').mouseover(function () {
        clearInterval(timer)
    });
    $('.angniu5').mouseout(function () {
        timer = setInterval(function () {
            if (i == 0) {
                i = 2
            } else {
                i--
            }
            $('.wufengtusange').find('.wufengtusange-see').children('.wufengtu').eq(i).fadeIn().siblings('.wufengtu').fadeOut();
            //点击.left5进行换色
            $('.angniu5').find('.diandian5').children('.diandian5-1').eq(i).css('background', 'blue').siblings('.diandian5-1').css('background', 'white')
        }, 2500)
    });



//创建和初始化地图函数：
//     function initMap() {
//         createMap();//创建地图
//         setMapEvent();//设置地图事件
//         addMapControl();//向地图添加控件
//     }

//创建地图函数：
//     function createMap() {
//         var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
//         var point = new BMap.Point(120.289717, 31.551488);//定义一个中心点坐标
//         map.centerAndZoom(point, 17);//设定地图的中心点和坐标并将地图显示在地图容器中
//         window.map = map;//将map变量存储在全局
//     }

//地图事件设置函数：
//     function setMapEvent() {
//         map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
//         map.enableScrollWheelZoom();//启用地图滚轮放大缩小
//         map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
//         map.enableKeyboard();//启用键盘上下左右键移动地图
//     }

//地图控件添加函数：
//     function addMapControl() {
//         //向地图中添加缩放控件
//         var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE});
//         map.addControl(ctrl_nav);
//         //向地图中添加缩略图控件
//         var ctrl_ove = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1});
//         map.addControl(ctrl_ove);
//         //向地图中添加比例尺控件
//         var ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
//         map.addControl(ctrl_sca);
//     }
//     initMap();//创建和初始化地图

   

    $('#jiao').load('foot.html');


//返回顶部
    $(window).scroll(function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 800) {
            $('#returnback').fadeIn()
        }
        else {
            $('#returnback').fadeOut()
        }
    });
    $('#returnback').click(function () {
        $('body').animate({scrollTop: 0});
        $('html').animate({scrollTop: 0})
    });


    //音乐盒子
    var music = document.getElementById("bgMusic");
    $(".song img").click(function () {
        if (music.paused) {
            music.play();
            $(".song img").removeClass("pause").addClass("play");
        } else {
            music.pause();
            $(".song img").removeClass("play").addClass("pause");
        }
    });


})





