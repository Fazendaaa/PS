<template>
  <v-img cover src="@/assets/signin.svg">
    <v-container class="vertical-center">
      <h1 v-html="$vuetify.locale.t('signIn.mobileMessage')" />
      <v-text-field
        :label="$vuetify.locale.t('signIn.mobile')"
        :rules="userRules"
        :loading="loading"
        v-model="mobile"
        hide-details="auto"
      />
      <h1 v-html="$vuetify.locale.t('signIn.passwordMessage')" />
      <v-text-field
        :label="$vuetify.locale.t('signIn.password')"
        :rules="passwordRules"
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

    <v-dialog v-model="error" width="auto">
      <v-card color="white">
        <v-card-title>Ops! Algo aconteceu...</v-card-title>
        <v-card-text>
          Houve um erro ao entrar no sistema; verifique seu usuário e senha;
          qualquer coisa entre em contato com o responsável
        </v-card-text>
        <v-card-actions>
          <v-btn block color="green" class="my-4" @click="error = false">
            <span class="upper-bold">Fechar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-img>
</template>

<script lang="ts">
import { callAPI } from "@/scripts/api";
import { defineComponent, Ref, ref } from "vue";
import { Store, useStore } from "vuex";

const auth = async (
  store: Store<unknown>,
  mobile: string,
  password: string,
  error: Ref<boolean>
): Promise<boolean> => {
  const response = await callAPI("users/auth/", "POST", {
    mobile,
    password,
  });

  if (undefined !== response && null !== response) {
    store.commit("setUser", response);

    return true;
  }

  error.value = true;

  return false;
};

export default defineComponent({
  name: "SignInComponent",

  setup() {
    const mobile = ref("");
    const password = ref("");
    const loading = ref(false);
    const store = useStore();
    const error = ref(false);

    return {
      error,
      mobile,
      password,
      loading,
      checkPassword: (mobile: string, password: string) =>
        auth(store, mobile, password, error),
      userRules: [
        (value: string) => !!value || "Necessário.",
        (value: string) =>
          (value && 9 === value.length) || "Tem que ser 9 dígitos",
      ],
      passwordRules: [
        (value: string) => !!value || "Necessário.",
        (value: string) =>
          (value && 8 === value.length) || "Tem que ser 8 dígitos",
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
