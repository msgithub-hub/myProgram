
$(function(){
    $('#tou1').load('header.html');
    //钢笔运动
    // $('.hate-gangbi').click(function(){
    //     $(this).parent('.hate-bixian').animate({'width':'100%'},1000,function(){
    //         $('.hate-bixian').animate({'width':'100%'})
    //     })
    // });
    loadArticleDetail();
function loadArticleDetail(){
    //加载header导航里的出数据
    if(getUrlParams('type')){
        var result=articleData[getUrlParams('type')+getUrlParams('articleId')];
        $('.xiao-niao-dong-tai').html(result.data.typeTitle);
        $('.our-dynamic').html(result.data.typeEntitle);
        $('.long-text').text(result.data.title);
        $('.leader').html(result.data.updateAt);
        $('.hate-box').css('background',result.data.coverImg);
        $('.leader-1').html(result.data.creatByFullName);
        $('.neirong-content').html(result.data.content);
    }
}

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






});

