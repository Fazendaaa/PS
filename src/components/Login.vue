<template>
  <v-img src="@/assets/login.svg"></v-img>
  <p class="subheading grey--text" v-html="$vuetify.locale.t('login.login')" />
  <div v-if="logged">
    <SignIn />
  </div>
  <div v-else>
    <Profile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Profile from "./Profile.vue";
import SignIn from "./SignIn.vue";

export default defineComponent({
  name: "LoginComponent",

  components: {
    Profile,
    SignIn,
  },

  setup() {
    return {
      logged: false,
    };
  },
});
</script>
