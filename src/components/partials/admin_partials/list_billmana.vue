<template>
    <tr>
       <th scope="row"></th>
       <td>{{ products.name_order }}</td>
       <td>{{ products.phone_order }}</td>
       <td>{{ products.address_order }}</td>
       <td><p  v-for="item in products.bill_items" :key="item">{{ item.name_product }}</p></td>
       <td><p  v-for="item in products.bill_items" :key="item"> {{item.quantity  }}</p></td>
       <td>{{ status_order(products.status) }} </td>
       <td>{{ toVND(products.total_price) }} </td>  
       <td  ><input v-model="status" type="checkbox"></td> 
       
       <td><v-btn @click="update">cập nhật</v-btn></td>  
       <td @click="deletee" class="delete" > <i class="fa-solid fa-trash delete_icon"></i></td>
   </tr>
</template>

<script>
export default {
    data(){
        return{
            cart:[],
        }
    },
    methods:{
       toVND(x){
       return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(x)
       },
       status_order(x){
            if(x === true){
                return 'Đã xác nhận'
            }else{
                return 'Đang xác nhận'
            }
       },
       async deletee(){
           await axios.post('http://localhost:3000/bill/'+this.products._id)
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
        },
    },
   props:{
       products:{
           type: Object,
           default: null
       },
       index: Number
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

