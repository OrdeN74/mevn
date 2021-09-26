<template>
  <v-col xl="3" lg="4" md="6" sm="12">
    <v-card class="mx-auto my-12" max-width="374" elevation="5">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img class="ma-3" height="250" :src="imageUrl"></v-img>

      <v-card-title>{{ title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">4.5 (413)</div>
        </v-row>

        <div class="my-4 text-subtitle-1">{{ price }} Р</div>

        <div>Краткое описание товара</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <!--    <v-card-title>Спальное место</v-card-title>-->

      <!--    <v-card-text>-->
      <!--      <v-chip-group-->
      <!--        v-model="selection"-->
      <!--        active-class="deep-purple accent-4 white&#45;&#45;text"-->
      <!--        column-->
      <!--      >-->
      <!--        <v-chip>2000х2000</v-chip>-->

      <!--        <v-chip>1800х2000</v-chip>-->

      <!--        <v-chip>1600х2000</v-chip>-->
      <!--      </v-chip-group>-->
      <!--    </v-card-text>-->

      <v-card-actions class="justify-center">
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="$emit('add-to-cart')"
          v-if="!inCart"
        >
          Добавить
        </v-btn>
        <v-btn
          color="error lighten-2"
          text
          @click="$emit('add-to-cart')"
          v-else
        >
          Убрать из корзины
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ProductCard",
  loading: false,
  selection: 1,
  props: {
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    inCart: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped></style>
