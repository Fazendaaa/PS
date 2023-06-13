<template>
  <div v-for="item in buttons" v-bind:key="item.name">
    <v-btn block :to="{ name: 'challenge', params: { id: item.id } }">
      <span>{{ item.name.split("-")[0].replace("FIT60+", "") }}</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import json from "../../data/culture.json";

export default defineComponent({
  name: "ChallengesView",

  props: {
    kind: {
      type: String,
      required: true,
      default: "",
    },
  },

  setup(props) {
    const { kind } = toRefs(props);

    return {
      buttons: json.filter((item) => kind.value == item.kind),
    };
  },
});
</script>

<style>
.v-main {
  background-color: #7421b1;
}
</style>
