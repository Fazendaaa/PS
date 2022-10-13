<template>
  <v-img src="@/assets/notFound.svg" />
  <p>Numero nao cadastrado no sistema!</p>
  <p>Entre em contato com os responsaveis ou tente novamente</p>

  <v-btn>
    <span> Voltar </span>
  </v-btn>

  <v-btn>
    <v-icon>mdi-whatsapp</v-icon>
    <span> Contate-nos </span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
});
</script>
