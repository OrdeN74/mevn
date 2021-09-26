<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: "header",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
