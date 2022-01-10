<template>
  <router-view />
</template>
<script>
export default {
  name: "App",
  metaInfo: {
    title: "My Example App",
    titleTemplate: "%s - Yay!",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>
