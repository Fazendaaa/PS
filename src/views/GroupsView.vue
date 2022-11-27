<template>
  <h1 v-html="$vuetify.locale.t('groups.groups')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn block class="my-4">
      <span v-html="$vuetify.locale.t(`groups.${button}`)" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "GroupsView",

  setup() {
    const adminButtons = ["suggestion", "register"];
    const userButtons = ["suggestion", "mine"];
    const store = useStore();
    const buttons = store.getters.isAdmin ? adminButtons : userButtons;

    store.commit("setTheme", "groups");

    return {
      buttons,
    };
  },
});
</script>
