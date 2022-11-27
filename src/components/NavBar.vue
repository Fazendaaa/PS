<template>
  <div v-if="logged">
    <v-app-bar density="compact" class="hidden-md-and-down">
      <v-btn v-for="item in items" :key="item.title" :to="item.path">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-bottom-navigation horizontal class="hidden-lg-and-up" color="primary">
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
import SignIn from "./SignIn.vue";

export default defineComponent({
  nome: "NavBarComponent",

  components: {
    SignIn,
  },

  setup() {
    const baseItems = [
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
        title: "prescription",
        path: "/prescription",
        icon: "mdi-medical-bag",
      },
      {
        title: "service",
        path: "/service",
        icon: "mdi-face-agent",
      },
    ];
    const userItems = [
      ...[
        {
          title: "activities",
          path: "/activities",
          icon: "mdi-format-list-checkbox",
        },
      ],
      ...baseItems,
    ];
    const adminItems = [
      ...[
        {
          title: "results",
          path: "/results",
          icon: "mdi-file",
        },
      ],
      ...baseItems,
    ];
    const admin = false;
    const items = admin ? adminItems : userItems;

    return {
      items,
      logged: true,
    };
  },
});
</script>

<style lang="scss" scoped>
// https://stackoverflow.com/a/61583022/7092954
.v-bottom-navigation {
  overflow-x: scroll;
}
</style>
