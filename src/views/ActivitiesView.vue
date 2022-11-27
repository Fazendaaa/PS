<template>
  <h1 v-html="$vuetify.locale.t('activities.activities')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span v-html="$vuetify.locale.t(`activities.${button}`)" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivitiesView",

  setup() {
    return {
      buttons: [
        "healthcare",
        "homeTasks",
        "voluntaryActivity",
        "physicalActivity",
        "occupationalActivity",
      ],
    };
  },
});
</script>
