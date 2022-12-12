<template>
  <h1 v-html="$vuetify.locale.t('prescription.prescription')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="my-text"
            v-html="$vuetify.locale.t(`prescription.${button}`)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text class="my-text">
          <ChallengesView />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ChallengesView from "./ChallengesView.vue";

export default defineComponent({
  name: "PrescriptionView",

  components: {
    ChallengesView,
  },

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

<style scoped>
.my-text {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
