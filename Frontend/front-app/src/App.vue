<template>
  <div id="app">
    <h1>Main</h1>
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Main
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
