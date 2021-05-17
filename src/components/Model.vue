<template>
  <div class="backdrop" @click.self="closeModel">
    <div class="model" :class="{ sale: theme === 'sale' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <h1>Try Scoped Color</h1>
      <h3>{{ header }}</h3>
      <p>model content</p>
      <h3>{{ text }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModel() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.model {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

h1 {
  color: #f009;
}

.model.sale {
  background-color: blueviolet;
  color: #fff;
}

.model .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.model .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
