<script>
  import HeaderComponent from './components/partials/header_web.vue';
  import FooterComponent from './components/partials/footer_web.vue';
  export default{
    name: 'app',
    components:{
      HeaderComponent,
      FooterComponent,
    }
  }

</script>

<template>
  <div class="container_web">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent />
  </div>
  
</template>



<!-- style -->
<style scoped>

.container_web{
  min-height:100%;
}


</style>
