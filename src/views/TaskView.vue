<template>
  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span>{{ button }}</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      buttons: [
        "Atividade A",
        "Atividade B",
        "Atividade C",
        "Atividade D",
        "Atividade E",
      ],
    };
  },
});
</script>
