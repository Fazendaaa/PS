<template>
  <div v-for="item in buttons" v-bind:key="item.name">
    <v-btn block :to="{ name: 'challenge', params: { id: item.id } }">
      <span>{{ item.name }}</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json from "../../data/culture.json";

export default defineComponent({
  name: "ChallengesView",

  setup() {
    return {
      buttons: json,
    };
  },
});
</script>

<style>
.v-main {
  background-color: #7421b1;
}
</style>
