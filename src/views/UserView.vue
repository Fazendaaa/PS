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

  <div v-for="(button, index) in prescriptions" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in scheduled" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <h1>Desafio</h1>

  <p>
    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only five
    centuries
  </p>

  <h1>Observacoes</h1>

  <p>
    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only five
    centuries
  </p>

  <v-btn>
    <span>Concluido</span>
  </v-btn>

  <div>
    <v-btn>
      <span>Ligas</span>
    </v-btn>
    <v-btn>
      <span>Profissionais</span>
    </v-btn>
    <v-btn>
      <span>Sobre</span>
    </v-btn>
  </div>

  <h1>Comunicacao</h1>

  <div v-for="(button, index) in leagues" v-bind:key="index">
    <v-btn>
      <v-icon>mdi-whatsapp</v-icon>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in professionals" v-bind:key="index">
    <v-btn>
      <v-icon>mdi-whatsapp</v-icon>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <v-switch v-model="toggle" label="sms" color="red" value="sms" hide-details />

  <div v-for="(button, index) in sms" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>

  <div v-for="(button, index) in scheduledTasks" v-bind:key="index">
    <v-btn>
      <span> {{ button }} </span>
    </v-btn>
  </div>
  <v-btn>
    <span> Salvar </span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "UserView",

  setup() {
    const toggle = ref(["sms"]);

    return {
      toggle,
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
      prescriptions: [
        "Atividade Fisica",
        "Nutricao",
        "Psicologia",
        "Desafio",
        "Mapa",
      ],
      scheduled: ["Desafio A", "Desafio B", "Desafio C"],
      leagues: ["Liga A", "Liga B", "Liga C", "Liga D"],
      professionals: ["Treinadores", "Nutricionistas", "Psicologos"],
      sms: ["Programadas", "Programar"],
      scheduledTasks: ["Aluno", "Horario", "Mensagem A"],
    };
  },
});
</script>
