<template>
  <h1 v-for="item in namee" :key="item.id">Hello {{ item }}</h1>
  <button @click="logout">Logout</button>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            user: [],
            namee: [],
        }
    },
    async created(){
        var username = window.localStorage.getItem('name');
        this.namee.push(username);
    },
    async mounted(){
        const res = await axios.get('http://localhost:3000/user/getall')
        this.user = res.data
        console.log(this.user)
    },
    methods:{
        async logout(){
            localStorage.removeItem('token');
            localStorage.removeItem('admin');
            this.$router.push('login');
        }
    },
}
</script>
<style>

</style>