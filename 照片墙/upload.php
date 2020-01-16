<?php
$this->title = '上传图片';
\app\assets\album\UploadAsset::Register($this);
?>
<style>
    .chooseimage{
        background: url('../images/album/photo_uploard.png') no-repeat;
        background-size: 100% 100%;
    }
    .subclass{
        width: 60%;
        height: 45px;
        background: url('../images/album/sure_submit.png') no-repeat;
        background-size: 100% 100%;
        margin-left: 20%;
    }
</style>

<div class="Upload_content1">
	<div class="chooseimage" id="chooseImage"></div>
</div>		
<ul class="Upload_content4">
<!--	<li>图片介绍</li>-->
</ul>		
<textarea class="Introduction" name="mark" placeholder="请输入对上传图片的介绍" ></textarea>

<input type="button" class="subclass" id="subbtn"  />