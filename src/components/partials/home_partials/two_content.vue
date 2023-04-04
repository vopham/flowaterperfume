<script>
import title_content from '../home_partials/title_content.vue';
    export default{
        data(){
          return{
            title: 'Thương hiệu'
          }
        },
        components:{
            title_content
        }
    }
</script>

<template>
    <title_content :title="title"/>
</template>

<style scoped>

</style>