<template>
  <v-card>
    <h1 class="header">{{ challenge.name }}</h1>

    <v-card-text>
      <h1 class="header">{{ challenge.limit }}</h1>
      <h2 class="header">{{ challenge.description }}</h2>

      <div v-if="challenge.address">
        <br />
        <OpenStreetMap :address="challenge.address" />
      </div>

      <h2 class="header">{{ challenge.address }}</h2>
      <div v-if="error">Error while loading social share</div>

      <Suspense v-else>
        <template #default>
          <ShareNetwork
            :title="challenge.name"
            :description="challenge.address"
            :url="`${url}${challenge.id}`"
          />
        </template>
        <template #fallback>
          <div align="center">loading navigation...</div>
        </template>
      </Suspense>

      <br />
      <v-btn block color="red" :to="{ name: 'prescription' }">
        <span>Fechar</span>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent, onErrorCaptured, ref } from "vue";
import OpenStreetMap from "@/components/OpenStreetMap.vue";
import { useRoute } from "vue-router";
import ShareNetwork from "@/components/Share.vue";
import json from "../../data/culture.json";

export default defineComponent({
  name: "ChallengeView",

  components: {
    ShareNetwork,
    OpenStreetMap,
  },

  setup() {
    const baseURL = "https://viva.fazenda.solutions/";
    const url = `${baseURL}challenge/`;
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
    const error = ref(false);
    const errorMessage = ref("");
    const challenge = json.filter(({ id }) => id == parseInt(paramID.value))[0];

    onErrorCaptured((e) => {
      errorMessage.value = `${e}`;
      error.value = true;

      return true;
    });

    return {
      url,
      challenge,
      error,
      errorMessage,
    };
  },
});
</script>

<style scoped>
.v-card {
  background-color: #7421b1;
}
</style>

<style>
.v-main {
  background-color: #7421b1;
}
</style>
