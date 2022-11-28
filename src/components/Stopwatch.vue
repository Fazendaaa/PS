<template>
  <div>
    <span>{{ timer.days }}</span
    >:<span>{{ timer.hours }}</span
    >:<span>{{ timer.minutes }}</span
    >:<span>{{ timer.seconds }}</span>
  </div>
  <p>{{ timer.isRunning ? "Running" : "Not running" }}</p>
  <v-btn block class="my-4" @click="timer.start()">Start</v-btn>
  <v-btn block class="my-4" @click="timer.pause()">Pause</v-btn>
  <v-btn block class="my-4" @click="timer.resume()">Resume</v-btn>
  <v-btn block class="my-4" @click="restartFive()">Restart</v-btn>
</template>

<script lang="ts">
// https://www.npmjs.com/package/vue-timer-hook
import { defineComponent } from "vue";
import { watchEffect, onMounted } from "vue";
import { useTimer } from "vue-timer-hook";

export default defineComponent({
  name: "StopwatchComponent",

  setup() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    const timer = useTimer(time);
    const restartFive = () => {
      // Restarts to 5 minutes timer
      const time = new Date();
      time.setSeconds(time.getSeconds() + 300);
      timer.restart(time);
    };

    return {
      timer,
      restartFive,
    };
  },

  // onMounted(() => {
  //   watchEffect(async () => {
  //     if (timer.isExpired.value) {
  //       console.warn("IsExpired");
  //     }
  //   });
  // });
});
</script>
