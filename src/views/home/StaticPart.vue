<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe7f1;</span>
    家里蹲大学2号楼10层
    <span class="iconfont position__notice">&#xe7c4;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe699;</span>
    <span class="search__text">山姆会员商店</span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01bbc35c1862eaa80121ab5d3ba637.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655342335&t=2131c65e96522ad77f6a4b66653f06f4"
      alt=""
    />
  </div>
  <div class="icons">
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt=""
      />
      <p class="icons__item__desc">超市便利</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/菜市场.png"
        alt=""
      />
      <p class="icons__item__desc">菜市场</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/水果店.png"
        alt=""
      />
      <p class="icons__item__desc">水果店</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/鲜花.png"
        alt=""
      />
      <p class="icons__item__desc">鲜花</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/医药健康.png"
        alt=""
      />
      <p class="icons__item__desc">医药健康</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/家居.png"
        alt=""
      />
      <p class="icons__item__desc">家居</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"
        alt=""
      />
      <p class="icons__item__desc">蛋糕</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/签到.png"
        alt=""
      />
      <p class="icons__item__desc">签到</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"
        alt=""
      />
      <p class="icons__item__desc">大牌免运</p>
    </div>
    <div class="icons__item">
      <img
        class="icons__item__img"
        src="http://www.dell-lee.com/imgs/vue3/红包.png"
        alt=""
      />
      <p class="icons__item__desc">红包</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script lang="ts">
export default {
  name: "StaticPart",
};
</script>

<style lang="scss">
@import "@/style/variable.scss";
@import "@/style/mixins.scss";

.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
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
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background-color: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  .iconfont {
    position: relative;
    top: 0.02rem;
    display: inline-block;
    padding: 0 0.08rem 0 0.1rem;
    font-size: 0.18rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  // banner区域的 25.4%，刚好等于图片高度
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem;
      text-align: center;
      color: $content-font-color;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-background-color;
}
</style>
