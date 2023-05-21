<template>
  <h1 v-html="$vuetify.locale.t('activities.activities')" />

  <div v-for="(button, index) in buttons" v-bind:key="index">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="my-text"
            v-html="$vuetify.locale.t(`activities.${button}`)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-select
            v-model="activity"
            label="Atividade"
            :items="items"
            variant="solo"
          />
          <div v-if="activity">
            <v-expansion-panels variant="inset" class="my-4">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span
                    class="my-text"
                    v-html="$vuetify.locale.t('activities.automatic')"
                  />
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <Stopwatch />
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span
                    class="my-text"
                    v-html="$vuetify.locale.t('activities.manual')"
                  />
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div>
                    <vue-timepicker :modelValue="picker" />
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import Stopwatch from "@/components/Stopwatch.vue";
// @ts-expect-error: missing type declaration
import VueTimepicker from "vue3-timepicker";
import "vue3-timepicker/dist/VueTimepicker.css";

export default defineComponent({
  name: "ActivitiesView",

  components: {
    Stopwatch,
    VueTimepicker,
  },

  setup() {
    const store = useStore();

    store.commit("setTheme", "activities");

    return {
      buttons: [
        "healthcare",
        "homeTasks",
        "voluntaryActivity",
        "physicalActivity",
        "occupationalActivity",
      ],
      activity: ref(""),
      picker: "",
      items: [
        "Varrer",
        "Limpar casa",
        "Lavar louça",
        "Cozinhar",
        "Fazer Compras",
        "Arrumar cama",
        "Atividar em geral",
      ],
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
