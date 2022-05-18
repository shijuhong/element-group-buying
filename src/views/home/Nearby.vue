<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div v-for="item in nearbyList" :key="item.id" class="nearby__item">
      <img :src="item.imgUrl" alt="" class="nearby__item__img" />
      <div class="nearby__content">
        <div class="nearby__content__title">{{ item.title }}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tags__tag"
            v-for="(tag, index) in item.tags"
            :key="index"
          >
            {{ tag }}
          </span>
        </div>
        <p class="nearby__content__highlight">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Nearby",
  setup() {
    const nearbyList = [
      {
        id: 1,
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "沃尔玛",
        tags: ["月售1万+", "起送¥0", "基础运费¥5"],
        desc: "VIP尊享满89元减4元运费券（每月3张）",
      },
      {
        id: 2,
        imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
        title: "山姆会员商店",
        tags: ["月售2千+", "起送¥0", "基础运费¥5"],
        desc: "联合利华洗护满10减5",
      },
    ];
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
      color: #e93b3b;
    }
  }
}
</style>
