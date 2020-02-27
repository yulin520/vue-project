import VueRouter from 'vue-router'
import Vue from "vue"
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue"
import SearchContainer from  "./components/tabbar/SearchContainer.vue"
import NewList from "./components/news/newlist.vue"
import NewsInfo from "./components/news/newsinfo.vue"
// import comment from "./components/subContainer/comment.vue"
import PhotoList from "./components/goods/PhotoList.vue"
import All from "./components/goods/all.vue"
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 中国中航
var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/HomeContainer"},
    { path: "/HomeContainer", component:HomeContainer },
    { path: "/MemberContainer", component:MemberContainer },
    { path: "/ShopcarContainer", component:ShopcarContainer },
    { path: "/SearchContainer", component:SearchContainer },
    { path: "/HomeContainer/newlist", component:NewList },
    { path: "/HomeContainerr/newlist/newsinfo", component: NewsInfo},
    { path: "/HomeContainer/photolist", component: PhotoList},
    { path: "/HomeContainer/photolist/all", component: All},

  ],
  linkActiveClass: "mui-active", //覆盖默认的路由高亮的类
})

// 把路由对象暴露出去
export default router