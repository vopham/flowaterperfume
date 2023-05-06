<template>
    <tr>
       <th scope="row"></th>
       <td>
           <img class="imagee" :src="products.image" alt="">
       </td>
       <td>{{ products.cus_id }}</td>
       <td>{{ products.status }} </td>
       <td>{{ products.totalprice }} </td>  
       <td  ><input v-model="status" type="checkbox"></td> 
       <td class="edit" @click="update">cập nhật</td>  
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

        update(){
        
        const data = {
           status: this.status
        }
            axios.put('http://localhost:3000/bill/'+this.products._id, data)
                .then( res => {
                    console.log(res);
                    alert('Update thành công')
                    this.$router.go(this.$router.currentRoute)
                })
                .catch( err => {
                    console.log(err);
                })
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
    cursor: pointer;
}
</style>

<!-- gửi thêm thông tin khách hàng, sản phẩm vào bill, chỉnh lại trang home -->