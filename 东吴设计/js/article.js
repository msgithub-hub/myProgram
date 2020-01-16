$(function(){



    function next(){
        $(".scroll_box").stop().animate({"left":-20+"%"},function() {
            $(".scroll_box img:first").appendTo(".scroll_box");
            $(".scroll_box").css("left", 0);
        })
    }
    var timer=setInterval(next,2000);
    $(".scroll_box").hover(function(){
        clearInterval(timer)
    },function(){
        timer=setInterval(next,2000);
    });

    loadData();
    function loadData(){
        var result=articleData[getUrlParams("type")];
        $("#typeTitle").text(result.data.typeTitle);
        $("#typeEntitle").text(result.data.typeEntitle);
        $("#updateTime").text(result.data.updateAt);
        $("#author").text(result.data.updateByFullName);
        $("#cover").attr("src",result.data.coverImg);
        $("#content").text(result.data.content)
    }
    //获取页面url传过来的参数
    function getUrlParams(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        console.log(r);
        if (r != null)
            return r[2];
        else
            return "";
    }


    //var s=window.location.hash.substring(1);
    //$('.article_right li').eq(s).css('color','black').siblings('.head_nav').removeClass('show')

});