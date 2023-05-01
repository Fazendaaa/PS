<template>
  <h1 v-html="$vuetify.locale.t('groups.groups')" />

  <div v-if="this.$store.getters.isAdmin">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-pencil</v-icon>
          <span class="my-text" v-html="$vuetify.locale.t('groups.register')" />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-text-field
            :label="$vuetify.locale.t('groups.name')"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            :label="$vuetify.locale.t('groups.responsible')"
            hide-details="auto"
          ></v-text-field>
          <v-btn block color="green" class="my-4">
            <span v-html="$vuetify.locale.t('groups.accept')" />
          </v-btn>
          <v-btn block color="red" class="my-4">
            <span v-html="$vuetify.locale.t('groups.cancel')" />
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-format-list-bulleted</v-icon>
          <span v-html="$vuetify.locale.t('groups.all')" />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list lines="one">
            <v-list-item
              v-for="item in groups"
              :key="item"
              :title="item"
              subtitle="..."
              class="my-text"
            />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <div v-else>
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-head-question</v-icon>
          <span
            class="my-text"
            v-html="$vuetify.locale.t('groups.suggestion')"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-text-field
            class="my-text"
            :label="$vuetify.locale.t('groups.name')"
            hide-details="auto"
          ></v-text-field>
          <v-text-field
            class="my-text"
            :label="$vuetify.locale.t('groups.responsible')"
            hide-details="auto"
          ></v-text-field>
          <v-btn block color="green" class="my-4">
            <span v-html="$vuetify.locale.t('groups.submit')" />
          </v-btn>
          <v-btn block color="red" class="my-4">
            <span v-html="$vuetify.locale.t('groups.cancel')" />
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-folder-account</v-icon>
          <span class="my-text" v-html="$vuetify.locale.t('groups.mine')" />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list lines="one">
            <v-list-item v-for="item in groups" :key="item.name">
              <template v-slot:prepend>
                <v-btn icon :href="item.link" target="_blank">
                  <v-icon>mdi-message-text</v-icon>
                </v-btn>
              </template>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon>mdi-format-list-bulleted</v-icon>
          <span class="my-text" v-html="$vuetify.locale.t('groups.all')" />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-list lines="one">
            <v-list-item v-for="item in groups" :key="item.name">
              <template v-slot:prepend>
                <v-btn icon :href="item.link" target="_blank">
                  <v-icon>mdi-message-text</v-icon>
                </v-btn>
              </template>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import json from "../../data/groups.json";

export default defineComponent({
  name: "GroupsView",

  setup() {
    const store = useStore();

    store.commit("setTheme", "groups");

    return {
      groups: json,
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
