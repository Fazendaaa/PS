<template>
  <v-card
    v-for="item in entries"
    v-bind:key="item.title"
    class="mx-auto"
    max-width="344"
  >
    <v-img :src="item.src" height="200px" cover></v-img>

    <v-card-title class="my-text"> {{ item.title }} </v-card-title>
    <v-card-subtitle class="my-text"> {{ item.subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="show[item.title] = !show[item.title]">
        <v-icon
          :icon="show[item.title] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        />
        <span class="my-text" v-html="$vuetify.locale.t('tip.about')" />
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show[item.title]">
        <v-divider />
        <v-card-text> {{ item.content }} </v-card-text>
        <v-divider />
        <v-btn block color="green" class="my-4" :to="{ name: 'quiz' }">
          <span class="my-text" v-html="$vuetify.locale.t('tip.answer')" />
        </v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import json from "../../data/mock.json";

const parseCategory = (category: any): any =>
  category.questions.map((item: any) => {
    return {
      title: item.title,
      subtitle: item.title,
      content: item.text,
      src: "https://nationaldebtadvisors.co.za/wp-content/uploads/2016/05/Groceries.jpg",
    };
  });

export default defineComponent({
  name: "TipView",

  setup() {
    const categories = json.categories;
    const entries = categories.map((item) => parseCategory(item)).flat();

    return {
      show: ref({}),
      entries: entries,
    };
  },
});
</script>

<style scoped>
.my-text {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
