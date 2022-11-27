<template>
  <v-container class="hero" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent",
});
</script>

<style scoped>
.hero {
  background: url("@/assets/login.svg");
  background-size: cover;
  height: 95vh;
}
</style>
