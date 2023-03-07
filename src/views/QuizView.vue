<template>
  <h1>{{ title }}</h1>

  <p>{{ subtitle }}</p>

  <v-row>
    <v-col
      cols="12"
      sm="4"
      md="4"
      v-for="option in options"
      v-bind:key="option"
    >
      <v-checkbox
        :label="option"
        color="red-darken-3"
        value="red-darken-3"
        hide-details
      ></v-checkbox>
    </v-col>
  </v-row>

  <v-btn color="green" block class="my-4">
    <span v-html="$vuetify.locale.t('quiz.submit')" />
  </v-btn>

  <v-btn color="red" block class="my-4" :to="{ name: 'tips' }">
    <span v-html="$vuetify.locale.t('quiz.cancel')" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "QuizView",

  setup() {
    const store = useStore();

    store.commit("setTheme", "tips");

    return {
      title: "Recomendações nutricionais",
      subtitle: "Uma alimentação adequada é:",
      options: [
        "Acessível, varaida e harmonica",
        "Cara e acessível",
        "Harmonica e valorizada",
      ],
    };
  },
});
</script>
