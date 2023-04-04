<template>
    <card_category v-for="category in listcategory" :key="category.id" :category="category"/>
</template>

<script>

import card_category from './card_category.vue';
export default {
    props:{
        listcategory:{
            type: Array,
            default: []
        }
    },
    components:{
       card_category 
    }
}
</script>

<style scoped>

</style>