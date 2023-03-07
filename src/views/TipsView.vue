<template>
  <h1 v-html="$vuetify.locale.t('tips.tips')" />

  <div v-if="this.$store.getters.isAdmin">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-eye</v-icon>
          <span class="my-text" v-html="$vuetify.locale.t('tips.view')" />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-text-field
            :label="$vuetify.locale.t('groups.name')"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            :label="$vuetify.locale.t('groups.responsible')"
            hide-details="auto"
          ></v-text-field>
          <v-btn block color="green" class="my-4">
            <span v-html="$vuetify.locale.t('groups.accept')" />
          </v-btn>
          <v-btn block color="red" class="my-4">
            <span v-html="$vuetify.locale.t('groups.cancel')" />
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-pencil</v-icon>
          <span class="my-text" v-html="$vuetify.locale.t('tips.new')" />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-text-field
            :label="$vuetify.locale.t('groups.name')"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            :label="$vuetify.locale.t('groups.responsible')"
            hide-details="auto"
          ></v-text-field>
          <v-btn block color="green" class="my-4">
            <span v-html="$vuetify.locale.t('groups.accept')" />
          </v-btn>
          <v-btn block color="red" class="my-4">
            <span v-html="$vuetify.locale.t('groups.cancel')" />
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <div v-else>
    <v-card>
      <v-toolbar color="secondary">
        <v-tabs v-model="tab" grow>
          <v-tab
            class="my-text"
            value="unread"
            v-html="$vuetify.locale.t('tips.unread')"
          />
          <v-tab
            class="my-text bg-grey"
            value="read"
            v-html="$vuetify.locale.t('tips.read')"
          />
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
      userPosts: [""],
    };
  },

  data: () => ({
    tab: null,
  }),
});
</script>

<style scoped>
.my-text {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
