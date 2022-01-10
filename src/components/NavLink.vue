<template>
  <router-link
    :to="to"
    class="px-3 py-2 rounded-md text-sm font-medium text-primary navlink"
    :class="theme"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.navlink.router-link-active {
  color: white;
  background-color: #00bf8f;
}

.navlink:hover {
  background-color: rgba(0, 191, 143, 0.5);
  color: white;
}
</style>
