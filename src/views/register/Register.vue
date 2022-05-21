<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        autocomplete="new-password"
        v-model="password"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="确认密码"
        autocomplete="new-password"
        v-model="confirmPassword"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__login-link" @click="handleLoginClick">
      已有账号去登录
    </div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "@/utils/request";
import { useToastEffect } from "@/components/Toast.vue";
import Toast from "@/components/Toast.vue";

/**
 * 处理注册相关逻辑
 * @param showToast 显示 Toast 蒙层的方法
 */
const useRegisterEffect = (showToast: (message: string) => void) => {
  const data = reactive({
    username: "",
    password: "",
  });
  const confirmPassword = ref("");
  const router = useRouter();
  const handleRegister = async () => {
    const { username, password } = data;
    if (username.length === 0) {
      showToast("请输入用户名！");
      return;
    }
    if (password.length === 0) {
      showToast("请输入密码！");
      return;
    }
    if (confirmPassword.value !== password) {
      showToast("确认密码和密码不匹配！");
      return;
    }
    try {
      const result = await post("/api/user/register", data);
      if (result?.data?.errno === 0) {
        router.push({ name: "Login" });
      } else {
        showToast("注册失败");
      }
    } catch (error) {
      showToast("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return {
    username,
    password,
    confirmPassword,
    handleRegister,
  };
};

/**
 * 处理登录跳转
 */
const useLoginEffect = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: "Login" });
  };
  return {
    handleLoginClick,
  };
};

export default {
  name: "Register",
  components: {
    Toast,
  },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, confirmPassword, handleRegister } =
      useRegisterEffect(showToast);
    const { handleLoginClick } = useLoginEffect();
    return {
      show,
      toastMessage,
      username,
      password,
      confirmPassword,
      handleRegister,
      handleLoginClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    box-sizing: border-box;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      border: none;
      outline: none;
      width: 100%;
      line-height: 0.48rem;
      background: none;
      color: $content-notice-fontcolor;
      font-size: 0.16rem;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    background: $btn-bgColor;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: $bgColor;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
