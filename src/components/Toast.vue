<template>
  <div class="toast">{{ message }}</div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";

export default {
  name: "Toast",
  props: ["message"],
};

/**
 * 蒙层 Toast 相关逻辑
 */
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: "",
  });
  const showToast = (message: string) => {
    toastData.show = true;
    toastData.toastMessage = message;
    setTimeout(() => {
      toastData.show = false;
      toastData.toastMessage = "";
    }, 2000);
  };
  const { show, toastMessage } = toRefs(toastData);
  return { show, toastMessage, showToast };
};
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: $bgColor;
}
</style>
