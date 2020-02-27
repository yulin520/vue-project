<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/HomeContainer/newlist">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/HomeContainer/photolist">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视屏专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },  
  // created(){
  //   this.getLunboTu()
  // },
  methods: {
    // getLunboTu(){
    //   this.$http.get("http://vue.studyit.io/api/getlunbo").then(result =>{
    //     console.log(result.body)
    //   })
    // }
  }
}

</script>
<style lang= "scss" scoped>
  .mint-swipe{
    height: 250px;
    .mint-swipe-item{
      &:nth-child(1){
        background: url('../../images/美女1.jpg');
        height: 250px;
        width: 100%;
      }
      &:nth-child(2){
        background: url('../../images/美女2.jpg');
        height: 250px;
        width: 100%;
      }
      &:nth-child(3){
        background: url('../../images/美女3.jpg');
        height: 250px;
        width: 100%;
      }
    };
  }
.mui-table-view{
  background-color: white;
  .mui-table-view-cell{
    border: 0
  }
};
img{
  width: 60px;
  height: 60px;
}
</style>