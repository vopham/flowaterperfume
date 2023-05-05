<template>
    <HintProduct v-for="product in listproducts" :key="product.id" :products="product"/>
</template>

<script>
import HintProduct from '../../partials/detail_partials/hint_product.vue'

export default {
    props:{
        listproducts:{
            type: Array,
            default: []
        }
    },
    components:{
        HintProduct
    }
}
</script>

<style scoped>

</style>