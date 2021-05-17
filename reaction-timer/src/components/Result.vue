<template>
  <p>Your time is {{ time }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["time"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.time < 250) {
      this.rank = "Ninja Fingers";
    } else if (this.time < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace . . .";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
