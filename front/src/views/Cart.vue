<template>
  <v-row>
    <template v-if="cartItems.length > 0">
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Изображение</th>
                <th class="text-left">Название</th>
                <th class="text-left">Цена товара</th>
              </tr>
            </thead>
            <tbody>
              <tr style="" v-for="(item, key) in cartItems" :key="key">
                <td>
                  <v-img
                    max-height="300"
                    max-width="300"
                    :src="item.imageUrl"
                  ></v-img>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div>Количество: {{ cartCount }}</div>
        <div>Общая стоимость: {{ cartTotalPrice }}</div>
      </v-col>
    </template>
    <template v-else>
      <v-col color=""> <v-card-text>Ваша корзина пуста</v-card-text> </v-col>
    </template>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      cartTotalPrice: "cartTotalPrice",
      cartCount: "cartCount",
    }),
  },
};
</script>
<style>
.cart_img {
  padding: 5px 0;
}
</style>
