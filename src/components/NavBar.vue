<template>
  <div v-if="logged">
    <v-app-bar density="compact" class="hidden-md-and-down">
      <v-btn v-for="item in items" :key="item.title" :to="item.path">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
    <Profile />
    <v-bottom-navigation
      class="hidden-lg-and-up"
      grow
      value="1"
      color="primary"
    >
      <v-btn v-for="item in items" :key="item.title" :to="item.path">
        <span v-html="$vuetify.locale.t(`navbar.${item.title}`)" />
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
  <div v-else>
    <SignIn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Profile from "./Profile.vue";
import SignIn from "./SignIn.vue";

export default defineComponent({
  nome: "NavBarComponent",

  components: {
    Profile,
    SignIn,
  },

  setup() {
    return {
      logged: false,
      items: [
        {
          title: "groups",
          path: "/groups",
          icon: "mdi-account-group",
        },
        {
          title: "tips",
          path: "/tips",
          icon: "mdi-lightbulb",
        },
        {
          title: "activities",
          path: "/activities",
          icon: "mdi-format-list-checkbox",
        },
        {
          title: "results",
          path: "/results",
          icon: "mdi-file",
        },
        {
          title: "prescription",
          path: "/prescription",
          icon: "mdi-medical-bag",
        },
        {
          title: "service",
          path: "/service",
          icon: "mdi-face-agent",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.v-bottom-navigation {
  justify-content: start;
  overflow-x: scroll;
}
</style>
