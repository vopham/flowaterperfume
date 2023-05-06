<template>
    <tr>
       <th scope="row"></th>
       <td>
           <img class="imagee" :src="products.image" alt="">
       </td>
       <td>{{ products.name }}</td>
       <td>{{ products.email }} </td>
       <td>{{ products.address }} </td>
       <td>{{ products.phone }} </td>
       <td>{{ toAdmin(products.admin)}} </td>
       
       <td @click="deletee" class="delete" > <i class="fa-solid fa-trash delete_icon"></i></td>
   </tr>
</template>

<script>
export default {
   methods:{
       toAdmin(x){
        if(x === true){
            return 'Admin'
        }else{
            return 'Khách hàng'
        }
       },
       async deletee(){
           await axios.post('http://localhost:3000/user/'+this.products._id)
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
</style>
<!-- trang chú, trang giới thiệu, giới tính, render category, xóa trong giỏ hàng, thêm dữ liệu sản phẩm cho database, js tính tổng tiền giỏ hàng -->