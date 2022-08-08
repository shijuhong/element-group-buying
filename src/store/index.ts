import { createStore } from "vuex";
import { Product } from "@/interfaces/Product";

export default createStore({
  state: {
    cartList: {},
  },
  getters: {},
  mutations: {
    addItemToCart(state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId];
      // 如果 store 里没有商家信息，初始化存储商家信息的对象
      if (!shopInfo) {
        shopInfo = {};
      }
      // 如果没有商品信息，初始化存储商品的对象
      let product: Product = shopInfo[productId];
      if (!product) {
        product = productInfo;
        product.count = 0;
      }
      // 商品量 +1
      product.count += 1;
      shopInfo[productId] = product;
      // 商品购物车信息更新
      state.cartList[shopId] = shopInfo;
    },
  },
  actions: {},
  modules: {},
});
