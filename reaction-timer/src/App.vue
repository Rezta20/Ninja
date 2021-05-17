<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Start</button>
  <Block v-if="isPlaying" :delay="delay" @end="gameEnd" />
  <Result v-if="showResult" :time="time" />
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      time: null,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.showResult = false;
      this.delay = 2000 + Math.random() * 5000;
    },
    gameEnd(reactionTime) {
      this.isPlaying = false;
      this.showResult = true;
      this.time = reactionTime;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
