<template>
  <v-img cover src="@/assets/login.svg"></v-img>
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
