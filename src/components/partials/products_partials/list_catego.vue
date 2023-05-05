<template>
  
    <v-card
      class="mx-auto"
          max-width="300"
      >
      <div class="title_list">Loại sản phẩm</div>
      <list_category :listcategory="listcategory"/>
    </v-card>
  
  </template>
  
  <script>
  import list_category from './list.vue';
  export default {
    data(){
      return{
        listcategory:[]
      }
    },

    async mounted(){
      const res = await axios.get('http://localhost:3000/category/getall')
      this.listcategory = res.data
    },
      props:{
  
      },
      components:{
        list_category
      }
      
  }
  </script>
  
  <style scoped>
  .title_list{
    padding: 20px;
    font-family: 'Josefin_Sans';
    font-size: 24px;
    background-color: #dbdbdb;
    color: #000000;
  }
  </style>