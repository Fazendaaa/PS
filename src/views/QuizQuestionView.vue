<template>
  <div>
    <h3>{{ question.question }}</h3>
    <v-radio-group v-model="selectedOption">
      <v-radio
        v-for="(option, index) in question.options"
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
    onCorrectAnswer: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const selectedOption = ref(0);

    const checkAnswer = () => {
      const correctOptionIndex = props.question.correct_answer - 1;
      if (selectedOption.value === correctOptionIndex) {
        props.onCorrectAnswer();
      }
    };
    console.log(props);
    return {
      selectedOption,
      checkAnswer,
    };
  },
});
</script>
