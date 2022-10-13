<template>
  <v-img src="@/assets/avatar.svg"></v-img>

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span>{{ button }}</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileComponent",

  setup() {
    return {
      buttons: [
        "Ligas",
        "Dicas de Saude",
        "Entrar em Acao",
        "Resultados",
        "Prescricao",
        "Comunicacao",
      ],
    };
  },
});
</script>
