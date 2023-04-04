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
            <div class="row">
             <list_products :listproducts="listproducts"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import list_catego from './list_catego.vue';
import list_products from './list_products.vue';
export default {
    data() {
    return {
      listproducts: [],
    }
  },


  async mounted(){
    const res = await axios.get('http://localhost:3000/product/getall')
    this.listproducts = res.data
  },

  
  props:{

  },
  components:{
    list_catego,
    list_products
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

</style>