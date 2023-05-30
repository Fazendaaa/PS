<template>
  <v-card>
    <h1>{{ challenge.title }}</h1>
    <v-card-text>
      {{ challenge.content }}
    </v-card-text>
    <div v-if="error">Error while loading social share</div>
    <Suspense v-else>
      <template #default>
        <Share
          title="Título"
          description="Descrição"
          quote="quote"
          hashtags="hashtags"
        />
      </template>
      <template #fallback>
        <div align="center">loading navigation...</div>
      </template>
    </Suspense>

    <v-btn block color="red" :to="{ name: 'prescription' }">
      <span>close</span>
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent, onErrorCaptured, ref } from "vue";
import { useRoute } from "vue-router";
import Share from "@/components/Share.vue";
import json from "../../data/challenge.json";

export default defineComponent({
  name: "ChallengeView",

  components: {
    Share,
  },

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
    const error = ref(false);
    const errorMessage = ref("");

    onErrorCaptured((e) => {
      errorMessage.value = `${e}`;
      error.value = true;

      return true;
    });
    const challenge = json.filter(({ id }) => id == parseInt(paramID.value))[0];

    return {
      challenge,
      error,
      errorMessage,
    };
  },
});
</script>

<style>
.v-main {
  background-color: #7421b1;
}
</style>
