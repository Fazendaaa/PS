<template>
  <h1 class="header" v-html="$vuetify.locale.t('results.results')" />

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-view-list</v-icon>
        <span
          class="upper-bold"
          v-html="$vuetify.locale.t('results.results')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ user["results"] }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-chevron-triple-up</v-icon>
        <span
          class="upper-bold"
          v-html="$vuetify.locale.t('results.ranking')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ user["ranking"] }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-history</v-icon>
        <span
          class="upper-bold"
          v-html="$vuetify.locale.t('results.history')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ user["history"] }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-alert-box</v-icon>
        <span
          class="upper-bold"
          v-html="$vuetify.locale.t('results.evaluations')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ user["evaluations"] }}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ResultsView",

  setup() {
    const store = useStore();
    const user = store.getters.getUser;

    return { user };
  },
});
</script>

<style>
.v-main {
  background-color: #ff7e35;
}
</style>
