<template>
  <div class="haha">
    <h1>我是{{msg}}页面</h1>
    <van-button type="danger">危险按钮</van-button>
    <!--<van-list-->
      <!--v-model="loading"-->
      <!--:finished="finished"-->
      <!--finished-text="没有更多了"-->
      <!--@load="onLoad"-->
    <!--&gt;-->
      <!--<van-cell-->
        <!--v-for="item in list"-->
        <!--:key="item"-->
        <!--:title="item"-->
      <!--/>-->
    <!--</van-list>-->
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Button,List} from 'vant';
  Vue.use(Button,List);

  export default {
    name: "",
    data() {
      return {
        msg: 'haha',
        list:[],
        loading: false,
        finished: false
      }
    },
    methods:{
      onLoad(){
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style scoped>

</style>
