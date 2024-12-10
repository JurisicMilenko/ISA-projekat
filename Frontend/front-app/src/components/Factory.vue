<template>
    <div class="factory">
      <h2>{{ factory.name }}</h2>
      <p>Origin: {{ factory.origin }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Factory',
    props: {
      factory: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .factory {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
  }
  </style>