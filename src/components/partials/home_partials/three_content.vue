<script>
import list_threecontent from './list_threecontent.vue';
export default {
  async mounted(){
    const res = await axios.get('http://localhost:3000/category/getall')
    this.listcategory = res.data
  },

    data(){
      return {
        listcategory:[],
      }
    },
    props:{

    },
    components:{
      list_threecontent
    }
}
</script>

<template>
  <list_threecontent :listcategory="listcategory"/>
</template>

<style scoped>

</style>