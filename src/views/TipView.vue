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
          title: "Recomendações nutricionais",
          subtitle: "Passos para uma alimentação saudável",
          src: "https://nationaldebtadvisors.co.za/wp-content/uploads/2016/05/Groceries.jpg",
          content:
            "Uma alimentação saudável é aquela que reúne os seguintes atributos: é acessível e não é cara, valoriza a variedade, as preparações alimentares usadas tradicionalmente, é harmônica em quantidade e qualidade, naturalmente colorida e segura sanitariamente.",
        },
        {
          title: "Utilize óleo, sal e açúcar com moderação",
          subtitle: "Mude você também os hábitos",
          src: "http://advancednaturalwellness.net/wp-content/uploads/2016/10/salt-sugar-oil.png",
          content:
            "Ao preparar ou temperar refeições, utilize pequenas quantidades de óleos, gorduras, sal e açúcar. Se o uso for moderado, esses ingredientes culinários contribuem para deixar a alimentação mais saborosa sem torná-la nutricionalmente desbalanceada.  \
\
Dica: Os brasileiros consomem muito mais açúcar e sódio (presente no sal) do que o recomendável. Veja dados e entenda importância de reduzir o consumo excessivo desses nutrientes, com dicas reunidas em um conteúdo especial sobre sódio e sobre açúcar. ",
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
