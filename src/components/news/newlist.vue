<template>
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <router-link to="/HomeContainerr/newlist/newsinfo" class="">
            <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
            <div class="mui-media-body">
                幸福
                <p class="mui-ellipsis">
                    <span>发表时间:{{ time|dataFormat }}</span>
                    <span>点击: 1次</span>
                </p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
            <div class="mui-media-body">
                木屋
                <p class="mui-ellipsis">
                    <span>发表时间:2020-2-25 12:12:00</span>
                    <span>点击: 1次</span>
                </p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
            <div class="mui-media-body">
                CBD
                <p class="mui-ellipsis">
                    <span>发表时间:2020-2-25 12:12:00</span>
                    <span>点击: 1次</span>
                </p>
            </div>
        </a>
    </li>

</ul>
</template>

<script>
export default {
    data(){
        return {
            time: "2020-2-25 12:12:00"
        }
    }

}

</script>
<style lang= "scss" scoped>
    .mui-ellipsis{
        color: blue;
        /* 行内元素两端对齐的样式 */
        display: flex;
        justify-content: space-between;
    }
</style>