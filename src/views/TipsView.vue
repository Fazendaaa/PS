<template>
  <h1 v-html="$vuetify.locale.t('tips.tips')" />

  <div v-if="admin">
    <div v-for="(button, index) in adminButtons" v-bind:key="index">
      <v-btn>
        <span v-html="$vuetify.locale.t(`tips.${button}`)" />
      </v-btn>
    </div>
  </div>

  <div v-else>
    <div v-for="(button, index) in userPosts" v-bind:key="index">
      <v-btn>
        <span v-html="$vuetify.locale.t(`tips.${button}`)" />
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TipsView",

  setup() {
    return {
      admin: true,
      adminButtons: ["view", "new"],
      userPosts: [""],
    };
  },
});
</script>
