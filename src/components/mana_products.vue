<template>
  <div class="container">
      <div class="title_pageproducts">
          <div class="text_title">
              Tất cả sản phẩm
          </div>
      </div>
      <div class="add">
            <router-link to="/addproduct"><v-btn class="btn_add">Thêm sản phẩm<i class="fa-solid fa-plus"></i></v-btn></router-link>
      </div>
      <div class="row">
          <div class="col-12" style="border: solid 1px #aaa;">
              <table class="table">
                  <thead>
                      <tr>
                      <th scope="col"></th>
                      <th scope="col">Sản phẩm</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Dung tích</th>
                      <th sopce="col">Thương hiệu</th>
                      <th scope="col">Giá</th>
                      
                  
                      </tr>
                  </thead>
                  <tbody class="table-group-divider">
                      <list_cardmana v-for="product in cart" :key="product.id" :products="product" />
                  </tbody>
              </table>
          </div>
      </div>
      <div style="height: 300px"></div>
  </div>
</template>

<script>
import list_cardmana from './partials/admin_partials/list_cardmana.vue';

export default {
  data: () => ({
    loading: false,
  }),
  data(){
    return{
      cart:[],
      totalprice: 0
    }
  },
  async mounted(){

    const ress = await axios.get('http://localhost:3000/product/getall');
    this.cart = ress.data
    console.log(this.cart)
  
  },
  watch: {
    loading (val) {
      if (!val) return

      setTimeout(() => (this.loading = false), 2000)
    },
  },
  components:{
    list_cardmana
  },
  prop:{
    listproducts:{
          type: Array,
          default: []
      }
  },
  methods:{
    toVND(x){
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(x)
  },
  }
}
</script>

<style scoped>
.title_pageproducts{
width: 100%;
height: 100px;
}
.text_title{
text-align: center;
font-size: 50px;
font-family: 'Josefin_Sans';
font-weight: 300;
padding: 14px;
}
.add{
  margin-bottom: 15px;
}
.btn_add{
  background-color: #8cdfff;
}
.imagee{
  width: 100px;
  height: 100px;
}
</style>
