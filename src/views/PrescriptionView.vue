<template>
  <h1 v-html="$vuetify.locale.t('prescription.prescription')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span v-html="$vuetify.locale.t(`prescription.${button}`)" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "PrescriptionView",

  setup() {
    const store = useStore();

    store.commit("setTheme", "prescription");

    return {
      buttons: [
        "physicalActivity",
        "nutrition",
        "psychology",
        "challenge",
        "map",
      ],
    };
  },
});
</script>
