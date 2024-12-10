<template>
    <div>
    <router-link v-if="isLoggedOut" :to="{ name: 'Login'}">
      <button>Login</button>
    </router-link>
    <router-link v-if="isLoggedOut" :to="{ name: 'Register'}">
      <button>Register</button>
    </router-link>
    <router-link v-if="!isLoggedOut" :to="{ name: 'MyProfile'}">
      <button>My Profile</button>
    </router-link>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Main',
    components: {
      

    },
    data() {
      return {
        isLoggedOut: sessionStorage.getItem('User') == null,
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>