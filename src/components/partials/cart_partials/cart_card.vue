<template>
     <tr>
        <th scope="row"></th>
        <td>
            <img class="imagee" :src="products.detail_product[0].image" alt="">
        </td>
        <td>{{ products.detail_product[0].name }}</td>
        <td>{{ products.quantity}}</td>
        <td>{{ toVND(products.total) }}</td>
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
            var cusid = window.localStorage.getItem('id');
            const dataa = {
                cus_id: cusid,
                product_id: this.products.detail_product[0]._id
            }
            console.log(dataa)
            await axios.post('http://localhost:3000/cart/remove', dataa)
            .then( res => {
                console.log(res);
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
</style>
<!-- trang chú, trang giới thiệu, giới tính, render category, xóa trong giỏ hàng, thêm dữ liệu sản phẩm cho database, js tính tổng tiền giỏ hàng -->