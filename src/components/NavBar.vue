<template>
  <!-- <v-app-bar color="white">
    <v-btn v-for="item in items" :key="item.title" :to="item.path">
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-app-bar> -->

  <v-bottom-navigation class="hidden-lg-and-up" grow value="1" color="primary">
    <v-btn v-for="item in items" :key="item.title" :to="item.path">
      <span>{{ item.title }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  nome: "NavBarComponent",

  setup() {
    return {
      items: [
        {
          title: "foo",
          path: "/foo",
          icon: "account-alert",
        },
        {
          title: "bar",
          path: "/bar",
          icon: "account-alert",
        },
      ],
    };
  },
});
</script>
