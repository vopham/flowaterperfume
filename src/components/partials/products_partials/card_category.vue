<template>
  <div @click="search" class="items"><span class="text_items">{{ category.name }}</span></div>
</template>

<script>

export default {
  data(){
    return {
      listsearch2:[],
      check2: ''
    }
  },
  props:{
    category:{
      type: Object,
      default: null
    }
  },
  methods:{
    async search(){
          const res = await axios.get('http://localhost:3000/category/'+this.category.name)
            this.listsearch2 = res.data
            this.check2 = true;
            console.log(this.check2)
            console.log(this.listsearch2)
      },
  }
}
</script>

<style scoped>
.items{
height: 50px;
text-align: center;
}
.items:hover{
  transition: 0.5s;
  background-color: #e5eaeb;
  cursor: pointer;
}
.text_items{
  position: relative;
  top: 10px;
  font-family: 'Josefin_Sans';
  font-size: 22px;
}
</style>