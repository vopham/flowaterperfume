<template>
    <card_products v-for="product in listproducts" :key="product.id" :products="product"/>
</template>

<script>
import card_products from './card_products.vue';

export default {
    props:{
        listproducts:{
            type: Array,
            default: []
        }
    },
    components:{
        card_products
    }
}
</script>

<style scoped>

</style>