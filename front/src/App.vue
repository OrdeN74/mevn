<template>
  <v-app id="app">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer />
      <v-btn small to="/cart" class="mx-2" fab>
        <v-icon>mdi-cart</v-icon>
        <v-badge
          v-if="cartCount"
          bordered
          color="green"
          :content="cartCount"
          offset-x="-1"
          offset-y="-1"
        ></v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" fixed temporary>
      <v-list-item-group color="primary" class="flex-row">
        <v-list-item
          v-for="(category, key) in categories"
          :key="key"
          :to="`category/${category.id}`"
        >
          <v-list-item-content>
            <v-list-item-title v-text="category.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-main class="grey lighten-2">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    drawer: null,
  }),
  components: {},
  mounted() {
    this.fetchCategories();
  },
  methods: {
    ...mapActions({ fetchCategories: "fetchCategories" }),
  },
  computed: {
    ...mapGetters({ categories: "categories", cartCount: "cartCount" }),
  },
};
</script>
