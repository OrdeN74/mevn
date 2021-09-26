import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/product";
import category from "@/store/category";
import cart from "./cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
    category,
    cart,
  },
});
