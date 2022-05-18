<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import StaticPart from "@/views/home/StaticPart.vue";
import Nearby from "@/views/home/Nearby.vue";
import Docker from "@/views/home/Docker.vue";

export default {
  name: "Home",
  components: {
    StaticPart,
    Nearby,
    Docker,
  },
};
</script>

<style lang="scss">
@import "@/style/variable.scss";
@import "@/style/mixins.scss";

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.2rem 0.18rem;
  color: $content-font-color;
}
</style>
