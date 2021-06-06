<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    generateToken() {
      return Math.random().toString(36).slice(-8);
    },
  },
};
</script>
