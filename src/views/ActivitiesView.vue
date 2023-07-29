<template>
  <h1 class="header" v-html="$vuetify.locale.t('activities.activities')" />

  <div v-for="(item, index) in activities" v-bind:key="index">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <span
            class="upper-bold"
            v-html="$vuetify.locale.t(`activities.${item.name}`)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-select
            v-model="activity"
            label="Atividade"
            :items="item.items"
            variant="solo"
          />
          <div v-if="activity">
            <v-expansion-panels variant="inset" class="my-4">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span
                    class="upper-bold"
                    v-html="$vuetify.locale.t('activities.manual')"
                  />
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div>
                    <vue-timepicker :modelValue="picker" />
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-title>
                  <span
                    class="upper-bold"
                    v-html="$vuetify.locale.t('activities.automatic')"
                  />
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <Stopwatch />
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Stopwatch from "@/components/Stopwatch.vue";
// @ts-expect-error: missing type declaration
import VueTimepicker from "vue3-timepicker";
import "vue3-timepicker/dist/VueTimepicker.css";

export default defineComponent({
  name: "ActivitiesView",

  components: {
    Stopwatch,
    VueTimepicker,
  },

  setup() {
    return {
      activities: [
        {
          name: "healthcare",
          items: [
            "Ir à farmácia",
            "Consultas à profissionais de saúde",
            "Urgências",
            "Emergências no geral",
            "Escovar os dentes, barbear, lavar mãos, maquiar",
            "Tomar banho",
            "Comer",
            "Vestir-se",
            "Jogar cartas ou qualquer tipo de jogos sentados",
            "Ler livros, jornais ou revistas, assentado ou escrever",
            "Tocar instrumentos no geral",
            "Brincar de pé e parado com crianças",
            "Socializar ou conversar",
          ],
        },
        {
          name: "homeTasks",
          items: [
            "Varrer",
            "Limpar casa",
            "Lavar louça",
            "Cozinhar",
            "Fazer Compras",
            "Arrumar cama",
            "Atividar em geral",
          ],
        },
        {
          name: "voluntaryActivity",
          items: [
            "Meio Ambiente",
            "Animais",
            "Cultura e educação",
            "Turismo social",
            "Voluntarioado à distância",
            "Sociabilização",
            "Fome e agricultural sustentável",
            "Saúde e bem-estar",
            "Iugaldade de gênero",
          ],
        },
        {
          name: "physicalActivity",
          items: [
            "Correr em geral",
            "Correr escada acima",
            "Trote/caminhada",
            "Voleibol",
            "Pular corta",
            "Yoga",
            "Nadar esportivamente",
            "Nadar livre",
            "Ciclismo",
            "Bicileta ergométrica",
          ],
        },
        {
          name: "occupationalActivity",
          items: [
            "Panificação em geral",
            "Reforma de construções",
            "Operar equipamento pesado/automático",
            "Trabalho de escritório em geral -- assentado",
            "Trabalhos leves na posição em pé -- balconista",
            "Trabalhos moderados em pé -- conserto de peças, reparos, empacotar, cuidar de alguém",
            "Trabalhos pesados em pé -- carregar mais do que 20kg",
            "Alfaiataria em geral",
            "Dirigir caminhão, carregando/descarregando",
            "Caminhar, descer escadas ou ficar parado, carregando objetos entre 12-25kg",
          ],
        },
      ],
      activity: ref(""),
      picker: "",
    };
  },
});
</script>

<style>
.v-main {
  background-color: #00964f;
}
</style>
