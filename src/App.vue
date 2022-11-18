<template>
  <div id="app">
    <Calendly />
  </div>
</template>

<script>
import Calendly from './components/Calendly.vue'

export default {
  name: 'App',
  components: {
    Calendly
  }
}
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
