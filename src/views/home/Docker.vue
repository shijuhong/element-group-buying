<template>
  <div class="docker">
    <!-- class 写法：block__element--Modifier -->
    <div
      v-for="(item, index) in dockerList"
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
      :key="item.id"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { id: 1, icon: "&#xe6b8;", text: "首页" },
      { id: 2, icon: "&#xe600;", text: "购物车" },
      { id: 3, icon: "&#xe60a;", text: "订单" },
      { id: 4, icon: "&#xe78b;", text: "我的" },
    ];
    return {
      dockerList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-background-color;
  color: $content-font-color;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 0.2rem;
    // 横向和纵向都缩放一半
    transform: scale(0.5, 0.5);
    // transform 中心点为：中心的顶部
    transform-origin: center top;
  }
}
</style>
