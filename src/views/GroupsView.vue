<template>
  <h1 v-html="$vuetify.locale.t('groups.groups')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-btn>
      <span v-html="$vuetify.locale.t(`groups.${button}`)" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GroupsView",

  setup() {
    const admin = true;
    const adminButtons = ["suggestion", "register"];
    const userButtons = ["suggestion", "mine"];
    const buttons = admin ? adminButtons : userButtons;

    return {
      buttons,
    };
  },
});
</script>
