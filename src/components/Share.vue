<template>
  <br />
  <h2 class="header">Compartilhe:</h2>
  <br />
  <ShareNetwork
    v-for="network in networks"
    :network="network.network"
    :key="network.network"
    :url="sharing.url"
    :title="sharing.title"
    :description="sharing.description"
    :quote="sharing.quote"
    :hashtags="sharing.hashtags"
    :twitterUser="sharing.twitterUser"
    flat
    style="text-decoration: none; color: inherit"
  >
    <v-btn block :color="network.color">
      <v-icon>{{ network.icon }}</v-icon>
      <span>{{ network.name }}</span>
    </v-btn>
  </ShareNetwork>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "ShareChapterComponent",

  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
    quote: {
      type: String,
      required: true,
      default: "",
    },
    hashtags: {
      type: String,
      required: true,
      default: "",
    },
  },

  async setup(props) {
    const { title, description, quote, hashtags } = toRefs(props);

    return {
      sharing: {
        twitterUser: "testando",
        url: "google.com.br",
        title,
        description,
        quote,
        hashtags,
      },
      networks: [
        {
          network: "twitter",
          name: "Twitter",
          icon: "mdi-twitter",
          color: "blue",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "mdi-whatsapp",
          color: "green",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: "mdi-send-variant",
          color: "#81c6eb",
        },
        {
          network: "messenger",
          name: "Messenger",
          icon: "mdi-facebook-messenger",
          color: "#e374b6",
        },
      ],
    };
  },
});
</script>
