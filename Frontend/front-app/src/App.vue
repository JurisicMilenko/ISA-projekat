<template>
  <div id="app">
    <h1>Factory List</h1>
    <FactoryList />
  </div>
</template>

<script>
import FactoryList from './components/FactoryList.vue';

export default {
  name: 'App',
  components: {
    FactoryList
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
