<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" vertical light>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="primary" v-bind="attrs" @click="close()"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      snackbar: false,
    };
  },

  methods: {
    close() {
      this.$emit("input", false);
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.snackbar = val;
      },
    },
  },
};
</script>

<style>
</style>