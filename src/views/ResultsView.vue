<template>
  <h1 v-html="$vuetify.locale.t('results.results')" />

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-view-list</v-icon>
        <span class="my-text" v-html="$vuetify.locale.t('results.results')" />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field
          :label="$vuetify.locale.t('groups.name')"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          :label="$vuetify.locale.t('groups.responsible')"
          hide-details="auto"
        ></v-text-field>
        <v-btn block color="green" class="my-4">
          <span v-html="$vuetify.locale.t('groups.accept')" />
        </v-btn>
        <v-btn block color="red" class="my-4">
          <span v-html="$vuetify.locale.t('groups.cancel')" />
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-chevron-triple-up</v-icon>
        <span class="my-text" v-html="$vuetify.locale.t('results.ranking')" />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field
          :label="$vuetify.locale.t('groups.name')"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          :label="$vuetify.locale.t('groups.responsible')"
          hide-details="auto"
        ></v-text-field>
        <v-btn block color="green" class="my-4">
          <span v-html="$vuetify.locale.t('groups.accept')" />
        </v-btn>
        <v-btn block color="red" class="my-4">
          <span v-html="$vuetify.locale.t('groups.cancel')" />
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-history</v-icon>
        <span class="my-text" v-html="$vuetify.locale.t('results.history')" />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field
          :label="$vuetify.locale.t('groups.name')"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          :label="$vuetify.locale.t('groups.responsible')"
          hide-details="auto"
        ></v-text-field>
        <v-btn block color="green" class="my-4">
          <span v-html="$vuetify.locale.t('groups.accept')" />
        </v-btn>
        <v-btn block color="red" class="my-4">
          <span v-html="$vuetify.locale.t('groups.cancel')" />
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-alert-box</v-icon>
        <span
          class="my-text"
          v-html="$vuetify.locale.t('results.evaluations')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field
          :label="$vuetify.locale.t('groups.name')"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          :label="$vuetify.locale.t('groups.responsible')"
          hide-details="auto"
        ></v-text-field>
        <v-btn block color="green" class="my-4">
          <span v-html="$vuetify.locale.t('groups.accept')" />
        </v-btn>
        <v-btn block color="red" class="my-4">
          <span v-html="$vuetify.locale.t('groups.cancel')" />
        </v-btn>
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

    store.commit("setTheme", "results");
  },
});
</script>
