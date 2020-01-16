var GLOBAL = GLOBAL || {};
$(function(){
    $("#header").load("header.html");
    $("#coverimg").addClass("animated fadeInLeft");

    GLOBAL.articlType = getUrlParams("type");
    //GLOBAL.articleId = getUrlParams("articleId");

    loadArticleDetail();

});
function loadArticleDetail() {

    if (getUrlParams("type")) {
        var result = articleData[getUrlParams("type") ];
        $('#Title').text(result.data.title);
        $("#Entitle").html(result.data.typeEntitle);
        $('#coverimg').attr("src", result.data.coverImg);
        $('#articleContent').html(result.data.content);
    }
}
function getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);

    console.log(r);
    if (r != null)
        return r[2];
    else
        return "";
}