// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { createI18n, useI18n } from "vue-i18n";
import pt from "@/locales/pt";
import en from "@/locales/en";

const messages = {
  en,
  pt,
};

export const i18n = new createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  messages,
});

export default createVuetify({
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});
