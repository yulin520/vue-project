<template>
<div>
    <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
            <div class="mui-scroll">
                <router-link class="mui-control-item" to="/HomeContainer/photolist/all" data-wid="tab-top-subpage-1.html">
                    全部
                </router-link>
                <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                    美女
                </a>
                <a class="mui-control-item mui-active" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                    美食
                </a>
                <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                    风景
                </a>
                <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                    帅哥
                </a>
            </div>
        </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link to="/HomeContainer/photolist/all" tag="li">
        
      </router-link>
    </ul>
</div>
</template>

<script>
// 1. 导入 mui 的js文件
import mui from "../../lib/mui/js/mui.min.js";
    export default {
        data(){
            return {}
        },
        methods:{

        },
        mounted(){
        // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
        // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
        // 2. 初始化滑动控件
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            })
        }
    }

</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y;
}

// image[lazy=loading]{
//     width: 40px;
//     height: 300px;
//     margin: auto
// }
</style>
