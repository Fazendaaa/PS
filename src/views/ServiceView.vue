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

export default defineComponent({
  name: "ServiceView",

  setup() {
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
