<template>
  <v-btn block class="my-4" target="_blank" :href="number">
    <v-icon>mdi-whatsapp</v-icon>
    <span v-html="content" />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "WhatsAppComponent",

  props: {
    content: {
      type: String,
      required: true,
      default: "",
    },
    kind: {
      type: String,
      required: true,
      default: "",
    },
  },

  setup(props) {
    const { kind } = toRefs(props);

    return {
      number: "https://wa.me/"
        .concat(process.env.VUE_APP_WA_NUMBER || "")
        .concat("?text=")
        .concat(encodeURIComponent(kind.value)),
    };
  },
});
</script>
