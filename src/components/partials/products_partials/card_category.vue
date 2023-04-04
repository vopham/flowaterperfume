<template>
  <div class="items"><span class="text_items">{{ category.name }}</span></div>
</template>

<script>

export default {
  props:{
    category:{
      type: Object,
      default: null
    }
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