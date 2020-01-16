$(function(){

    //头部引入
    $('#header01').load('header.html');

//点击切换建筑风格风格
$(".style_title li").click(function(){
    var n=$(this).index();
    $(".style_title li").children("span").eq(n).addClass("show").parent().siblings(".style_title li").children().removeClass("show");
    $(".all_style").children(".Arch_style").eq(n).show().siblings(".Arch_style").hide();



    //西方建筑模块页面滚动时动态
    if($('.Arch_style01').css('display')=='block'){
        $('.manner_center1').animate({
            "margin-top": "2em","opacity":1
        },1500);
        $('.manner_center2').delay(300).animate({
            "margin-top": "2em","opacity":1
        },1500);
        $(window).scroll(function(){
            var oHeight= window.scrollY;
            for(var i=0;i<6;i++){
                if(oHeight>=(200+260*i)){
                    $('.manner_center'+(i+3)).animate({
                        "margin-top": "2em","opacity":1
                    },1500);
                }
            }
        })
        //东方建筑模块页面滚动时动态
    }else if($('.Arch_style02').css('display')=='block'){
        $('.manner_right1').animate({
            "margin-top": "2em","opacity":1
        },1500);
        $('.manner_right2').delay(300).animate({
            "margin-top": "2em","opacity":1
        },1500);
        $(window).scroll(function(){
            var oHeight= window.scrollY;
            for(var i=0;i<3;i++){
                if(oHeight>=(200+260*i)){
                    $('.manner_right'+(i+3)).animate({
                        "margin-top": "2em","opacity":1
                    },1500);
                }
            }
        })
    }
});

$(".manner_content").hover(function(){
    $(this).find(".mannerU").animate({"margin-left":"+=10",width:"-=10"},1500);
    $(this).find(".short_line").animate({width: "100%"})
},function(){
    $(this).find(".short_line").animate({width: "10%"});
    $(this).find(".mannerU").animate({"margin-left":"-=10",width:"+=10"});

})


  //全屏内容页面滚动时动态
    $('.manner_content1').animate({
        "margin-top": "2em","opacity":1
    },1500);
    $('.manner_content2').delay(300).animate({
        "margin-top": "2em","opacity":1
    },1500);
    $(window).scroll(function(){
        var oHeight= window.scrollY;
        for(var i=0;i<9;i++){
            if(oHeight>=(200+260*i)){
                $('.manner_content'+(i+3)).animate({
                    "margin-top": "2em","opacity":1
                },1500);
            }
        }
    })



});

