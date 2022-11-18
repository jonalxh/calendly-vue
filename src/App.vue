<template>
  <div id="app">
    <CalendlyVue url="alguien-123"/>
  </div>
</template>

<script>
import CalendlyVue from './components/Calendly.vue'

export default {
  name: 'App',
  components: {
    CalendlyVue
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
