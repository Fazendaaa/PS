<template>
  <v-btn block class="my-4" target="_blank" :href="number">
    <v-icon>mdi-whatsapp</v-icon>
    <span v-html="content" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WhatsAppComponent",

  props: {
    content: {
      type: String,
      required: true,
      default: "",
    },
  },

  setup() {
    return {
      number: "https://wa.me/".concat(process.env.VUE_APP_WA_NUMBER || ""),
    };
  },
});
</script>
