$(function(){
    $('.foot-center ul li').click(function(){
        var num=$(this).index();
        // $(this).stop().html('<embed  src="music/sound0'+num+'.mp3" autostart="true" hidden="true" loop="flase">')

        $(this).append('<audio autoplay src="music/sound0'+num+'.mp3">')
    })
})
