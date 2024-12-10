<template>
    <div class="factory-list">
      <Factory v-for="factory in factories" :key="factory.name" :factory="factory" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Factory from './Factory.vue';
  
  export default {
    name: 'FactoryList',
    components: {
      Factory
    },
    data() {
      return {
        factories: []
      };
    },
    created() {
      axios.get('http://localhost:3000/factories')
        .then(response => {
          this.factories = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  };
  </script>
  
  <style scoped>
  .factory-list {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>