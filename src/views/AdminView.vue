<template>
  <div>
    <v-btn :to="{ name: 'post' }">
      <span> Visualizar Feed </span>
    </v-btn>

    <v-btn :to="{ name: 'post' }">
      <span> Inserir Postagem </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in results" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in prescription" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <v-switch v-model="toggle" label="red" color="red" value="red" hide-details />

  <div v-for="(button, index) in challenges" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <v-expansion-panels variant="inset">
    <v-expansion-panel>
      <v-expansion-panel-title>Todos os Alunos</v-expansion-panel-title>
      <v-expansion-panel-text> LISTAR ALUNOS AQUI </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <div v-for="(button, index) in scheduledChallenges" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in scheduleChallenges" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in communication" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AdminView",

  setup() {
    const toggle = ref(["red "]);

    return {
      toggle,
      buttons: ["Resultados", "Ranking", "Historico", "Avaliacoes"],
      results: ["Individual", "Ligas"],
      prescription: [
        "Atividade Fisica",
        "Nutricao",
        "Psicologia",
        "Desafio",
        "Mapa",
      ],
      challenges: ["Programadas", "Programar", "Historico"],
      scheduledChallenges: ["Desafio A", "Desafio B", "Desafio C"],
      scheduleChallenges: [
        "Desafio A",
        "Desafio B",
        "Desafio C",
        "Desafio D",
        "Desafio E",
        "Adicionar Desafio",
      ],
      communication: ["Liguas", "Profissionais", "SMS Motivacional", "Sobre"],
    };
  },
});
</script>

<style lang="scss" scoped>
.center {
  margin: 0;
  position: relative;
  top: 30%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
