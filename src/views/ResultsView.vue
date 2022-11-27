<template>
  <h1 v-html="$vuetify.locale.t('results.results')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn block class="my-4">
      <span v-html="$vuetify.locale.t(`results.${button}`)" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ResultsView",

  setup() {
    const store = useStore();

    store.commit("setTheme", "results");

    return {
      buttons: ["results", "ranking", "history", "evaluations"],
    };
  },
});
</script>
