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
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { post } from "@/utils/request";
import Toast, { useToastEffect } from "@/components/Toast.vue";

/**
 * 处理登录相关逻辑
 * @param showToast 显示 Toast 蒙层的方法
 */
const useLoginEffect = (showToast: (message: string) => void) => {
  const data = reactive({ username: "", password: "" });
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const { username, password } = data;
      if (username.length === 0) {
        showToast("请输入用户名！");
        return;
      }
      if (password.length === 0) {
        showToast("请输入密码！");
        return;
      }
      const result = await post("/api/user/login", data);
      if (result?.data?.errno === 0) {
        localStorage.setItem("isLogin", "true");
        router.push({ name: "Home" });
      } else {
        showToast("登录失败");
      }
    } catch (error) {
      showToast("请求失败");
    }
  };
  const { username, password } = toRefs(data);
  return {
    username,
    password,
    handleLogin,
  };
};

/**
 * 处理注册跳转
 */
const useRegisterEffect = () => {
  const router = useRouter();
  const handleRegisterClick = () => {
    router.push({ name: "Register" });
  };
  return { handleRegisterClick };
};

export default {
  name: "Login",
  components: {
    Toast,
  },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const { handleRegisterClick } = useRegisterEffect();

    return {
      username,
      password,
      show,
      toastMessage,
      handleLogin,
      handleRegisterClick,
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
  &__login-button {
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
