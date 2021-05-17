<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
  <div v-if="showModel">
    <Model :header="header" :text="text" theme="sale" @close="toggleModel">
      <template v-slot:links>
        <a href="#"> sign up now</a>
        <a href="#"> more info</a>
      </template>
      <h1>Outside of the template</h1>
      <p>Ouside of the paragraph</p>
    </Model>
  </div>
  <button @click="toggleModel">open model</button>
</template>

<script>
import Model from "./components/Model.vue";

export default {
  name: "test",
  components: { Model },
  data() {
    return {
      title: "My First Vue App",
      header: "comes from App.vue header",
      text: "comes from App.vue text",
      showModel: false
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModel() {
      this.showModel = !this.showModel;
    }
  }
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
