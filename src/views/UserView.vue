<template>
  <br />
  <div class="d-flex flex-column justify-space-between align-center">
    <v-img aspect-ratio="1" width="300" cover src="@/assets/avatar.svg" />
  </div>
  <br />

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <span>Avatar</span>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-for="(button, index) in buttons" v-bind:key="index">
          <v-btn>
            <span v-html="$vuetify.locale.t(`navbar.${button}`)" />
          </v-btn>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <span>Questoes Iniciais</span>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-select
          v-model="activity"
          label="Atividade"
          :items="items"
          variant="solo"
        />
        <div v-if="activity">
          <Stopwatch />
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "UserView",

  setup() {
    const store = useStore();

    store.commit("setTheme", "user");

    return {
      buttons: ["hair", "skin", "clothes", "others"],
    };
  },
});
</script>
