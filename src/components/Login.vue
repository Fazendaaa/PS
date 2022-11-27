<template>
  <v-img src="@/assets/login.svg"></v-img>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent",

  setup() {
    return {
      logged: false,
    };
  },
});
</script>
