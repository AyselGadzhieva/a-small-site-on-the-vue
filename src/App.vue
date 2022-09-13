<template>
  <div id="app">
    <hr size="0px">
    <h1>Мой удачный дом</h1>
    <hr size="60px" color="white">
    <v-main-wrapper />
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'App',
  components: {
    vMainWrapper
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
  background: #F56C6C;
}
</style>
