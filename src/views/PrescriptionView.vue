<template>
  <h1 class="header" v-html="$vuetify.locale.t('prescription.prescription')" />

  <div v-if="this.$store.getters.isAdmin">
    <v-expansion-panels
      v-for="(button, index) in buttons"
      v-bind:key="index"
      variant="inset"
      class="my-4"
    >
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="upper-bold"
            v-html="$vuetify.locale.t(`prescription.${button.name}`)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text class="upper-bold">
          <ChallengesView />
          <OpenStreetMap :address="button.address" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <div v-else>
    <v-expansion-panels
      v-for="(button, index) in buttons"
      v-bind:key="index"
      variant="inset"
      class="my-4"
    >
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="upper-bold"
            v-html="$vuetify.locale.t(`prescription.${button.name}`)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text class="upper-bold">
          <ChallengesView />
          <OpenStreetMap :address="button.address" />
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
        {
          name: "physicalActivity",
          address:
            "Rua Rubens Arruda, 8-50 , Altos da cidade, 17014-300, Bauru",
        },
        {
          name: "nutrition",
          address: "Rua Marechal Deodoro, 153, SP",
        },
        {
          name: "psychology",
          address: "Avenida Guarda Mor Lobo Viana, 812, SP",
        },
        {
          name: "challenge",
          address:
            "Rua Coronel Lúcio, 324, centro, 13880-000, vargem grande do sul, SP",
        },
        {
          name: "map",
          address: "Avenida Marinheiro, 1929, Cardoso, SP",
        },
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
