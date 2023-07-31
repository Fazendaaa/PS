<template>
  <h1 class="header" v-html="$vuetify.locale.t('user.user')" />
  <div class="d-flex flex-column justify-space-between align-center">
    <v-img width="200" cover src="@/assets/avatar.svg" />
  </div>

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel v-for="(button, index) in fields" v-bind:key="index">
      <v-expansion-panel-title
        class="upper-bold"
        v-html="$vuetify.locale.t(`user.${button.name}`)"
      />
      <v-expansion-panel-text>
        <span> {{ button.value }} </span>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel v-for="(button, index) in buttons" v-bind:key="index">
      <v-expansion-panel-title
        class="upper-bold"
        v-html="$vuetify.locale.t(`user.${button.name}`)"
      />
      <v-expansion-panel-text>
        Atual: {{ user[button.name] }}
        <v-text-field
          :label="button.value"
          v-model="values[button.name]"
          hide-details="auto"
          clearable
        />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-btn block color="green" class="my-4" @click="updateUser">
    <v-icon>mdi-check</v-icon>
    <span>Salvar</span>
  </v-btn>
  <v-btn block color="red" class="my-4">
    <v-icon>mdi-cancel</v-icon>
    <span>Cancelar</span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Store, useStore } from "vuex";
import { callAPI } from "@/scripts/api";

// https://stackoverflow.com/a/50827764/7092954
const getAge = (birthDate: string) => {
  const value = birthDate.match(/.{1,2}/g);
  const data =
    null !== value
      ? `${value[2]}${value[3]}-${value[1]}-${value[0]}`
      : "1900-01-01";

  return Math.floor(
    // @ts-expect-error: don't know
    (new Date() - new Date(data).getTime()) / 3.15576e10
  );
};

const updateUser = (values: Ref<object>, store: Store<any>) => {
  const user =
    undefined !== localStorage.getItem("user")
      ? // @ts-expect-error: any
        JSON.parse(localStorage.getItem("user"))
      : {};
  const updated = {
    ...user,
    ...values.value,
  };

  store.commit("setUser", updated);
};

export default defineComponent({
  name: "UserView",

  setup() {
    const store = useStore();
    const user = store.getters.getUser;
    const values = ref({});

    console.log(user);

    //callAPI(`users/${mobile}`, "GET").then((response) => {
    //  data.value = response;
    //});

    return {
      user,
      updateUser: () => updateUser(values, store),
      fields: [
        { name: "name", value: user["name"] },
        { name: "age", value: `${getAge(user["birthday"])} anos` },
      ],
      values,
      buttons: [
        { name: "weight", value: "Em centimetros" },
        { name: "waist", value: "Em centimetros" },
        { name: "arterialPressure", value: "" },
        { name: "height", value: "Em centimetros" },
        { name: "illness", value: "" },
        { name: "medication", value: "" },
        { name: "skin", value: "" },
        { name: "others", value: "" },
      ],
    };
  },
});
</script>

<style>
.v-main {
  background-color: #e5e5e5;
}

.header {
  color: black;
}
</style>
