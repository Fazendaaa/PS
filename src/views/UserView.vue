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
        <div v-if="user[button.name].length != 0">
          Atual: {{ user[button.name][user[button.name].length - 1] }}
        </div>
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
  <v-btn block color="red" class="my-4" @click="cancelUser">
    <v-icon>mdi-cancel</v-icon>
    <span>Cancelar</span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Router, useRouter } from "vue-router";
import { Store, useStore } from "vuex";

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

const updateUser = (values: Ref<object>, store: Store<any>, router: Router) => {
  const user = store.getters.getUser;
  const read = values.value;

  if ("weight" in read) {
    user["weight"].push(read["weight"]);
  }
  if ("waist" in read) {
    user["waist"].push(read["waist"]);
  }
  if ("arterialPressure" in read) {
    user["arterialPressure"].push(read["arterialPressure"]);
  }
  if ("height" in read) {
    user["height"].push(read["height"]);
  }
  if ("illnesses" in read) {
    user["illnesses"].push(read["illnesses"]);
  }
  if ("medication" in read) {
    user["medication"].push(read["medication"]);
  }
  if ("skin" in read) {
    user["skin"].push(read["skin"]);
  }
  if ("others" in read) {
    user["others"].push(read["others"]);
  }

  store.commit("setUser", user);
  router.go(0);
};

export default defineComponent({
  name: "UserView",

  setup() {
    const store = useStore();
    const router = useRouter();
    const user = store.getters.getUser;
    const values = ref({});

    return {
      user,
      updateUser: () => updateUser(values, store, router),
      cancelUser: () => router.go(0),
      fields: [
        { name: "name", value: user["name"] },
        { name: "age", value: `${getAge(user["birthday"])} anos` },
      ],
      values,
      buttons: [
        { name: "weight", value: "Em kilogramas" },
        { name: "waist", value: "Em centimetros" },
        { name: "arterialPressure", value: "" },
        { name: "height", value: "Em centimetros" },
        { name: "illnesses", value: "" },
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
