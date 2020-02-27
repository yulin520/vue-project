//入口文件
console.log("ok")
import moment from "moment"
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"
import './lib/mui/fonts/mui-icons-extra.ttf'
import Vue from "vue"
import app from "./App.vue"
import { Header } from 'mint-ui'
import VueRouter from "vue-router" //1.1导入路由
Vue.use(VueRouter)  //1.2安装路由
Vue.component(Header.name, Header);

import { Tabbar, TabItem , Button } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
/*
import { Lazyload } from "mint-ui"
Vue.use(Lazyload)
*/
//1.3导入自己的router.js路由模块
import router from "./router.js"
// 按需导入 Mint-UI 中的组件   

Vue.component(Button.name, Button)
//2.1导入vue-resource
import VueResource from "vue-resource"
//2.2安装vue-resource
Vue.use(VueResource)
Vue.filter("dataFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    console.log(moment)
    return moment(dataStr).format(pattern)
})
var vm = new Vue({
    el: "#app",
    render: c => c(app),
    //1.4挂载路由对象到vm实例上
    router
})