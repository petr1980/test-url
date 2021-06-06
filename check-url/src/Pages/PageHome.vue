<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>Check url</h1>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <div class="text-center">
        <v-btn dark color="indigo" @click="setDevice()"> Open Snackbar </v-btn>
      </div>

      <pre> {{ res }}</pre>

      <app-alert v-model="alertOpen" :text="alertText" />
    </v-main>
  </v-app>
</template>

<script>
import { deviceInfo } from "../api/device";
import AppAlert from "../components/AppAlert.vue";

export default {
  name: "PageHome",

  components: {
    AppAlert,
  },

  created() {
    this.generateToken();
    this.getDeviceList();
    console.log(this.getToken());
  },

  data() {
    return {
      alertText: "You are not in the same device",
      alertOpen: false,
      res: "",
      token: "",
    };
  },

  computed: {},

  methods: {
    getToken() {
      return this.$route.params;
    },

    getUserDevice() {
      return {
        token: this.token,
        userAgent: navigator.userAgent,
      };
    },

    async setDevice() {
      const device = this.getUserDevice();
      try {
        const data = await deviceInfo.save(device);

        this.res = data;
      } catch (error) {
        console.log(error);
      }
    },

    async getDeviceList() {
      try {
        const data = await deviceInfo.getDeviceList();

        this.res = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
