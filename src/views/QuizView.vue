<template>
  <h1>Selecione o modelo da questao</h1>

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <h1>ALTERNATIVA</h1>

  <v-btn>
    <span> Inserir Anexo </span>
  </v-btn>

  <h1>Enunciado</h1>

  <v-row>
    <v-col cols="12" sm="4" md="4">
      <v-checkbox
        v-model="ex4"
        label="red"
        color="red"
        value="red"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="ex4"
        label="red-darken-3"
        color="red-darken-3"
        value="red-darken-3"
        hide-details
      ></v-checkbox>
    </v-col>
  </v-row>

  <v-btn>
    <span> Salvar </span>
  </v-btn>

  <h1>ABERTA</h1>

  <v-btn>
    <span> Inserir Anexo </span>
  </v-btn>

  <h1>Enunciado</h1>

  <v-row>
    <v-col cols="12" sm="4" md="4">
      <v-checkbox
        v-model="ex4"
        label="red"
        color="red"
        value="red"
        hide-details
      ></v-checkbox>
      <v-checkbox
        v-model="ex4"
        label="red-darken-3"
        color="red-darken-3"
        value="red-darken-3"
        hide-details
      ></v-checkbox>
    </v-col>
  </v-row>

  <v-btn>
    <span> Salvar </span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuizView",

  setup() {
    return {
      buttons: [
        "Alternativas",
        "Questao Aberta",
        "Conecta Pontos",
        "Resposta Por Audios",
      ],
    };
  },
});
</script>
