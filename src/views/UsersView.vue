<template>
  <h1 class="header" v-html="$vuetify.locale.t('users.users')" />

  <v-expansion-panels variant="inset" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-view-list</v-icon>
        <span class="upper-bold" v-html="$vuetify.locale.t('users.add')" />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-img width="200" cover src="@/assets/avatar.svg" />
        </div>

        <v-text-field
          :label="$vuetify.locale.t('users.name')"
          v-model="name"
          hide-details="auto"
          clearable
        />
        <v-text-field
          :label="$vuetify.locale.t('users.birthday')"
          v-model="birthday"
          hide-details="auto"
          clearable
        />
        <v-text-field
          :label="$vuetify.locale.t('users.mobile')"
          :rules="rules"
          v-model="mobile"
          hide-details="auto"
          clearable
        />

        <v-switch
          v-model="toggle"
          :label="$vuetify.locale.t('users.isAdmin')"
          color="green"
          value="red"
          hide-details
        />

        <v-btn block color="green" class="my-4" @click="add()">
          <v-icon>mdi-check</v-icon>
          <span>Cadastrar</span>
        </v-btn>
        <v-btn block color="red" class="my-4" @click="cancel()">
          <v-icon>mdi-cancel</v-icon>
          <span>Cancelar</span>
        </v-btn>

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
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <v-icon>mdi-view-list</v-icon>
        <span class="upper-bold" v-html="$vuetify.locale.t('users.list')" />
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div v-for="(user, index) in users" v-bind:key="index">
          {{ user["name"] }}
          <v-btn>
            <span>edit</span>
          </v-btn>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { callAPI } from "@/scripts/api";
import { defineComponent, Ref, ref } from "vue";

const cancelUser = (
  name: Ref<string>,
  birthday: Ref<string>,
  mobile: Ref<string>,
  toggle: Ref<string[]>
) => {
  name.value = "";
  birthday.value = "";
  mobile.value = "";
  toggle.value = ["green"];
};

const addUser = async (
  name: Ref<string>,
  birthday: Ref<string>,
  mobile: Ref<string>,
  toggle: Ref<string[]>,
  dialog: Ref<boolean>,
  message: Ref<string>
) => {
  const user = await callAPI("users/", "POST", {
    name: name.value,
    birthday: birthday.value,
    mobile: mobile.value,
    password: birthday.value,
    isAdmin: 2 === toggle.value.length,
  });

  dialog.value = true;

  if (null !== user) {
    message.value = `User ${name.value} added`;
    cancelUser(name, birthday, mobile, toggle);
  } else {
    message.value = `Error while adding user ${name.value}`;
  }
};

const fetchUsers = async () => {
  const user = await callAPI("users/", "GET");

  return user;
};

export default defineComponent({
  name: "UsersView",

  setup() {
    const name = ref("");
    const birthday = ref("");
    const mobile = ref("");
    const message = ref("");
    const toggle = ref(["green"]);
    const dialog = ref(false);
    const users = ref({});

    fetchUsers().then((result) => (users.value = result));

    return {
      name,
      birthday,
      mobile,
      toggle,
      dialog,
      message,
      add: () => addUser(name, birthday, mobile, toggle, dialog, message),
      cancel: () => cancelUser(name, birthday, mobile, toggle),
      rules: [
        (value: string) => !!value || "Required.",
        (value: string) =>
          (value && 9 === value.length) || "Tem que ser 9 dígitos",
      ],
      users,
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
