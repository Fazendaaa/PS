<template>
  <v-no-ssr>
    <v-app :theme="this.$store.state.theme">
      <v-layout style="z-index: 0">
        <NavBar />
        <v-navigation-drawer
          class="hidden-md-and-down"
          :width="width"
        ></v-navigation-drawer>
        <v-navigation-drawer
          class="hidden-md-and-down"
          :width="width"
          location="right"
        ></v-navigation-drawer>
        <v-main>
          <router-view />
        </v-main>
      </v-layout>
    </v-app>
  </v-no-ssr>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",

  components: {
    NavBar,
  },

  setup() {
    return {
      width: ref(100),
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth < 1500) {
        this.width = 100;
        return;
      }
      if (1500 < window.innerWidth && window.innerWidth < 1765) {
        this.width = 140;
        return;
      }
      if (1765 < window.innerWidth && window.innerWidth < 2000) {
        this.width = 230;
        return;
      }
      if (2000 < window.innerWidth && window.innerWidth < 2200) {
        this.width = 440;
        return;
      } else {
        this.width = 550;
        return;
      }
    },
  },
  beforeUnmount() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
});
</script>
