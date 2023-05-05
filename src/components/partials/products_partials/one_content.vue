<template>
  <div class="products_container">
    <div class="title_pageproducts">
        <div class="text_title">
          Tất cả sản phẩm
        </div>
    </div>


    <div class="row">
        <div class="col-3">
          <list_catego/>
        </div>
        <div class="col-9">
          <div class="container_list">
            <form>
              <input v-model="name" type="search" required>
              <i @click="search" class="fa fa-solid fa-magnifying-glass"></i>
            </form>
            <div class="row">
              <list_products v-if="!check" :listproducts="listproducts"/>
              <list_products v-if="check" :listproducts="listsearch" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import card_category from './card_category.vue';
import list_catego from './list_catego.vue';
import list_products from './list_products.vue';
export default {
    data() {
    return {
      listproducts: [],
      listsearch:[],
      listsearch2:[],
      check: ''
    }
  },
  async mounted(){
              const res = await axios.get('http://localhost:3000/product/getall')
              this.listproducts = res.data
          },
  methods:{
       async search(){
          const res = await axios.get('http://localhost:3000/product/search/'+this.name)
            this.listsearch = res.data
            this.check = true;  
      },
    },
  
  props:{

  },
  components:{
    list_catego,
    list_products,
    card_category
  }

  }

</script>

<style scoped>
.title_pageproducts{
  width: 100%;
  height: 100px;
  /* background-color: aqua; */
}
.text_title{
  text-align: center;
  font-size: 50px;
  font-family: 'Josefin_Sans';
  font-weight: 300;
  padding: 14px;
}


/* search */
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
    left: 80%;
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
    height: 50px;
    line-height: 30px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
}

.fa{
    background:rgb(235 235 235);;
    box-sizing: border-box;
    padding: 14px;
    width: 50px;
    height: 50px;
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
    width: 250px;
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