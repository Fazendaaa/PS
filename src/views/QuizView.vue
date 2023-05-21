<template>
  <div>
    <h1>{{ topic.title }}</h1>
    <p>{{ topic.text }}</p>

    <v-container>
      <quiz-question :question="topic.questions" />
    </v-container>

    <v-dialog v-model="showModel">
      <v-card>
        <v-card-title>Questionário completo</v-card-title>
        <v-card-text> Parabéns, você completou o questionário! </v-card-text>
        <v-card-actions>
          <v-btn block color="green" class="my-4" :to="{ name: 'tips' }">
            <span class="my-text" v-html="$vuetify.locale.t('tip.answer')" />
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import json from "../../data/mock.json";
import QuizQuestion from "@/views/QuizQuestionView.vue";

const setTopic = (id: any): any => {
  return json.quizzes.find((id: any) => id === id);
};

export default defineComponent({
  name: "QuizView",
  components: {
    QuizQuestion,
  },
  setup() {
    const store = useStore();
    store.commit("setTheme", "tips");
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
    let topic = setTopic(paramID);
    watch(paramID, () => {
      topic = setTopic(paramID.value);
    });
    const currentQuestionIndex = ref(0);
    const quizCompleted = ref(false);
    const currentQuestion = computed(() => topic[currentQuestionIndex.value]);
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

    return {
      topic: topic,
      currentQuestionIndex,
      currentQuestion,
      nextQuestion,
      quizCompleted,
      showModel,
      showTips,
    };
  },
});
</script>
