<template>
    <form @click="search">
        <input v-model="name" type="search" required>
        <i class="fa fa-solid fa-magnifying-glass"></i>
    </form>
</template>

<script>
export default {
    methods:{
        search(){
        axios.get('http://localhost:3000/product/search/'+this.name,)
            .then( res => {
                console.log(res);
            })
            .catch( err => {
                console.log(err);
            })
    },
    }
}
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    background: #07051a;
}

form{
    position: relative;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 40px;
    height: 40px;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid white;
    padding: 5px;
}

input{
    background-color: #e1e1e1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 32.5px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

.fa{
    background-color: rgb(235 235 235);;
    box-sizing: border-box;
    padding: 7px;
    width: 32.5px;
    height: 32.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: #07051a;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
}

form:hover,
form:valid{
    width: 150px;
    cursor: pointer;
}

form:hover input,
form:valid input{
    display: block;
}

form:hover .fa,
form:valid .fa{
    background: #07051a;
    color: white;
}


a {
  display: none;
  position: absolute;
  top: 70px;
  bottom:0;
  left: 0;
  right: 0;
  font-size: 20px;
  color: white;
  text-align: center; 
  width: 100%;
}

form:valid a {
  display: block;
}
</style>