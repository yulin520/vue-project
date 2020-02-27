<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">幸福</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：2020-2-25 12:12:00</span>
      <span>点击：1次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content">
        人们对幸福看法具有多样性。幸福实实在在－－乐观主义的幸福观；幸福少于苦难－－悲观主义的幸福观；幸福就是浮云－－虚无主义的幸福观；幸福在于享乐－－享乐主义的幸福观、剥削阶级的幸福观；幸福在于奉献－－马克思主义的幸福观、无产阶级和劳动人民的幸福观。
        人们对幸福看法具有多样性。幸福实实在在－－乐观主义的幸福观；幸福少于苦难－－悲观主义的幸福观；幸福就是浮云－－虚无主义的幸福观；幸福在于享乐－－享乐主义的幸福观、剥削阶级的幸福观；幸福在于奉献－－马克思主义的幸福观、无产阶级和劳动人民的幸福观。
        人们对幸福看法具有多样性。幸福实实在在－－乐观主义的幸福观；幸福少于苦难－－悲观主义的幸福观；幸福就是浮云－－虚无主义的幸福观；幸福在于享乐－－享乐主义的幸福观、剥削阶级的幸福观；幸福在于奉献－－马克思主义的幸福观、无产阶级和劳动人民的幸福观。
        人们对幸福看法具有多样性。幸福实实在在－－乐观主义的幸福观；幸福少于苦难－－悲观主义的幸福观；幸福就是浮云－－虚无主义的幸福观；幸福在于享乐－－享乐主义的幸福观、剥削阶级的幸福观；幸福在于奉献－－马克思主义的幸福观、无产阶级和劳动人民的幸福观。
        人们对幸福看法具有多样性。幸福实实在在－－乐观主义的幸福观；幸福少于苦难－－悲观主义的幸福观；幸福就是浮云－－虚无主义的幸福观；幸福在于享乐－－享乐主义的幸福观、剥削阶级的幸福观；幸福在于奉献－－马克思主义的幸福观、无产阶级和劳动人民的幸福观。
    </div>

    <!-- 评论子组件区域 -->
    <comment-box></comment-box>
  </div>
</template>

<script>
// 1. 导入 评论子组件
import comment from "../subContainer/comment.vue";

export default {
  data() {
    return {}
  },
  methods:{

  },
  components: {
      "comment-box" :comment
  }
}
  
  
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  
}
</style>
