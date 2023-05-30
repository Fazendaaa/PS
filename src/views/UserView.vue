<template>
  <h1 class="header" v-html="$vuetify.locale.t('user.user')" />
  <div class="d-flex flex-column justify-space-between align-center">
    <v-img width="200" cover src="@/assets/avatar.svg" />
  </div>

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel v-for="(button, index) in fields" v-bind:key="index">
      <v-expansion-panel-title
        class="upper-bold"
        v-html="$vuetify.locale.t(`user.${button}`)"
      />
      <v-expansion-panel-text>
        <span> {{ data[button] }} </span>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel v-for="(button, index) in buttons" v-bind:key="index">
      <v-expansion-panel-title
        class="upper-bold"
        v-html="$vuetify.locale.t(`user.${button}`)"
      />
      <v-expansion-panel-text>
        <v-btn>
          <span v-html="$vuetify.locale.t(`user.${button}`)" />
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <div v-if="this.$store.getters.isAdmin">
    <span>Questoes Iniciais</span>

    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span>Questoes Iniciais</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-select
            v-model="activity"
            label="Atividade"
            :items="items"
            variant="solo"
          />
          <div v-if="activity">
            <Stopwatch />
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <v-btn block color="green" class="my-4">
    <v-icon>mdi-check</v-icon>
    <span>Salvar</span>
  </v-btn>
  <v-btn block color="red" class="my-4">
    <v-icon>mdi-cancel</v-icon>
    <span>Cancelar</span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { requestData } from "@/scripts/api";

export default defineComponent({
  name: "UserView",

  setup() {
    const store = useStore();
    const mobile = store.getters.getUser["mobile"];
    const data = ref({});

    requestData(`users/${mobile}`, "GET").then((response) => {
      data.value = response;
    });

    return {
      data,
      buttons: ["hair", "skin", "others"],
      fields: ["name", "age", "illness", "medication"],
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
