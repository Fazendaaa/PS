<template>
  <v-img cover src="@/assets/signin.svg">
    <v-container class="vertical-center">
      <h1 v-html="$vuetify.locale.t('signIn.mobileMessage')" />
      <v-text-field
        :label="$vuetify.locale.t('signIn.mobile')"
        :rules="rules"
        :loading="loading"
        v-model="mobile"
        hide-details="auto"
      />
      <h1 v-html="$vuetify.locale.t('signIn.passwordMessage')" />
      <v-text-field
        :label="$vuetify.locale.t('signIn.password')"
        :rules="rules"
        v-model="password"
        :loading="loading"
        hide-details="auto"
      />
      <v-btn
        block
        color="green"
        class="my-4"
        @click="checkPassword(mobile, password)"
      >
        <v-icon>mdi-menu-right</v-icon>
        <span v-html="$vuetify.locale.t('signIn.login')" />
      </v-btn>
    </v-container>
  </v-img>
</template>

<script lang="ts">
import { requestData } from "@/scripts/api";
import { defineComponent, ref } from "vue";
import { Store, useStore } from "vuex";

const auth = async (
  store: Store<unknown>,
  mobile: string,
  password: string
): Promise<boolean> => {
  const response = await requestData("users/auth/", "POST", {
    mobile,
    password,
  });

  console.log(response);

  if (null !== response) {
    store.commit("setUser", response);

    return true;
  }

  return false;
};

export default defineComponent({
  name: "SignInComponent",

  setup() {
    const mobile = ref("");
    const password = ref("");
    const loading = ref(false);
    const store = useStore();

    return {
      mobile,
      password,
      loading,
      checkPassword: (mobile: string, password: string) =>
        auth(store, mobile, password),
      rules: [
        (value: string) => !!value || "Required.",
        (value: string) => (value && value.length >= 11) || "Min 11 characters",
      ],
    };
  },
});
</script>

<style scoped>
.container {
  height: 200px;
  position: relative;
  border: 3px solid green;
}

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
