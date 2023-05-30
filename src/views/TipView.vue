<template>
  <v-card
    v-for="item in entries"
    v-bind:key="item.title"
    class="mx-auto"
    max-width="344"
  >
    <v-img :src="item.img" height="200px" cover></v-img>

    <v-card-title class="upper-bold"> {{ item.title }} </v-card-title>
    <v-card-subtitle class="upper-bold"> {{ item.subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="show[item.title] = !show[item.title]">
        <v-icon
          :icon="show[item.title] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        />
        <span class="upper-bold" v-html="$vuetify.locale.t('tip.about')" />
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show[item.title]">
        <v-divider />
        <v-card-text> {{ item.content }} </v-card-text>
        <v-divider />
        <v-btn
          block
          color="green"
          class="my-4"
          :to="{ name: 'quiz', params: { id: item.id } }"
        >
          <span class="upper-bold" v-html="$vuetify.locale.t('tip.answer')" />
        </v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import json from "../../data/mock.json";

export default defineComponent({
  name: "TipView",

  setup() {
    const data = json.quizzes;
    const entries = data.map((item) => ({
      title: item.title,
      subtitle: item.text,
      content: item.text,
      img: item.img,
      id: item.id,
    }));
    const show = ref<Record<string, boolean>>({});

    return {
      show,
      entries,
    };
  },
});
</script>

<style>
.v-main {
  background-color: #881800;
}
</style>
