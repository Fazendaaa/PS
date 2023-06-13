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
          <ChallengesView :kind="button.name" />
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
          <ChallengesView :kind="button.name" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChallengesView from "./ChallengesView.vue";

export default defineComponent({
  name: "PrescriptionView",

  components: {
    ChallengesView,
  },

  setup() {
    return {
      buttons: [
        {
          name: "physicalActivity",
        },
        {
          name: "nutrition",
        },
        {
          name: "psychology",
        },
        {
          name: "challenge",
        },
        {
          name: "map",
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
