<template>
  <v-img height="125" src="@/assets/notFound.svg" />
  <h1 v-html="$vuetify.locale.t('notFound.title')" />
  <p v-html="$vuetify.locale.t('notFound.text')" />

  <v-btn block class="my-4" :to="{ name: 'login' }">
    <span v-html="$vuetify.locale.t('notFound.back')" />
  </v-btn>

  <v-btn block class="my-4">
    <v-icon>mdi-whatsapp</v-icon>
    <span v-html="$vuetify.locale.t('notFound.contact')" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
});
</script>
