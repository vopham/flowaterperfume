<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },
} );


</script>

<template>
    <div class="container_slide">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
            <SplideSlide>
                <img class="slide" src="/img/back3.png" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img class="slide" src="/img/back2.jpg" alt="Sample 2">
            </SplideSlide>
            <SplideSlide>
                <img class="slide" src="/img/back4.jpg" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img class="slide" src="/img/back5.jpg" alt="Sample 1">
            </SplideSlide>
            <SplideSlide>
                <img class="slide" src="/img/back1.jpg" alt="Sample 1">
            </SplideSlide>
        </Splide>
    </div>
    
</template>

<style scoped>
 .slide{
    height: 600px;
    width: 100%;
 }
</style>