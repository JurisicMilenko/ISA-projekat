<template>
    <div>
        <h1>Register</h1>
        <form class="login-component" @submit.prevent="login">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="surname">Surname:</label>
                <input type="text" id="surname" v-model="surname" required>
            </div>
            <div>
                <label for="sex">Sex:</label>
                <select v-model="sex">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div>
                <label for="date">Date of Birth:</label>
                <input type="date" id="date" v-model="date" required>
            </div>
            <button class="submit" type="submit">Register</button>

            <br>

            <p id="success">{{ success }}</p>
            <p id="error">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const name = ref('');
const surname = ref('');
const username = ref('');
const password = ref('');
const sex = ref('');
const date = ref('');

const errorMessage = ref('');
const success = ref('');

const login = () => {

    axios.post('http://localhost:8080/WebShopAppREST/rest/login/register', { username: username.value, password: password.value, name: name.value, lastName: surname.value, points: 0, gender: sex.value, birthday: date.value, role: 'User', buyerType: 1, factory:-1})
        .then(response => {
            success.value = 'Korisnik je uspesno registrovan.';
            errorMessage.value = '';
            if(response.data == "Registration failed"){
                success.value = 'Korisnik je neuspesno registrovan.';
            }
            else{
                router.push({ name: 'Login' });
            }
        })
        .catch(error => {
            success.value = '';
            errorMessage.value = 'Pogresno korisnicko ime ili lozinka.';
            console.error(error);
        });

}

const checkuser = () => {
    alert(sessionStorage.getItem("User"))
        
}
/*async getUid(){
    var response = await axios.get(`http://localhost:8080/WebShopAppREST/login/all`)
      var users = []
      var temp = [""]
      var uid = 0
      temp = response.data;
      users = temp;alert(response.data.length)
    if(users.length == 0){
        uid = 1
      }else{
      uid = parseInt(users[users.length -1 ].id) + 1;
      }
      return uid
    }*/
</script>


