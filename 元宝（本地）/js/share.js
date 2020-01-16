$(function(){
    $.getJSON('/tpd/index.php/festival/weixin/getSignPackage',function(data){

        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.error(function(res){

        });

        wx.ready(function(){
            set_menus();
        });

    });

    
});


function set_menus(){
    /*wx.hideMenuItems({
        menuList: ['menuItem:share:qq','menuItem:share:QZone','menuItem:share:weiboApp','menuItem:share:facebook','menuItem:share:QZone','menuItem:openWithQQBrowser','menuItem:openWithSafari','menuItem:share:email'] // 要隐藏的菜单项，所有menu项见附录3
    });*/

    wx.onMenuShareTimeline({
        title: '上海医药为大家准备了中秋礼物，快来赢取吧~ ', // 分享标题
        link: 'http://m.sphchina.com/tpd/index.php/festival/zqjcjone/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://m.sphchina.com/tpd/pub/festival/zqjcjone/images/share.jpg', // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });

    wx.onMenuShareAppMessage({
        title: '上海医药为大家准备了中秋礼物，快来赢取吧~  ', // 分享标题
        desc: '今天记得要陪伴在家人身边或给家人打个电话送上祝福哦~', // 分享描述
        link: 'http://m.sphchina.com/tpd/index.php/festival/zqjcjone/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://m.sphchina.com/tpd/pub/festival/zqjcjone/images/share.jpg', // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });

    /*$(document).on('click', '.preview', function(){
        var _this_img_url = 'http://' + window.location.host + $(this).attr('src');
        //console.log(_this_img_url);
        wx.previewImage({
            current: _this_img_url, // 当前显示图片的http链接
            urls: [_this_img_url]
        });
    });*/
}