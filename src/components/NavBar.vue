<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  nome: "NavBarComponent",

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
          title: "user",
          path: "/user",
          icon: "mdi-account",
        },
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
          title: "users",
          path: "/users",
          icon: "mdi-account",
        },
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
      logged: false,
    };
  },
});
</script>

<style lang="scss" scoped>
// https://stackoverflow.com/a/61583022/7092954
.overflow {
  overflow-x: scroll;
}

// https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::-webkit-scrollbar-button:single-button {
  background-color: #bbbbbb;
  display: block;
  border-style: solid;
  height: 13px;
  width: 16px;
}
/* Up */
::-webkit-scrollbar-button:single-button:horizontal:decrement {
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #555555 transparent;
}

::-webkit-scrollbar-button:single-button:horizontal:decrement:hover {
  border-color: transparent transparent #777777 transparent;
}

/* Down */
::-webkit-scrollbar-button:single-button:horizontal:increment {
  border-width: 8px 8px 0 8px;
  border-color: #555555 transparent transparent transparent;
}

::-webkit-scrollbar-button:horizontal:single-button:increment:hover {
  border-color: #777777 transparent transparent transparent;
}
</style>
