<template>
  <v-no-ssr>
    <v-app :theme="this.$store.state.theme">
      <v-layout v-if="this.$store.getters.isLogged" style="z-index: 0">
        <SystemTray />
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
          <router-view v-slot="{ Component }">
            <InstallBanner />
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </v-main>
      </v-layout>
      <router-view v-else>
        <SignIn />
      </router-view>
    </v-app>
  </v-no-ssr>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import SignIn from "@/components/SignIn.vue";
import SystemTray from "@/components/SystemTray.vue";
import InstallBanner from "@/components/InstallBanner.vue";

export default defineComponent({
  name: "App",

  components: {
    NavBar,
    SignIn,
    SystemTray,
    InstallBanner,
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

<style>
@import "@/assets/fonts.css";
</style>
