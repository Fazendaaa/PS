<template>
  <v-container class="background" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent",
});
</script>

<style scoped>
/* https://codepen.io/averri/pen/baqoLX */
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/login.svg") no-repeat center center;
  background-size: cover;
  background-color: red;
  transform: scale(1.1);
}
</style>
