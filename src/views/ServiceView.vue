<template>
  <h1 class="header" v-html="$vuetify.locale.t('service.service')" />

  <div v-if="this.$store.getters.isAdmin">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="upper-bold"
            v-html="$vuetify.locale.t('service.motivationalSMS')"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-switch
            v-model="toggle"
            :label="$vuetify.locale.t('service.working')"
            color="green"
            value="red"
            hide-details
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <span
          class="upper-bold"
          v-html="$vuetify.locale.t('service.professionals')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-for="professional in professionals" v-bind:key="professional">
          <WhatsApp
            :content="$vuetify.locale.t(`service.`.concat(professional))"
          />
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <span class="upper-bold" v-html="$vuetify.locale.t('service.about')" />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import WhatsApp from "@/components/WhatsApp.vue";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ServiceView",

  components: {
    WhatsApp,
  },

  setup() {
    const store = useStore();

    store.commit("setTheme", "service");

    return {
      toggle: ref(["green"]),
      professionals: ["trainer", "nutritionist", "psychologist"],
    };
  },
});
</script>

<style scoped>
@import "@/assets/fonts.css";
</style>
