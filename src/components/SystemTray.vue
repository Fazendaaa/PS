<template>
  <v-system-bar color="white">
    <!--<v-btn
      :color="this.$store.getters.isAdmin ? 'green' : 'red'"
      @click="this.$store.commit('toggleAdmin')"
    >
      <span>ADMIN</span>
    </v-btn>
    <v-btn color="blue" @click="toggleLang()">
      <span>LANG</span>
    </v-btn>-->
  </v-system-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLocale } from "vuetify/lib/framework.mjs";

export default defineComponent({
  name: "SystemTray",

  setup() {
    const { current } = useLocale();
    const toggleLang = () => {
      const lang =
        undefined !== localStorage.getItem("translation")
          ? (localStorage.getItem("translation") as string)
          : "pt";
      const translation = "en" === lang ? "pt" : "en";
      current.value = translation;

      localStorage.setItem("translation", translation);
    };
    return {
      toggleLang,
    };
  },
});
</script>
