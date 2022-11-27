<template>
  <h1 v-html="$vuetify.locale.t('service.service')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span v-html="$vuetify.locale.t(`service.${button}`)" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ServiceView",

  setup() {
    const userButtons = ["professionals", "about"];
    const adminButtons = [...userButtons, ...["groups", "motivationalSMS"]];
    const store = useStore();
    const buttons = store.getters.isAdmin ? adminButtons : userButtons;

    store.commit("setTheme", "service");

    return {
      buttons,
    };
  },
});
</script>
