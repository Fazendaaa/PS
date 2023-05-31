<template>
  <h1 class="header" v-html="$vuetify.locale.t('tips.tips')" />

  <div v-if="this.$store.getters.isAdmin">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-eye</v-icon>
          <span class="upper-bold" v-html="$vuetify.locale.t('tips.view')" />
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

      <v-expansion-panel variant="inset" class="my-4">
        <v-expansion-panel-title>
          <v-icon>mdi-pencil</v-icon>
          <span class="upper-bold" v-html="$vuetify.locale.t('tips.new')" />
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
      <v-toolbar class="bg-orange">
        <v-tabs v-model="tab" grow>
          <v-tab
            class="upper-bold bg-orange"
            value="unanswered"
            v-html="$vuetify.locale.t('tips.unanswered')"
          />
          <v-tab
            class="upper-bold bg-grey"
            value="answered"
            v-html="$vuetify.locale.t('tips.answered')"
          />
        </v-tabs>
      </v-toolbar>

      <v-card-text :class="'unanswered' === tab ? 'bg-orange' : 'bg-grey'">
        <v-window v-model="tab">
          <v-window-item value="unanswered" class="bg-orange">
            <TipView :readonly="false" />
          </v-window-item>
          <v-window-item value="answered" class="bg-grey">
            <TipView :readonly="true" />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TipView from "@/views/TipView.vue";

export default defineComponent({
  name: "TipsView",

  components: {
    TipView,
  },

  setup() {
    const tab = ref("");

    return {
      tab,
      userPosts: [""],
    };
  },
});
</script>

<style>
.v-main {
  background-color: #881800;
}
</style>
