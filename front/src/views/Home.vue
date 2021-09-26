<template>
  <v-row>
    <product-card
      v-for="(product, key) in products"
      :key="key"
      :title="product.title"
      :price="product.price"
      :imageUrl="product.imageUrl"
      @add-to-cart="addToCart(product)"
      :in-cart="cartItemsIds.includes(product._id)"
    />
  </v-row>
</template>

<script>
import ProductCard from "@/components/productCard";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    ProductCard,
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters({
      products: "products",
      cartItems: "cartItems",
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
    ...mapMutations({
      addToCart: "addToCart",
    }),
  },
};
</script>
