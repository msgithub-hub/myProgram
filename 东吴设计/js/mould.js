$(function(){
    $('#header').load('header.html');

    $('.head_nav').eq(2).addClass('show').siblings('.head_nav').removeClass('show')





    $(".list_list li").click(function(){
        $(this).addClass("list_hover").siblings().removeClass("list_hover")
    });
    $(".fadeIn0").delay(100).animate({
        "margin-top": "0","opacity":1
    });
    $(".fadeIn1").delay(300).animate({
        "margin-top": "0","opacity":1
    });
    $(".fadeIn2").delay(500).animate({
        "margin-top": "0","opacity":1
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>=400){
            $(".fadeIn3").delay(100).animate({
                "margin-top": "50px","opacity":1
            });
            $(".fadeIn4").delay(300).animate({
                "margin-top": "50px","opacity":1
            });
            $(".fadeIn5").delay(500).animate({
                "margin-top": "50px","opacity":1
            });
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>=800){
            $(".fadeIn6").delay(100).animate({
                "margin-top": "50px","opacity":1
            });
            $(".fadeIn7").delay(300).animate({
                "margin-top": "50px","opacity":1
            });
        }
    });

    $('.tab').click(function(){
       var index=$(this).index();
        $(".none").eq(index).show().siblings().hide();
        if($(".mould").css("display")=="block"){
            $(".list_list li").click(function(){
                $(this).addClass("list_hover").siblings().removeClass("list_hover")
            });
            $(".fadeIn0").delay(100).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn1").delay(300).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn2").delay(500).animate({
                "margin-top": "0","opacity":1
            });
            $(window).scroll(function(){
                if($(this).scrollTop()>=400){
                    $(".fadeIn3").delay(100).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn4").delay(300).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn5").delay(500).animate({
                        "margin-top": "50px","opacity":1
                    });
                }
            });
            $(window).scroll(function(){
                if($(this).scrollTop()>=800){
                    $(".fadeIn6").delay(100).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn7").delay(300).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn8").delay(500).animate({
                        "margin-top": "50px","opacity":1
                    });
                }
            });
        } else if($(".mould1").css("display")=="block"){
            $(".fadeIn10").delay(100).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn11").delay(300).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn12").delay(500).animate({
                "margin-top": "0","opacity":1
            });
        } else if($(".mould2").css("display")=="block"){
            $(".fadeIn20").delay(100).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn21").delay(300).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn22").delay(500).animate({
                "margin-top": "0","opacity":1
            });
        } else if($(".mould3").css("display")=="block"){
            $(".fadeIn30").delay(100).animate({
                "margin-top": "0","opacity":1
            });
        }
    });

    $('.tab1').click(function(){

        $(".mouldxiala1 div:first").show();
        $(".mouldxiala2").show();

        var index=$(this).index();
        $(".none").eq(index).show().siblings().hide();
        if($(".mould").css("display")=="block"){
            $(".list_list li").click(function(){
                $(this).addClass("list_hover").siblings().removeClass("list_hover")
            });
            $(".fadeIn0").delay(100).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn1").delay(300).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn2").delay(500).animate({
                "margin-top": "0","opacity":1
            });
            $(window).scroll(function(){
                if($(this).scrollTop()>=400){
                    $(".fadeIn3").delay(100).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn4").delay(300).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn5").delay(500).animate({
                        "margin-top": "50px","opacity":1
                    });
                }
            });
            $(window).scroll(function(){
                if($(this).scrollTop()>=800){
                    $(".fadeIn6").delay(100).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn7").delay(300).animate({
                        "margin-top": "50px","opacity":1
                    });
                    $(".fadeIn8").delay(500).animate({
                        "margin-top": "50px","opacity":1
                    });
                }
            });
        } else if($(".mould1").css("display")=="block"){
            $(".fadeIn10").delay(100).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn11").delay(300).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn12").delay(500).animate({
                "margin-top": "0","opacity":1
            });
        } else if($(".mould2").css("display")=="block"){
            $(".fadeIn20").delay(100).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn21").delay(300).animate({
                "margin-top": "0","opacity":1
            });
            $(".fadeIn22").delay(500).animate({
                "margin-top": "0","opacity":1
            });
        } else if($(".mould3").css("display")=="block"){
            $(".fadeIn30").delay(100).animate({
                "margin-top": "0","opacity":1
            });
        }
    });


    $(".close1").click(function(){
        $(".mouldxiala1").hide();
        $(".mouldxiala2").hide();
        $(".mouldxiala").show()
    });

    $(".mouldxiala").click(function(){
        $(".mouldxiala").hide();
        $(".mouldxiala1 div:first").hide();
        $(".mouldxiala1").show().delay(100).animate({"margin-top":"0","margin-bottom":"30px"});
        $(window).scrollTo(0,70)
    });


});
