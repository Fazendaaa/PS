<template>
  <h1 class="header">{{ currentQuestion.question }}</h1>

  <v-radio-group v-model="selectedOption">
    <v-radio
      v-for="(option, index) in currentQuestion.options"
      :key="index"
      :value="index"
      :label="option"
    />
  </v-radio-group>
  <v-btn block color="green" @click="checkAnswer">Enviar Resposta</v-btn>
  <v-btn block color="red">Cancelar</v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "QuizQuestion",

  props: {
    question: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const selectedOption = ref(0);
    const index = ref(0);
    const currentQuestion = ref(props.question[index.value]);
    const checkAnswer = () => {
      const correctOptionIndex = currentQuestion.value.correct_answer - 1;

      if (selectedOption.value === correctOptionIndex) {
        index.value = index.value + 1;
        currentQuestion.value = props.question[index.value];
      }
    };

    return {
      currentQuestion,
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
