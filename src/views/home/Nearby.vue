<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { get } from "@/utils/request";
import { ref } from "vue";
import ShopInfo from "@/components/ShopInfo.vue";

/**
 * 加载附近店铺相关逻辑
 */
const useNearbyListEffect = () => {
  const nearbyList = ref([]);
  const getNearbyList = async () => {
    const data = (await get("/api/shop/hot-list")).data;
    if (data?.errno === 0 && data?.data?.length) {
      nearbyList.value = data.data;
    }
  };
  return {
    nearbyList,
    getNearbyList,
  };
};

export default {
  name: "Nearby",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect();
    getNearbyList();
    return {
      nearbyList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.nearby {
  &__title {
    margin: 0.16rem 0 0.04rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-font-color;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $content-background-color;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-font-color;
      &__tag {
        margin-right: 0.16rem;
      }
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $highlight-fontColor;
    }
  }
  a {
    text-decoration: none;
  }
}
</style>
