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
  <v-btn block color="red">Cancelar</v-btn>

  <v-dialog v-model="showModel">
    <v-card>
      <v-card-title>Questionário completo</v-card-title>
      <v-card-text> Parabéns, você completou o questionário! </v-card-text>
      <v-card-actions>
        <v-btn block color="green" class="my-4" :to="{ name: 'tips' }">
          <span class="upper-bold" v-html="$vuetify.locale.t('tip.answer')" />
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";
import json from "../../data/mock.json";

const setTopic = (id: any): any => {
  return json.quizzes.find((id: any) => id === id);
};

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
    const topic = setTopic(paramID);
    const currentQuestionIndex = ref(0);
    const quizCompleted = ref(false);
    let currentQuestion = topic["questions"][currentQuestionIndex.value];
    const nextQuestion = () => {
      if (currentQuestionIndex.value < topic.length) {
        currentQuestionIndex.value++;
      } else {
        quizCompleted.value = true;
      }
    };
    const showModel = ref(false);
    const showTips = () => {
      showModel.value = true;
    };
    const selectedOption = ref(0);
    const index = ref(0);
    const checkAnswer = () => {
      const correctOptionIndex = currentQuestion.correct_answer - 1;

      if (selectedOption.value === correctOptionIndex) {
        if (index.value + 1 < topic["questions"].length) {
          index.value = index.value + 1;
          currentQuestion = topic.question[index.value];
        } else {
          showModel.value = true;
        }
      }
    };

    return {
      topic: topic,
      currentQuestionIndex,
      currentQuestion,
      nextQuestion,
      quizCompleted,
      showModel,
      showTips,
      selectedOption,
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
