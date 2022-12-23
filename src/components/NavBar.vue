<template>
  <div v-if="logged">
    <v-app-bar color="white" class="overflow">
      <v-btn
        v-for="item in this.$store.getters.isAdmin ? adminItems : userItems"
        :key="item.title"
        :to="item.path"
      >
        <span v-html="$vuetify.locale.t(`navbar.${item.title}`)" />
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
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

    return {
      adminItems,
      userItems,
      logged: true,
    };
  },
});
</script>

<style lang="scss" scoped>
// https://stackoverflow.com/a/61583022/7092954
.overflow {
  overflow-x: scroll;
}
</style>
