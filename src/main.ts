import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify, { i18n } from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import OpenLayersMap from "vue3-openlayers";
import VueSocialSharing from "vue-social-sharing";
import "vue3-openlayers/dist/vue3-openlayers.css";

loadFonts();

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(i18n)
  .use(vuetify)
  .use(OpenLayersMap)
  .use(VueSocialSharing)
  .mount("#app");
