<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe679;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe699;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" />
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import ShopInfo from "@/components/ShopInfo.vue";

export default {
  name: "Shop",
  components: {
    ShopInfo,
  },
  setup() {
    const router = useRouter();
    const item = {
      _id: "1",
      name: "沃尔玛",
      imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: "VIP尊享满89元减4元运费券",
    };
    const handleBackClick = () => {
      router.back();
    };
    return {
      item,
      handleBackClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;
  &__back {
    height: 0.32rem;
    width: 0.3rem;
    font-size: 0.2rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-background-color;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      font-size: 0.2rem;
      color: $search-fontcolor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2em;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      color: $content-font-color;
      font-size: 0.14rem;
      &::placeholder {
        color: $content-font-color;
      }
    }
  }
}
</style>
