<template>
  <v-img height="125" src="@/assets/notFound.svg" />
  <h1 v-html="$vuetify.locale.t('error.title')" />
  <p v-html="$vuetify.locale.t('error.text')" />

  <v-btn block class="my-4" :to="{ name: 'login' }">
    <span v-html="$vuetify.locale.t('error.back')" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorView",
});
</script>

<style>
.v-main {
  background-color: #d9e4dd;
}
</style>
