<template>
  <div v-for="item in buttons" v-bind:key="item.title">
    <v-btn block :to="{ name: 'challenge', params: { id: item.id } }">
      <span>{{ item.title }}</span>
    </v-btn>
    <span align="center">{{ item.subtitle }}</span>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json from "../../data/challenge.json";

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
