<template>
    <div class="cart_container">
        <div class="title_pageproducts">
            <div class="text_title">
                Giỏ hàng của bạn
            </div>
        </div>
        <div class="row">
            <div class="col-8" style="border: solid 1px #aaa;">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                    
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <cart_card v-for="product in cart" :key="product.id" :products="product" />
                     
                    </tbody>
                </table>
            </div>
            <div class="col-4">
              <div class="ctner">
                <div class="container_total">
                   <div class="title_total">
                        Tổng giá tiền: {{ toVND(this.totalprice)  }}
                   </div> 
                   <div class="text-center">
                        <v-btn class="cusbtn"
                        :loading="loading"
                        @click="loading = !loading"
                        >
                        Đặt hàng

                        <template v-slot:loader>
                            <v-progress-linear indeterminate></v-progress-linear>
                        </template>
                        </v-btn>
                    </div>
                </div>
              </div>
                
            </div>
        </div>

    </div>
</template>

<script>
import cart_card from './partials/cart_partials/cart_card.vue'

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
      var cusid = window.localStorage.getItem('id');

      const ress = await axios.get('http://localhost:3000/cart/getcart/'+cusid)
      this.cart = ress.data
      
     
      for(var i =0; i< this.cart.length; i++){
      this.totalprice = this.totalprice + this.cart[i].total;
      }
    },
    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    components:{
      cart_card
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
.title_total{
  text-align: start;
  font-size: 30px;
  font-family: 'Josefin_Sans';
  font-weight: 300;
  padding: 14px;
}
.container_total{
    width: 98%;
    height: 150px;
    border: solid 1px #aaa;
}
.ctner{
    width: 98%;
    height: 400px;
}
.cusbtn{
    background-color: #ebebeb;
    font-family: 'Josefin_Sans';
}
.imagee{
    width: 100px;
    height: 100px;
}
</style>
