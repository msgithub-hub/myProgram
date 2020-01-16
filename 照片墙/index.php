<?php
$this->title = '';
\app\assets\album\IndexAsset::Register($this);
?>
<style>

    .uploadbtn {
        position: fixed;
        right: 0px;
        bottom: 0px;
        width: 3.5rem;
        height: 3.5rem;
        background: url('../images/album/uploard_btn.png') no-repeat;
        background-size: 100% 100%;
    }

    .tittle_head {
        width: 100%;
        height: 23vw;
        /*background: white;*/
        display: flex;
        align-items: center;
    }

    .headImg {
        width: 17%;
        height: auto;
        border-radius: 7px;
        margin-left: 3%;
    }

    .name {
        width: 34%;
        color: black;
        /*background: yellow;*/
        text-align: left;
        margin-left: 3%;
        font-size: 1.1rem;

        display: block;
        overflow: hidden;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .love_img {
        width: 40%;
        height: auto;
        /*margin-left: 15%;*/
    }

    .preview {
        width: 47%;
        padding-left: 3%;
        /*padding-right: 2%;*/
        padding-top: 3%;
        float: left;
        margin-left: 2%;
        /*padding-bottom: 2vh;*/
        background: white;
        margin-top: 1vh;
    }

     .photos_img {
        width: 41vw;
        height: 40vw;
        object-fit: cover;
    }

    /*点赞*/
    .yes{
        width: 41vw;
        height: 12vw;
        /*background: yellow;*/
        display: flex;
        align-items: center;
    }
    .finger{
        width: 15%;
        height: auto;
        margin-left: 48%;
    }
    .finger1 {
        width: 15%;
        height: auto;
        margin-left: 48%;
        display: none;
    }
    .finger_num{
        width: 33%;
        font-size: 1.1rem;
        /*background: blue;*/
        text-align: left;
        margin-left: 3%;
        overflow: auto;
    }
</style>
<div id="all">
    <a class="uploadbtn" href="/album/upload"></a>

    <div class="tittle_head">
        <img src="../images/album/head.png" class="headImg"/>
        <p class="name">张三李四</p>
        <img src="../images/album/love_img.png" class="love_img"/>
    </div>


    <ul class="photo-wall"></ul>
    <div class="tipsbox">
        <p class="loading" id="loading"><span style="color: black;">加载中...</span></p>
        <p class="loadmore colorblue" id="loadmore" style="color: black;">加载更多</p>
        <p class="loadmore" id="loadmore2" style="color: black;">未找到新数据，<span class="colorblue">继续加载?</span></p>
    </div>
</div>
