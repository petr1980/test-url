<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>Check url</h1>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-spacer></v-spacer>
      <app-sheet />

      <app-alert v-model="alertOpen" :text="alertText" />
    </v-main>
  </v-app>
</template>

<script>
import { deviceInfo } from "../api/device";
import AppAlert from "../components/AppAlert.vue";
import AppSheet from "../components/AppSheet.vue";

export default {
  name: "PageHome",

  components: {
    AppAlert,
    AppSheet,
  },

  created() {
    this.getDeviceUrl();
  },

  data() {
    return {
      alertText: "You are not in the same device",
      alertOpen: false,
    };
  },

  computed: {
    tokenURL() {
      return this.$route.params?.token;
    },
    userAgent() {
      return navigator.userAgent;
    },
    getStorageToken() {
      return JSON.parse(localStorage.getItem("deviceTokenData"));
    },
  },

  methods: {
    async saveDeviceInfo() {
      const device = {
        token: this.tokenURL,
        userAgent: this.userAgent,
      };
      try {
        const data = await deviceInfo.save(device);

        this.tokenList = data;
      } catch (error) {
        console.log(error);
      }
    },

    async getDeviceList() {
      try {
        const data = await deviceInfo.getDeviceList();

        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async getDeviceUrl() {
      const storageDataToken = this.getStorageToken;

      if (storageDataToken?.token === this.tokenURL) {
        this.confirmed();
        return;
      }
      const deviceList = await this.getDeviceList();
      const validDevice = Object.values(deviceList || {}).find((item) => {
        return item.userAgent === this.userAgent;
      });
      const checkToken = Object.values(deviceList || {}).find((item) => {
        return item.token === this.tokenURL;
      });

      if (!checkToken) {
        return this.saveDeviceInfo().then(() => {
          this.openAlert("Hi new user!");
        });
      }

      if (validDevice && validDevice.userAgent === checkToken.userAgent) {
        return this.confirmed();
      }

      return this.openAlert("You are not in the same device!");
    },

    confirmed() {
      this.openAlert("Validation code confirmed!!!");
      if (this.$route.query?.validationCode) return;
      this.$router.replace({
        query: { validationCode: "randomValidationCode" },
      });
    },

    openAlert(text) {
      this.alertText = text;
      this.alertOpen = true;
    },
  },
};
</script>
