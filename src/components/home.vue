<script>
    import Carousel_component from './partials/home_partials/carousel.vue';
    import Two_content from './partials/home_partials/two_content.vue';
    import Three_content from './partials/home_partials/three_content.vue';
    import Three_content2 from './partials/home_partials/three_content2.vue';
    import Four_content from './partials/home_partials/four_content.vue';
    import Five_content from './partials/home_partials/five_content.vue';
    import Six_content from './partials/home_partials/six_content.vue';
    import Seven_content from './partials/home_partials/seven_content.vue';
    export default{
    name: 'carousel',
    data () { 
      
    },
    components:{
        Carousel_component,
        Two_content,
        Three_content,
        Three_content2,
        Four_content,
        Five_content,
        Six_content,
        Seven_content
    }
  }
</script>

<template>
    <div class="big_container">
        <div class="one_content">
          <Carousel_component/>
        </div>
        <div class="two_content">  
            <Two_content/>
        </div>
        <div class="three_content">  
            <Three_content2/>
        </div>
        <div class="four_content">  
            <Four_content/>
        </div>
        <div class="five_content">  
            <Five_content/>
        </div>
        <!-- <div class="six_content">  
            <Six_content/>
        </div> -->
        <div class="seven_content">  
            <Seven_content/>
        </div>
    </div>
</template>

<style>


</style>