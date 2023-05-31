<template>
  <h1 class="header" v-html="$vuetify.locale.t('prescription.prescription')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="upper-bold"
            v-html="$vuetify.locale.t(`prescription.${button}`)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text class="upper-bold">
          <ChallengesView />
          <OpenStreetMap />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OpenStreetMap from "@/components/OpenStreetMap.vue";
import ChallengesView from "./ChallengesView.vue";

export default defineComponent({
  name: "PrescriptionView",

  components: {
    OpenStreetMap,
    ChallengesView,
  },

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

<style>
.v-main {
  background-color: #7421b1;
}
</style>
