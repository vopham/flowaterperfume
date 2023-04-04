<template>
        <div class="owl-carousel mt-3 mb-3">
            <threecontent_card v-for="category in listcategory" :key="category.id" :category="category"/>
        </div>    
</template>
<script>
import threecontent_card from './threecotent_card.vue';
$(document).ready(function() {
 
 $(".owl-carousel").owlCarousel({
    loop:true,
    autoPlay: true,
    slideSpeed : 100,
    responsive: true,
    items : 5,
 });

});
export default {
    props:{
        listcategory:{
            type: Array,
            default: []
        }
    },
    components:{
        threecontent_card
    }
}
</script>



<style scoped>

.abc{
    display: flex;
}
</style>