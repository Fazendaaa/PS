<template>
  <h1 v-html="$vuetify.locale.t('service.service')" />

  <div v-if="this.$store.getters.isAdmin">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="my-text"
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
          class="my-text"
          v-html="$vuetify.locale.t('service.professionals')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-for="professional in professionals" v-bind:key="professional">
          <v-btn block class="my-4">
            <v-icon>mdi-whatsapp</v-icon>
            <span v-html="$vuetify.locale.t(`service.${professional}`)" />
          </v-btn>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <span class="my-text" v-html="$vuetify.locale.t('service.about')" />
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
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ServiceView",

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
.my-text {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
