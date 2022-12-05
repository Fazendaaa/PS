<template>
  <v-card
    v-for="item in entries"
    v-bind:key="item.title"
    class="mx-auto"
    max-width="344"
  >
    <v-img :src="item.src" height="200px" cover></v-img>

    <v-card-title class="my-text"> {{ item.title }} </v-card-title>
    <v-card-subtitle class="my-text"> {{ item.subtitle }} </v-card-subtitle>

    <v-card-actions>
      <v-btn @click="show[item.title] = !show[item.title]">
        <v-icon
          :icon="show[item.title] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        />
        <span class="my-text" v-html="$vuetify.locale.t('tip.about')" />
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show[item.title]">
        <v-divider />
        <v-card-text> {{ item.content }} </v-card-text>
        <v-divider />
        <v-btn block color="green" class="my-4" :to="{ name: 'quiz' }">
          <span class="my-text" v-html="$vuetify.locale.t('tip.answer')" />
        </v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TipView",

  setup() {
    return {
      show: ref({}),
      entries: [
        {
          title: "Test 1",
          subtitle: "subtitle test 1",
          src: "https://th.bing.com/th/id/R.5889891e6ba7c4026c85e0467fa60158?rik=sfQ%2fA6AdZJIb%2fg&pid=ImgRaw&r=0",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Test 2",
          subtitle: "subtitle test 2",
          src: "https://th.bing.com/th/id/OIP.VOshgjk9vKiKizEpfN5HSQHaE8?pid=ImgDet&rs=1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
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
