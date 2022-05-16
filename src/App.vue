<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe7f1;</span>
      家里蹲大学2号楼10层
      <span class="iconfont position__notice">&#xe7c4;</span>
    </div>
  </div>
  <div class="docker">
    <!-- class 写法：block__element--Modifier -->
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6b8;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe60a;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe78b;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/variable.scss";
@import "./style/mixins.scss";

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  color: $content-font-color;
  .position {
    position: relative;
    padding: 0.16rem 0.24rem 0 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    @include ellipsis;
    &__icon {
      position: relative;
      top: 0.01rem;
      font-size: 0.2rem;
    }
    &__notice {
      position: absolute;
      right: 0;
      top: 0.17rem;
      font-size: 0.2rem;
    }
  }
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
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
