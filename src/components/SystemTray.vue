<template>
  <v-system-bar color="white">
    <v-btn
      :color="this.$store.getters.isAdmin ? 'green' : 'red'"
      @click="this.$store.commit('toggleAdmin')"
    >
      <span>ADMIN</span>
      <v-icon>mdi-admin</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SystemTray",
});
</script>
