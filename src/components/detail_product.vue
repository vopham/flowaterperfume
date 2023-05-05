<template>
  <div class="title_pageproducts">
    <div class="text_title">
      Chi tiết sản phẩm
    </div>
  </div>
  <div class="container">
    <div class="row container_row">
      <div class="col-6">
        <div class="left_content">
          <img class="image" :src="array.image" alt="">
        </div>
      </div>
      <div class="col-6">
        <v-card class="right_content" >
          <v-card-item>
            <div>
              <div class="title_product">
                {{ array.name }}
              </div>
              <div class="category">
                <span style="font-weight: 400;">Thương hiệu:</span>  {{array.category}}
              </div>
              <div class="volume">
                <span style="font-weight: 400;">Dung tích:</span> {{array.volume }}
              </div>
              <div class="price">
                <span style="font-weight: 400;">Giá tiền:</span> <span>{{ toVND(array.price) }}</span>
              </div>
              <div class="desciption"><span style="font-weight: 400;">Mô tả:</span> {{ array.descripsion}}</div>
            </div>
          </v-card-item>

          <v-card-actions class="buttonn">
            <v-btn v-if="isLogged" @click="addtocart" variant="outlined" size="x-large" >
              Thêm vào giỏ hàng
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
  </div>
    </div>
    <div class="title_pageproducts">
        <div class="text_title">
          Sản phẩm liên quan
        </div>
    </div>

    <div class="row">
        <list_hint :listproducts="listhint"/>
  </div>


  <div style="width: 100%; height: 100px;"></div>
</template>

<script>
import list_hint from './partials/detail_partials/list_hint.vue'
export default {
  data(){
    return {
      listhint:[],
      array:[],
      isLogged: localStorage.getItem('token') ? true: false
    }
  },
  async mounted(){ 
      const ress = await axios.get('http://localhost:3000/product/'+this.$route.params.id)
      this.array = ress.data

      const res = await axios.get('http://localhost:3000/product/search/'+this.array.category)
      this.listhint = res.data 
      const responee = res.data
      this.listhint = responee.filter(e => e._id !== this.$route.params.id)
  },
  methods:{
    toVND(x){
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(x)
    },

    notifi(){
      alert('Thêm thành công')
    },
    async addtocart(){
      var cusid = window.localStorage.getItem('id')
      const dataa = {
        cus_id: cusid,
        product_id: this.$route.params.id,
        quantity: 1
      }
      axios.post('http://localhost:3000/cart/addtocart', dataa)
            .then( res => {
                this.notifi()
            })
            .catch( err => {
                console.log(err);
            })
    }
  },
  components:{
    list_hint
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
.container_row{
  width: 100%;
  height: 660px;
  background-color: #eeeeee;
}
.image{
  width: 500px;
  height: 500px;
  margin: 75px 0 0 125px;
  border-radius: 5px;
}
.right_content{
  margin: 75px 100px 0 0;
  height: 500px;
}
.title_product{
  font-size: 40px;
  font-family: 'Josefin_Sans';
  font-weight: 400;
}
.desciption{
  margin: 15px;
  font-size: 22px;
  font-family: 'Josefin_Sans';
  font-weight: 300;
}
.category{
  margin: 15px;
  font-size: 25px;
  font-family: 'Josefin_Sans';
  font-weight: 300;
}
.volume{
  margin: 15px;
  font-size: 25px;
  font-family: 'Josefin_Sans';
  font-weight: 300;
}
.price{
  margin: 15px;
  font-size: 25px;
  font-family: 'Josefin_Sans';
  font-weight: 300;
}
.buttonn{
  position: absolute;
  bottom: 10px;
  left: 140px;
}



</style>