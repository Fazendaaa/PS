<template>
  <v-img src="@/assets/avatar.svg"></v-img>

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span>{{ button }}</span>
    </v-btn>
  </div>

  <v-btn>
    <span> Questoes Iniciais </span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignUpComponent",

  setup() {
    return {
      buttons: ["Cabelo", "Cor da Pele", "Roupas", "etc"],
    };
  },
});
</script>
