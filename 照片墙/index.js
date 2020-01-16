$(function(){
	loadData();
	
	function loadData(){
		var isloading = false,
		lodata = {
			offset: 0,
			cate: 0
		},
		allImgList = [];
		
		//加载
		$('#loadmore,#loadmore2').click(function(){
			$(this).hide();
			load();
		});
		
		//选择分类
		$('#cateList li').on('click', function(){
			if($(this).hasClass('active')){
				return false;
			}
			
			var id = $(this).data('id') || 0;
			lodata.cate = id;
			lodata.offset = 0;
			$('#loadmore,#loadmore2').hide();
			$('#cateList li').removeClass('active');
			$(this).addClass('active');
			$('.photo-wall').html('');
			load();
		});
		
		//添加数据
		function addData(data){
			var html = '';
			for(var i = 0; i < data.length; i++){
                html = `<div class="preview" data-src="${data[i]['imgsrc']}" data-id="${data[i]['id']}">
						<img src="${data[i]['imgsrc']}" alt="" class="photos_img"/>
						<div class="like yes">
							<img index="${i}" src="../../images/album/like.png" class="finger">
                            <img index="${i}" src="../../images/album/yilike.png" class="finger1">
                            <b class="finger_num">0</b>
						</div>
					</div>`
				allImgList.push(HTTPHOST+data[i]['imgsrc']);
                $('.photo-wall').append(bindEvent(html));
			}
			// 点赞
            $('.finger').click(function (e) {
                var index = $(e.target).attr('index');
                var praise_txt = $(".finger_num").eq(index);
                var num = parseInt(praise_txt.text());
                $(this).hide();
                $('.finger1').eq(index).show();
                num++;
                praise_txt.text(num);
            });

            $('.finger1').click(function (e) {
                var index = $(e.target).attr('index');
                var praise_txt = $(".finger_num").eq(index);
                var num = parseInt(praise_txt.text());
                $(this).hide();
                $('.finger').eq(index).show();
                num--;
                praise_txt.text(num);
            })

		}
		
		//绑定事件
		function bindEvent(html){
			var htmlDom = $(html);
            htmlDom.children().eq(0).on('click', function () {
                var imgsrc = HTTPHOST + $(this).attr('src');
                WeixinJSBridge.invoke('imagePreview', {
                    'current': imgsrc,
                    'urls': allImgList
                });
            })
			return htmlDom;
		}
		
		//ajax加载
		function load(){
			if(isloading)return;
			isloading = true;
			
			$('#loading').show();

            $.ajax({
                type: 'get',
                url: '/album/data',
                data: lodata,
                dataType: 'json',
                success: function(da){
                    $('#loading').hide();
                    if(da.status == 'success'){
                        var datas = da.data;
                        if(datas.length == 0){
                            $('#loadmore2').show();
                        }else{
                            $('#loadmore').show();
                            lodata.offset = parseInt(da.offset);

                            if(lodata.type == 3){
                                addVideoData(datas);
                            }else{
                                addData(datas);
                            }
                        }
                    }else{
                        showmsg(da.msg);
                    }
                    isloading = false;
                },
                error: function(da){
                    showmsg('系统繁忙,错误码:'+da.status);
                    $('#loading').hide();
                    isloading = false;
                }
            });

		}
		load();
		return {};
	}


});
