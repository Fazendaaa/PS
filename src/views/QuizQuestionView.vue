<template>
  <div>
    <h3>{{ currentQuestion.question }}</h3>

    <v-radio-group v-model="selectedOption">
      <v-radio
        v-for="(option, index) in currentQuestion.options"
        :key="index"
        :value="index"
        :label="option as string"
      />
    </v-radio-group>
    <v-btn color="primary" @click="checkAnswer">Enviar Resposta</v-btn>
  </div>
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
