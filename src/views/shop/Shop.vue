<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe679;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe699;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
    <Content />
    <Cart />
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import ShopInfo from "@/components/ShopInfo.vue";
import { reactive, toRefs } from "vue";
import { get } from "@/utils/request";
import Content from "./Content.vue";
import Cart from "./Cart.vue";

/**
 * 获取当前商铺信息逻辑
 */
const useShopInfoEffect = () => {
  const route = useRoute();
  const data = reactive({ item: {} });
  const getItemData = async () => {
    const result = (await get(`/api/shop/${route.params.id}`)).data;
    if (result?.errno === 0 && result?.data) {
      data.item = result.data;
    }
  };
  const { item } = toRefs(data);
  return {
    item,
    getItemData,
  };
};

/**
 * 点击返回主页逻辑
 */
const useBackRouterEffect = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };
  return {
    handleBackClick,
  };
};

export default {
  name: "Shop",
  components: {
    ShopInfo,
    Content,
    Cart,
  },
  setup() {
    const { item, getItemData } = useShopInfoEffect();
    const { handleBackClick } = useBackRouterEffect();
    getItemData();
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
