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
                   <div class="title_total">
                    Thông tin giao hàng
                   </div>
                   <div class="form_info">
                    <div class="edit_container">
                        <div class="form">
                        <div class="input-container ic1">
                          <input v-model="name_order"  class="input" type="text" placeholder="Họ và tên" />
                          <div class="cut"></div>
                        </div>
                        <div class="input-container ic2">
                          <input v-model="address_order" class="input" type="text" placeholder="Địa chỉ" />
                          <div class="cut"></div>
                        </div>
                        <div class="input-container ic2">
                          <input v-model="phone_order" class="input" type="text" placeholder="Số điện thoại" />
                          <div class="cut"></div>
                        </div>
                        <div class="btn_update">
                          <button @click="dathang" type="text" class="submit">Đặt hàng</button>
                        </div>
                        
                      </div>
                    </div>
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
        totalprice: 0,
        name_product: '',
        quantity: ''
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
      async dathang(){
        
        this.quantity = this.cart[0].quantity
        const data = {
          cus_id: window.localStorage.getItem('id'),
          name_order: this.name_order,
          phone_order: this.phone_order,
          address_order: this.address_order,
          bill_items: this.cart
        }
        await axios.post('http://localhost:3000/bill/getbill',data)
        .then( res => {
              axios.post('http://localhost:3000/cart/removeallcart');
              alert('Đặt hàng thành công')
              window.location.reload
            })
            .catch( err => {
                console.log(err);
            })
      }
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
    height: 650px;
    border: solid 1px #aaa;
}
.ctner{
    width: 98%;
    height: 650px;
}
.cusbtn{
    background-color: #ebebeb;
    font-family: 'Josefin_Sans';
}
.imagee{
    width: 100px;
    height: 100px;
}



  body {
    align-items: center;
    background-color: #000;
    display: flex;
    justify-content: center;
    height: 100vh;
  }
  
  .form {
    margin: 10px auto;
    background-color: #f3f3f3;
    box-sizing: border-box;
    height: 490px;
    padding: 20px;
    width: 470px;
  }
  
  .title {
    color: #2e2d2d;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }
  .titlee{
    text-align: center;
  }
  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }
  
  .ic1 {
    margin-top: 40px;
  }
  
  .ic2 {
    margin-top: 30px;
  }
  
  .input {
    background-color: #ececec;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #2e2b2b;
    font-size: 18px;
    height: 100%;
    padding: 4px 20px 0;
    width: 100%;
  }
  .inputt{
    margin-top: 10px;
    background-color: #ececec;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #2e2b2b;
    font-size: 18px;
    height: 100%;
    padding: 4px 20px 0;
    width: 100%;
  }
  .cut {
    background-color: #f3f3f3;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }
  
  .cut-short {
    width: 50px;
  }
  
  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }
  
  .placeholder {
    color: #ffffff00;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }
  
  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
    color: #ffffff00;
  }
  
  .input:not(:placeholder-shown) ~ .placeholder {
    color: #ffffff;
  }
  
  .input:focus ~ .placeholder {
    color: #ffffff00;
  }
  
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 60px;
    text-align: center;
    width: 25%;
  }
  
  .submit:active {
    background-color: #06b;
  }
  .btn_update{
  
    width: 100%;
    text-align: center;
  }
</style>
