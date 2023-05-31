<template>
  <v-card
    v-for="item in entries"
    v-bind:key="item.title"
    class="mx-auto"
    max-width="344"
  >
    <v-img src="@/assets/images.jpeg" height="200px" cover></v-img>

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
          :to="{
            name: 'quiz',
            params: { id: item.id },
            query: { readonly: readonly.toString() },
          }"
        >
          <span
            v-if="false === readonly"
            class="upper-bold"
            v-html="$vuetify.locale.t('tip.answer')"
          />
          <span
            v-else
            class="upper-bold"
            v-html="$vuetify.locale.t('tip.read')"
          />
        </v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import json from "../../data/mock.json";

// https://stackoverflow.com/a/50477423/7092954
const textEllipsis = (
  str: string,
  maxLength: number,
  { side = "end", ellipsis = "..." } = {}
) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length));
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
  }

  return str;
};

interface Quiz {
  title: string;
  text: string;
  tips: string;
  references: string;
  img: string;
  id: number;
  questions: {
    question: string;
    options: string[];
    correct_answer: number;
  }[];
}

const filterData = (data: Quiz[], answered: boolean): Quiz[] => {
  const local: number[] =
    null !== localStorage.getItem("answered")
      ? // @ts-expect-error: any
        JSON.parse(localStorage.getItem("answered"))
      : [];

  if (answered) {
    return data.filter((item) => local.includes(item.id));
  } else {
    return data.filter((item) => !local.includes(item.id));
  }
};

export default defineComponent({
  name: "TipView",

  props: {
    readonly: {
      type: Boolean,
      required: true,
      default: true,
    },
  },

  setup(props) {
    const { readonly } = toRefs(props);
    // @ts-expect-error: any
    const data = filterData(json.quizzes, readonly.value);
    const entries = data.map((item) => ({
      title: item.title,
      subtitle: item.text,
      content: textEllipsis(item.text, 100),
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
