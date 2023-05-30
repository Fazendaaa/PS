<template>
  <h1 class="header" v-html="$vuetify.locale.t('groups.groups')" />

  <v-expansion-panels v-if="this.$store.getters.isAdmin">
    <v-expansion-panel variant="inset" class="my-4">
      <v-expansion-panel-title>
        <v-icon>mdi-pencil</v-icon>
        <span
          class="upper-bold"
          v-html="$vuetify.locale.t('groups.register')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field
          :label="$vuetify.locale.t('groups.name')"
          v-model="name"
          hide-details="auto"
          clearable
        />
        <v-text-field
          :label="$vuetify.locale.t('groups.responsible')"
          v-model="responsible"
          hide-details="auto"
          clearable
        />
        <v-text-field
          :label="$vuetify.locale.t('groups.link')"
          v-model="link"
          hide-details="auto"
          clearable
        />
        <v-btn block color="green" class="my-4" @click="add()">
          <span v-html="$vuetify.locale.t('groups.accept')" />
        </v-btn>
        <v-btn block color="red" class="my-4" @click="cancel()">
          <span v-html="$vuetify.locale.t('groups.cancel')" />
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels v-else>
    <v-expansion-panel variant="inset" class="my-4">
      <v-expansion-panel-title>
        <v-icon>mdi-head-question</v-icon>
        <span
          class="upper-bold"
          v-html="$vuetify.locale.t('groups.suggestion')"
        />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field
          class="upper-bold"
          :label="$vuetify.locale.t('groups.name')"
          hide-details="auto"
        />
        <v-text-field
          class="upper-bold"
          :label="$vuetify.locale.t('groups.responsible')"
          hide-details="auto"
        />
        <v-btn block color="green" class="my-4">
          <span v-html="$vuetify.locale.t('groups.submit')" />
        </v-btn>
        <v-btn block color="red" class="my-4">
          <span v-html="$vuetify.locale.t('groups.cancel')" />
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel variant="inset" class="my-4">
      <v-expansion-panel-title>
        <v-icon>mdi-folder-account</v-icon>
        <span class="upper-bold" v-html="$vuetify.locale.t('groups.mine')" />
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
        <span class="upper-bold" v-html="$vuetify.locale.t('groups.all')" />
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

  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { callAPI } from "@/scripts/api";
import { defineComponent, Ref, ref } from "vue";

interface Group {
  name: string;
  link: string;
  responsible: string;
}

const updateGroupsList = (groups: Ref<Group[]>) =>
  callAPI("groups/", "GET").then((response) => {
    groups.value = response;
  });

const cancelGroup = (
  name: Ref<string>,
  responsible: Ref<string>,
  link: Ref<string>
) => {
  name.value = "";
  responsible.value = "";
  link.value = "";
};

const addGroup = async (
  name: Ref<string>,
  responsible: Ref<string>,
  link: Ref<string>,
  dialog: Ref<boolean>,
  message: Ref<string>,
  groups: Ref<Group[]>
) => {
  const group = await callAPI("groups/", "POST", {
    name: name.value,
    responsible: responsible.value,
    link: link.value,
  });

  dialog.value = true;

  if (null !== group) {
    message.value = `Group ${name.value} added`;
    cancelGroup(name, responsible, link);
    updateGroupsList(groups);
  } else {
    message.value = `Error while adding group ${name.value}`;
  }
};

export default defineComponent({
  name: "GroupsView",

  setup() {
    const groups = ref<Group[]>([]);
    const name = ref("");
    const responsible = ref("");
    const link = ref("");
    const message = ref("");
    const dialog = ref(false);

    updateGroupsList(groups);

    return {
      name,
      responsible,
      link,
      groups,
      message,
      dialog,
      add: () => addGroup(name, responsible, link, dialog, message, groups),
      cancel: () => cancelGroup(name, responsible, link),
    };
  },
});
</script>

<style>
.v-main {
  background-color: #0c2f86;
}
</style>
