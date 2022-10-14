<template>
  <h1>Entrar em Acao</h1>

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in houseTasks" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserView",

  setup() {
    return {
      buttons: [
        "Atividade de Saude",
        "Atividade Domestica",
        "Atividade Voluntaria",
        "Atividades Fisicas de Transporte e Lazer",
        "Atividades Ocupacionais",
      ],
      houseTasks: [
        "Varrer",
        "Limpar casa",
        "Lavar louca, roupas",
        "Cozinhar",
        "Fazer compras",
        "Arrumar cama",
        "Conserto em geral",
      ],
    };
  },
});
</script>
