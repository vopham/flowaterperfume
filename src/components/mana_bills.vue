<template>
  <div class="container">
      <div class="title_pageproducts">
          <div class="text_title">
              Quản lí đơn hàng
          </div>
      </div>
      <div class="row content">
          <div class="col-12" style="border: solid 1px #aaa;">
              <table class="table">
                  <thead>
                      <tr>
                      <th scope="col"></th>
                      <th scope="col">Khách hàng</th>
                      <th scope="col">Số điện thoại</th>
                      <th scope="col">Địa chỉ giao hàng</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Trạng thái đơn</th>
                      <th scope="col">Tổng tiền</th>
                      <th scope="col">Xác nhận</th>
                      </tr>
                  </thead>
                  <tbody class="table-group-divider">
                      <list_billmana v-for="(product, index) in bill" :key="product.id" :products="product" :index="index"/>
                  </tbody>
              </table>
          </div>
      </div>
      <div style="height: 300px"></div>
  </div>
</template>

<script>
import list_billmana from './partials/admin_partials/list_billmana.vue';

export default {
  data: () => ({
    loading: false,
  }),
  data(){
    return{
      bill:[],
      totalprice: 0
    }
  },
  async mounted(){

    const ress = await axios.get('http://localhost:3000/bill/getallbill');
    this.bill = ress.data
    // for(let i =0; i< ress.data.length; i++){
    //   if(ress.data[i].status === false){
    //     this.bill.push(ress.data[i])
    //   }
    // }
  },
  
  components:{
    list_billmana
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
.content{
  height: 500px;
}
</style>
