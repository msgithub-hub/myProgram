

$(function(){
    //头部引入
    $('#header01').load('header.html');

    var oHeight=window.innerHeight;
    var kaiguan=true;
    window.onload=window.onresize=function(){
        $('.home').css('height',oHeight+'px')
    };



    //右侧小圆点滚动时的响应函数
    function fn03(){
        $('#index_skip li').eq(index).find('img').attr('src','images/index-tubiao01.png').parent('li').siblings('li').find('img').attr('src','images/index-tubiao03.png');
    }
    //<!--全局点击跳转-->
    $('#index_skip').animate({
        top:'-=75'
    },0);
    $('#index_skip li').click(function(){
        $(this).find('img').attr('src','images/index-tubiao01.png').parent('li').siblings('li').find('img').attr('src','images/index-tubiao03.png');
        var n=$(this).index();
        index=n;
        $('body,html').animate( {'scrollTop':index* oHeight});

    });

    //全屏滚动时的图文动态效果
    $(window).scroll(function(){

        var height01=window.scrollY;
        //console.log(height01)
        //console.log(oHeight)
        //console.log(innerHeight)
        switch (height01){
            case oHeight:
                console.log(1)
                $('.mould_title').addClass('animated slideInDown');
                //$('.mould_pic1').animate({ marginTop:0},1500);
                //$('.mould_pic2').delay(300).animate({ marginTop:0},1500);
                //$('.mould_pic3').delay(600).animate({ marginTop:0},1500);
                break;
            case innerHeight*2:
                $('.manner_title').addClass('animated slideInDown');
                $('.manner_left').addClass('animated slideInLeft');
                $('.manner_right').addClass('animated slideInRight');
                break;
            case innerHeight*3:
                $('.team_title').addClass('animated slideInDown');
                $('.team_pic').addClass('animated slideInLeft');
                $('.team_font').addClass('animated slideInRight');
                break;
            case innerHeight*4:
                $('.culture_title').addClass('animated slideInDown');
                $('.culture01_left').addClass('animated slideInLeft');
                $('.culture01_center').addClass('animated slideInUp');
                $('.culture01_right').addClass('animated slideInRight');

                break;
            case innerHeight*5:
                $('.contact_title').addClass('animated slideInDown');
                $('.contact_bottom').addClass('animated slideInUp');
                break;
            default:
                console.log(22)
        }

    });



//全屏滚动
    var index=0;
    window.onmousewheel=function(e){//谷歌、IE浏览器
        //console.log(index);
        if(kaiguan){
            kaiguan=false;
            if(e.wheelDelta<0){
                //console.log(index);
                if(index<$('.home').length-1){
                    index++;
                }
                $('body').animate({
                    'scrollTop': index * innerHeight
                },function(){
                    kaiguan=true;
                });
               fn03();
            }
            if(e.wheelDelta>0){
                if(index>0){
                    index--;
                }
                $('body').animate({
                    'scrollTop': index * innerHeight

                },function(){
                    kaiguan=true
                });
                fn03();
            }
        }


    };
    window.addEventListener('DOMMouseScroll',function(e){//火狐全屏滚动
        if(kaiguan){
            kaiguan=false;
            if(e.detail>0){
                if(index<$('.home').length-1){
                    index++;
                }
                $('html').animate({
                    'scrollTop': index * innerHeight
                },function(){
                    kaiguan=true;

                });
                fn03();
            }
            if(e.detail<0){
                if(index>0){
                    index--;
                }
                $('html').animate({
                    'scrollTop': index * innerHeight
                },function(){
                    kaiguan=true;

                });
                fn03();
            }
        }
    },false);






    //banner图部分


    //轮播图高
    $('.banner00').css('height',oHeight+'px');

    $('.banner01').find('h1').addClass('animated slideInDown');
    $('.banner01').find('h3').addClass('animated slideInUp');
      function fn02(){
          $('.banner00').eq(index01).find('h1').addClass('animated slideInDown')
              .parents('.banner00').siblings('.banner00').find('h1').removeClass('animated slideInDown');
          $('.banner00').eq(index01).find('h3').addClass('animated slideInUp')
              .parents('.banner00').siblings('.banner00').find('h3').removeClass('animated slideInUp');
          //console.log( $('.banner00').eq(index01).find('h3'))
      }
    var index01=0;
    function fn01(){
        index01==2?index01=0:index01++;
        $('.banner').stop().animate({left:-100*index01+'%'});
        $('#banner ul li').eq(index01).css('color','black').siblings('li').css('color','white');
        fn02()

    }
    //添加定时器
    var timer=setInterval(fn01,2500);
    //清除定时器
    $('#banner').hover(function(){
        clearInterval(timer)
    },function(){
        timer=setInterval(fn01,2500)
    });
    //左右点击跳转
    $('.banner_prev').click(function(){
        fn01()
    });
    $('.banner_next').click(function(){
        index01==0?index01=2:index01--;
        $('.banner').stop().animate({left:-100*index01+'%'});
        $('#banner ul li').eq(index01).css('color','black').siblings('li').css('color','white');
        fn02()
    });

    //轮播图下面圆点点击事件
    $('#banner ul li').click(function(){
      var n=$(this).index();
        index01=n;
        $(this).css('color','black').siblings('li').css('color','white');
        $('.banner').stop().animate({left:-index01*100+'%'});
        fn02();
    });


    //样板房部分
    //左右点击切换
   $('.mould_prev').click(function(){

       $('.mould_box').animate({left:-34+'%'},function(){
           $('.mould_pic:first').appendTo('.mould_box');
           $('.mould_box').css('left','0');
       });

   });
   $('.mould_next').click(function(){
       $('.mould_pic:last').prependTo('.mould_box');
       $('.mould_box').css('left',-34+'%');
       $('.mould_box').animate({left:0});
   });

   //核心团队点击切换
$('.team_click li').click(function(){
    var n=$(this).index();
    $(this).css('background-color','darkgray').siblings('li').css('background-color','white');
    $('.team_content00').eq(n).show().siblings('.team_content00').hide();
     $('.team_content00 ').eq(n).find('.team_pic').addClass('animated slideInLeft').parents('.team_content00').siblings('.team_content00').removeClass('animated slideInLeft');
    $('.team_content00 ').eq(n).find('.team_font').addClass('animated slideInRight').parents('.team_content00').siblings('.team_content00').removeClass('animated slideInRight')

})


//企业文化hover效果
// $('.culture01').hover(function(){
//     $(this).stop().animate({ 'margin-top' :'30'}).parents('.culture_content01').siblings('.culture_content01').find('.culture01').css('margin-top',0)
// },function(){
//     $(this).animate({ 'margin-top' :'0'})
// })



});


