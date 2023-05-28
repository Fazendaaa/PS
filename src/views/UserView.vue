<template>
  <br />
  <div class="d-flex flex-column justify-space-between align-center">
    <v-img aspect-ratio="1" width="300" cover src="@/assets/avatar.svg" />
  </div>
  <br />

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel v-for="(button, index) in buttons" v-bind:key="index">
      <v-expansion-panel-title v-html="$vuetify.locale.t(`navbar.${button}`)" />
      <v-expansion-panel-text>
        <v-btn>
          <span v-html="$vuetify.locale.t(`navbar.${button}`)" />
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <div v-if="this.$store.getters.isAdmin">
    <span>Questoes Iniciais</span>

    <v-expansion-panels variant="inset" class="my-4">
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
  </div>

  <v-btn block class="my-4">
    <v-icon>mdi-check</v-icon>
    <span>Salvar</span>
  </v-btn>
  <v-btn block class="my-4">
    <v-icon>mdi-cancel</v-icon>
    <span>Cancelar</span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "UserView",

  setup() {
    const store = useStore();

    store.commit("setTheme", "user");

    fetch("https://api.docker.localhost/users/", { method: "POST" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Network response was not ok.");
        }
      })
      .then(console.log)
      .catch((error) => {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });

    return {
      buttons: ["hair", "skin", "clothes", "others"],
    };
  },
});
</script>
