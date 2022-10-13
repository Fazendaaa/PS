<template>
  <v-no-ssr>
    <v-app>
      <NavBar />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-no-ssr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",

  components: {
    NavBar,
  },
});
</script>
