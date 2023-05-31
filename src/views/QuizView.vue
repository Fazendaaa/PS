<template>
  <h1 class="header">{{ topic.title }}</h1>
  <p class="header">{{ topic.text }}</p>

  <h2 class="header">{{ currentQuestion.question }}</h2>

  <v-radio-group v-model="selectedOption">
    <v-radio
      v-for="(option, index) in currentQuestion.options"
      :key="index"
      :value="index"
      :label="option"
      class="header"
    />
  </v-radio-group>

  <v-btn block color="green" @click="checkAnswer">Enviar Resposta</v-btn>
  <v-btn block color="red" :to="{ name: 'tips' }">Cancelar</v-btn>

  <v-dialog v-model="showWrong" width="auto">
    <v-card>
      <v-card-title>Não é esta</v-card-title>
      <v-card-text>Quer tentar de novo?</v-card-text>
      <v-card-actions>
        <v-btn block color="green" class="my-4" @click="showWrong = false">
          <span class="upper-bold">Sim</span>
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn
          block
          color="red"
          class="my-4"
          @click="showWrong = false"
          :to="{ name: 'tips' }"
        >
          <span class="upper-bold">Não</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="showRight" width="auto">
    <v-card>
      <v-card-title>Questionário completo</v-card-title>
      <v-card-text> Parabéns, você completou o questionário! </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="green"
          class="my-4"
          @click="showRight = false"
          :to="{ name: 'tips' }"
        >
          <span class="upper-bold">Responder mais</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";
import json from "../../data/mock.json";

interface Question {
  question: string;
  options: string[];
  correct_answer: number;
}

export default defineComponent({
  name: "QuizView",

  setup() {
    const route = useRoute();
    const paramID = computed(() => {
      if (undefined !== route.params.id) {
        const id =
          "string" == typeof route.params.id
            ? route.params.id
            : route.params.id[0];
        return id;
      } else {
        return "";
      }
    });
    const topic = json.quizzes[parseInt(paramID.value) - 1];
    const currentQuestionIndex = ref(0);
    const showRight = ref(false);
    const showWrong = ref(false);
    const selectedOption = ref(0);
    const questions = topic["questions"];
    const currentQuestion = ref<Question>(
      questions[currentQuestionIndex.value]
    );
    const checkAnswer = () => {
      const correctOptionIndex = currentQuestion.value.correct_answer - 1;

      if (selectedOption.value === correctOptionIndex) {
        if (currentQuestionIndex.value + 1 < questions.length) {
          currentQuestionIndex.value = currentQuestionIndex.value + 1;
          currentQuestion.value = questions[currentQuestionIndex.value];
        } else {
          showRight.value = true;
        }
      } else {
        showWrong.value = true;
      }
    };

    return {
      topic,
      showRight,
      showWrong,
      selectedOption,
      currentQuestion,
      checkAnswer,
    };
  },
});
</script>

<style>
.v-main {
  background-color: #881800;
}
</style>
