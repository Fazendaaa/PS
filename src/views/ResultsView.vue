<template>
  <h1 v-html="$vuetify.locale.t('results.results')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span v-html="$vuetify.locale.t(`results.${button}`)" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResultsView",

  setup() {
    return {
      buttons: ["results", "ranking", "history", "evaluations"],
    };
  },
});
</script>
