<template>
    <hottrongtuancard v-for="product in listproducts" :key="product.id" :products="product"/>
</template>

<script>
import hottrongtuancard from './hottrongtuancard.vue';

export default {
    
    props:{
        listproducts:{
            type: Array,
            default: []
        }
    },
    components:{
        hottrongtuancard
    }
}
</script>

<style scoped>

</style>