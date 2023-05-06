<template>
    <tr>
       <th scope="row"></th>
       <td>
           <img class="imagee" :src="products.image" alt="">
       </td>
       <td>{{ products.name }}</td>
       <td>{{ products.volume }} </td>
       <td>{{ products.category }} </td>
       <td>{{ toVND(products.price) }} </td>   
       <td class="edit"><router-link :to="'/editproduct/'+products._id"><i class="fa-solid fa-pen-to-square"></i></router-link></td>   
       <td @click="deletee" class="delete" > <i class="fa-solid fa-trash delete_icon"></i></td>
   </tr>
</template>

<script>
export default {
   methods:{
       toVND(x){
       return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(x)
       },
       async deletee(){
           await axios.post('http://localhost:3000/product/'+this.products._id)
           .then( res => {
               console.log(res);
               this.$router.go(this.$router.currentRoute)
           })
           .catch( err => {
               console.log(err);
           })
       },
       async repair(){

       }
   },
   props:{
       products:{
           type: Object,
           default: null
       },
   },
}
</script>

<style scoped>
.imagee{
   width: 100px;
   height: 100px;
}
.delete{
   cursor: pointer;
}
.delete_icon{
   font-size: 17px;
}
.edit{
    font-size: 17px;
}
</style>
<!-- trang chú, trang giới thiệu, giới tính, render category, xóa trong giỏ hàng, thêm dữ liệu sản phẩm cho database, js tính tổng tiền giỏ hàng -->