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
            v-model="activity[item.name]"
            label="Atividade"
            :items="item.items"
            variant="solo"
          />
          <div v-if="activity[item.name]">
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
                    <vue-timepicker v-model="picker" />
                    <v-btn
                      block
                      color="green"
                      @click="
                        saveActivity(item.name, activity[item.name], picker)
                      "
                    >
                      <v-icon>mdi-check-bold</v-icon>
                      <span>CONFIRM</span>
                    </v-btn>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!--<v-expansion-panel>
                <v-expansion-panel-title>
                  <span
                    class="upper-bold"
                    v-html="$vuetify.locale.t('activities.automatic')"
                  />
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <Stopwatch />
                </v-expansion-panel-text>
              </v-expansion-panel>-->
            </v-expansion-panels>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-dialog v-model="ok" width="auto">
      <v-card color="white">
        <v-card-title>Atividade Recebida :)</v-card-title>
        <v-card-text>
          Recebemos sua atividade e iremos processar ela no nosso sistema!
        </v-card-text>
        <v-card-actions>
          <v-btn block color="green" class="my-4" @click="ok = false">
            <span class="upper-bold">Fechar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import Stopwatch from "@/components/Stopwatch.vue";
// @ts-expect-error: missing type declaration
import VueTimepicker from "vue3-timepicker";
import "vue3-timepicker/dist/VueTimepicker.css";
import { Store, useStore } from "vuex";

const save = (
  field: string,
  activity: string,
  time: string,
  store: Store<any>,
  ok: Ref<boolean>
) => {
  const user = store.getters.getUser;
  // https://stackoverflow.com/a/29774197/7092954
  const date = new Date().toISOString().split("T")[0];
  const item = {
    name: activity,
    duration: time,
  };

  if (!(field in user["activities"])) {
    user["activities"][field] = {};
  }
  if (date in user["activities"][field]) {
    user["activities"][field][date].push(item);
  } else {
    user["activities"][field][date] = [item];
  }

  ok.value = true;

  store.commit("setUser", user);
};

export default defineComponent({
  name: "ActivitiesView",

  components: {
    //Stopwatch,
    VueTimepicker,
  },

  setup() {
    const store = useStore();
    const ok = ref(false);

    return {
      ok,
      saveActivity: (field: string, activity: string, time: string) =>
        save(field, activity, time, store, ok),
      activities: [
        {
          name: "healthcare",
          items: [
            "Ir à farmácia",
            "Consultas à profissionais de saúde",
            "Urgências",
            "Emergências no geral",
            "Escovar os dentes",
            "Barbear",
            "Lavar mãos",
            "Maquiar",
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
      activity: ref({}),
      picker: ref(""),
    };
  },
});
</script>

<style>
.v-main {
  background-color: #00964f;
}
</style>
