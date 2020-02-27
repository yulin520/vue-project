<template>
  <div class="t1">
    <!-- 顶部 -->
    <mt-header fixed title="百度新闻"></mt-header>
    <!-- 中部 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!--  底部-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-itemsb" to="/HomeContainer">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-itemsb" to="/MemberContainer">
				<span class="mui-icon mui-icon-contact">
        </span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-itemsb" to="/ShopcarContainer">
				<span class="mui-icon mui-icon-email ">
          <span class="mui-badge">9</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-itemsb" to="/SearchContainer">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>
  .t1{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }

 .v-enter{
   opacity: 0;
   transform: translateX(100%);
  }
  .v-leave-to{
    opacity:0;
    transform: translateX(-100%);
    position: absolute;
 }
 .v-enter-active,
 .v-leave-active{
   transition: all 0.6s ease;
 };

 .mui-bar-tab .mui-tab-itemsb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-itemsb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>
