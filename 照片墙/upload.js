//入口
$(function(){
    loadWX();
    var obj = wxattach('#chooseImage');
    submitForm(obj);
});

//表单提交
function submitForm(valiobj){
    var isPubLoad = false;
    $('#subbtn').click(function(){
        if(isPubLoad)return;

        var ind = layer.open({type: 2, content: '上传中...',shadeClose: false});;

        //验证图片
        if(!valiobj.isuploadok()){
            return (showmsg('请等待图片加载完成!'),layer.close(ind));
        }
		var imgid = valiobj.getimgid();
		if(imgid == ''){
			return (showmsg('请上传图片!'),layer.close(ind));
		}
		
		var mark = $('.Introduction').val();

        isPubLoad = true;

        var formd = new FormData();
        formd.append('_csrf', _csrf);
		formd.append('fileid', imgid);
		formd.append('mark', mark);

        $.ajax({
            type:"post",
            url: "/album/save",
            data: formd,
            dataType:"json",
            contentType: false,
            processData: false,
            success:function(data){
                if(data.errcode == 0){
                    //成功
                    showmsg('上传成功');
					window.history.back();
                }else{
                    showmsg(data.errmsg);
                }
            },
            error:function(ev){
                showmsg('系统繁忙,错误信息:'+ev.statusText);
            },
            complete: function(){
                isPubLoad = false;
                layer.close(ind);
            }
        })
    });
}

//上传图片插件
function wxattach(elementid){
    var element = $(elementid),
	ismayupload = true, //是否可添加图片
    nowimgid = ''; //已有图片列表

    //事件管理
    function bindEvent(){
       
        //添加图片事件
        function addimg(){
            if(!isloadwx)return showmsg('请等待wx组件加载完成');
			if(!ismayupload)return false;

            wx.chooseImage({
                count: 1,
                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds;
					if(localIds.length == 0){
						return showmsg('请选择图片');
					}
                    ismayupload = false;
                    spaceBack(localIds[0]);
                }
            });
        }

        //递归作用域回调
        function spaceBack(localid){
			element.addClass('loading').find('img').remove();
			
			wx.uploadImage({
                localId: localid, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 0, // 默认为1，显示进度提示
                success: function (res) {
                    var serverId = res.serverId; // 返回图片的服务器端ID
                    nowimgid = serverId;
					
					if(isIos()){
						wx.getLocalImgData({
							localId: localid, // 图片的localID
							success: function (res) {
								var localData = res.localData;
								element.html('<img class="coreimg" src="'+localData+'" />');
							}
						});
					}else{
						element.html('<img class="coreimg" src="'+localid+'" />');
					}
					
					element.removeClass('loading')
					ismayupload = true;
                }
            });
        }

        element.on('click', addimg);
    }

    bindEvent();

    //获取现在已有图片列表
    function getimgid(){
        return nowimgid;
    }

    //检查图片是否上传完毕
    function isuploadok(){
        return ismayupload;
    }

    return {
        'isuploadok' : isuploadok,
        'getimgid' : getimgid
    };
}


var isloadwx = false;
//加载wx
function loadWX(){
    $.post('/wxapi/loadwx',{'_csrf': _csrf, 'url': window.location.href},function(data){
        if(data.status == 'success'){
            wx.config({
                debug: false,
                appId: data.data.appId,
                timestamp: data.data.timestamp,
                nonceStr: data.data.nonceStr,
                signature: data.data.signature,
                jsApiList: ['hideOptionMenu','showOptionMenu','chooseImage','previewImage','uploadImage','getLocalImgData']
            });
            wx.ready(function(){
                wx.hideOptionMenu();
                isloadwx = true;
            });
        }else{
            showmsg('wx组件加载失败',{icon:2,time:1500});
        }
    });
    document.addEventListener('WeixinJSBridgeReady', function() {
        WeixinJSBridge.call('hideOptionMenu');
    });
}

function isIos(){
	return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
