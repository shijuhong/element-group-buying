<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category__item: true,
          'category__item--active': item.tab === currentTab,
        }"
        v-for="item in categories"
        :key="item.tab"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">{{ item.sales }}</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span class="product__number__minus">-</span>
          {{ cartList?.[shopId]?.[item._id]?.count || 0 }}
          <span
            class="product__number__plus"
            @click="() => addItemToCart(shopId, item._id, item)"
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { get } from "@/utils/request";
import { reactive, Ref, ref, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Product } from "@/interfaces/Product";

const categories: { name: string; tab: string }[] = [
  {
    name: "全部商品",
    tab: "all",
  },
  {
    name: "秒杀",
    tab: "seckill",
  },
  {
    name: "新鲜水果",
    tab: "fruit",
  },
];

/**
 * 和 Tab 切换相关的路基
 */
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab);
  const handleTabClick = (tab: string) => {
    currentTab.value = tab;
  };
  return {
    currentTab,
    handleTabClick,
  };
};

/**
 * 商品详情列表内容相关逻辑
 * @param currentTab 当前商品所属类别
 */
const useCurrentListEffect = (currentTab: Ref, shopId: string) => {
  const content = reactive({ list: [] });

  const getContentData = async (tab: string) => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab,
    });
    if (result.data?.errno === 0 && result.data?.data) {
      content.list = result.data.data;
    }
  };
  // 首次页面加载 & 依赖的数据发生变化时执行
  watchEffect(() => {
    getContentData(currentTab.value);
  });

  const { list } = toRefs(content);
  return {
    list,
  };
};

/**
 * 购物车相关逻辑
 */
const useCartEffect = () => {
  const store = useStore();
  const { cartList } = toRefs(store.state);
  const addItemToCart = (
    shopId: number,
    productId: number,
    productInfo: Product
  ): void => {
    store.commit("addItemToCart", { shopId, productId, productInfo });
  };
  return {
    cartList,
    addItemToCart,
  };
};

export default {
  name: "Content",
  setup() {
    const route = useRoute();
    const shopId = route.params.id as string;
    const { currentTab, handleTabClick } = useTabEffect();
    const { list } = useCurrentListEffect(currentTab, shopId);
    const { cartList, addItemToCart } = useCartEffect();

    return {
      shopId,
      categories,
      list,
      currentTab,
      handleTabClick,
      cartList,
      addItemToCart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
@import "@/style/mixins.scss";

.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background: $search-background-color;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: $content-font-color;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-background-color;
    display: flex;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-font-color;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: $content-font-color;
    }
    &__price {
      margin: 0;
      line-height: 0.16rem;
      font-size: 0.14rem;
      color: $highlight-fontColor;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.16em;
      line-height: 0.01rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        box-sizing: border-box;
        line-height: 0.15rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &__minus {
        border: 0.01rem solid $light-fontColor;
        color: $light-fontColor;
        margin-right: 0.05rem;
      }
      &__plus {
        border: none;
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
