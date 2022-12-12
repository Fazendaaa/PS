<template>
  <div v-for="item in buttons" v-bind:key="item.title">
    <v-btn block :to="{ name: 'challenge' }">
      <span>{{ item.title }}</span>
    </v-btn>
    <span align="center">{{ item.subtitle }}</span>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChallengesView",

  setup() {
    return {
      buttons: [
        {
          title: "Desafio A",
          subtitle: "Restam 3 dias - 20/06/2022",
        },
        {
          title: "Desafio B",
          subtitle: "Restam 3 dias - 20/06/2022",
        },
        {
          title: "Desafio C",
          subtitle: "Restam 3 dias - 20/06/2022",
        },
        {
          title: "Desafio D",
          subtitle: "Restam 3 dias - 20/06/2022",
        },
      ],
    };
  },
});
</script>
