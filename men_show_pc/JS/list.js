$(function(){
    $('#tou1').load('header.html');
    //钢笔运动
    $('.gangbi').click(function(){
        $(this).parent().animate({'width':'0px'},1000,function(){
            $('.bixian1').animate({'width':'100%'})
        })
    })

    //加载数据
    var GLOBAL=GLOBAL||{};

    //点击图片加载图片
    $('.gengduo-xia').click(function(){
        if(GLOBAL.pageStart<GLOBAL.pageCount){
            loading();
        }else{
            //没有内容，敬请期待！
            $(".gengduo").attr("src","images/list_gomore_bg_nomore.jpg");
            $('.gengduo-xia').hide()
        }
    });
    loading();
    function loading() {
        if(!GLOBAL.pageStart){
            $(".box-box").html("");
            GLOBAL.pageStart = 0;
        }
        //pageStart=0;
        var num=GLOBAL.pageStart;
        var result=listData['listData0'+num];
        var list=listData['listData0'+num].data.list;
        console.log(list)
        if(!list||!list.length){

        }else{
        for (var i=0;i<list.length;i++){
            var content=$('.data').html().replace('$222$',list[i].coverImg).replace('$articleTitle$',list[i].title).replace('$updateTime$',list[i].creatAt).replace('$describe$',list[i].describe).replace('$articleId$',list[i].sysId);
            $('.box-box').append(content)
        }
    }
        GLOBAL.pageStart = result.data.pageStart + 1;//1
        GLOBAL.pageCount = Math.ceil(result.data.count/result.data.pageSize);
        //向上取整  3  因为
        //result.data.count 是定值15 result.data.pageSize是定值6

    }

    //点击qugan1-xia-1，跳转到相应网页
    $('.box-box').delegate('.qugan1-xia-1','click',function(){

        window.open("article.html?" + "type=xiaoniaoNews" + $(this).attr("aid"),"_blank");
    })

    //$('.qugan1-xia-1').click(function(){
    //    window.open('article.html?' + 'type=' + getUrlParams('type')+'&articleId'+$(this).attr('aid','_blank'));
    //})

    //获取页面url传过来的参数
    function getUrlParams(name){

        var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
        var r=window.location.search.substr(1).match(reg)

        if(r !=null)
            return r[2];
        else
            return "";
    }






    $('#jiao').load('foot.html');




})
