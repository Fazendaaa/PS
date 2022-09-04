<template>
  <ul v-if="!loading && data && data.length">
    <li v-for="item in data" :key="item">
      {{ item }}
    </li>
  </ul>

  <p v-if="loading">
    Still loading..
  </p>
  <p v-if="error">
    Error while processing request
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref<number[]>([]);
const loading = ref(true);
const error = ref(null);

function fetchData() {
  loading.value = true;

  return fetch('https://siever.docker.localhost/sieve?limit=10', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => {
    // a non-200 response code
    if (!res.ok) {
      // create error instance with HTTP status text
      const error = new Error(res.statusText);

      throw error;
    }

    return res.json();
  }).then(json => {
    console.log(json)
    data.value = json;
  }).catch(err => {
    error.value = err;
    // In case a custom JSON error response was provided
    if (err.json) {
      return err.json.then(json => {
        // set the JSON response message
        error.value.message = json.message;
      });
    }
  }).then(() => {
    loading.value = false;
  });
}

fetchData();
</script>
