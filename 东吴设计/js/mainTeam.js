/**
 * Created by asus on 2017/7/12.
 */
$(function () {
    $('#head').load('header.html');
    $(".margin").mouseenter(function () {
        $(this).children(".block").hide();
        $(this).children(".none").show();
    });
    $(".margin").mouseleave(function () {
        $(this).children(".block").show();
        $(this).children(".none").hide();
    })
});