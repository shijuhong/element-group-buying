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
        placeholder="请输入手机号"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        class="wrapper__input__content"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { post } from "@/utils/request";
import Toast, { useToastEffect } from "@/components/Toast.vue";

export default {
  name: "Login",
  components: {
    Toast,
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      username: "",
      password: "",
    });
    const { toastData, showToast } = useToastEffect();
    const handleLogin = async () => {
      try {
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
    const handleRegisterClick = () => {
      router.push({ name: "Register" });
    };
    return {
      data,
      toastData,
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
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #ffffff;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
