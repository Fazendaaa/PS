<template>
  <Login />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/components/Login.vue";

export default defineComponent({
  name: "LoginView",

  components: {
    Login,
  },
});
</script>

<style>
.v-main {
  background-color: #881800;
}
</style>
