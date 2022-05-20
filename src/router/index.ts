import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/home/Home.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "shop" */ "@/views/shop/Shop.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/Login.vue"),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin");
      isLogin === "true" ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "@/views/register/Register.vue"
      ),
    beforeEnter: (to, from, next) => {
      const isLogin = localStorage.getItem("isLogin");
      isLogin === "true" ? next({ name: "Home" }) : next();
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("isLogin");
  const { name } = to;
  const isLoginOrRegister = name === "Login" || name === "Register";
  isLogin || isLoginOrRegister ? next() : next({ name: "Login" });
});

export default router;
