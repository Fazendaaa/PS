<template>
  <h1 v-html="$vuetify.locale.t('tips.tips')" />

  <div v-if="admin">
    <div v-for="(button, index) in adminButtons" v-bind:key="index">
      <v-btn block class="my-4">
        <span v-html="$vuetify.locale.t(`tips.${button}`)" />
      </v-btn>
    </div>
  </div>

  <div v-else>
    <v-card>
      <v-toolbar color="secondary">
        <v-tabs v-model="tab" grow>
          <v-tab value="unread" v-html="$vuetify.locale.t('tips.unread')" />
          <v-tab value="read" v-html="$vuetify.locale.t('tips.read')" />
        </v-tabs>
      </v-toolbar>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="read">
            <TipView />
          </v-window-item>
          <v-window-item value="unread">
            <TipView />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import TipView from "@/views/TipView.vue";

export default defineComponent({
  name: "TipsView",

  components: {
    TipView,
  },

  setup() {
    const store = useStore();

    store.commit("setTheme", "tips");

    return {
      admin: store.getters.isAdmin,
      adminButtons: ["view", "new"],
      userPosts: [""],
    };
  },

  data: () => ({
    tab: null,
  }),
});
</script>
