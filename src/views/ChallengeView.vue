<template>
  <v-card>
    <h1>Title</h1>
    <v-card-text>
      {{ challenge.content }}
    </v-card-text>
    <v-btn block color="red" :to="{ name: 'prescription' }">
      <span>close</span>
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import json from "../../data/challenge.json";

export default defineComponent({
  name: "ChallengeView",

  setup() {
    const route = useRoute();
    const paramID = computed(() => {
      if (undefined !== route.params.id) {
        const id =
          "string" == typeof route.params.id
            ? route.params.id
            : route.params.id[0];
        return id;
      } else {
        return "";
      }
    });
    const challenge = json.filter(({ id }) => id == parseInt(paramID.value))[0];
    const store = useStore();

    store.commit("setTheme", "prescription");

    return {
      challenge,
    };
  },
});
</script>
