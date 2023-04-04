<script>
import title_content from '../home_partials/title_content.vue';
import cart_product from './cart_product.vue';
export default {
  data (){
    return {
      price: '200.000',
      title: 'Hot trong tuần'
    }
  },
   components:{
    cart_product,
    title_content
   }
  }
</script>

<template>
<div class="four_container">
    <title_content :title="title"/>

    <div class="row">
        <div class="col-3">
          <cart_product :price_product="price"/>
        </div>
        <div class="col-3">
          <cart_product/>
        </div>
        <div class="col-3">
          <cart_product/>
        </div>
        <div class="col-3">
          <cart_product/>
        </div>
        
    </div>
</div>
</template>

<style scoped>
.left_content{
    height: 80%;
    width: 80%;
}
.left_content_img{
    height: 100%;
    width: 100%;
}

.container_two_content{
    height: 100px;
    text-align: center;
    padding: 25px;
}
.title_content{
    font-family: 'Josefin_Sans';
    font-size: 40px;
    font-weight: 300;
}

/* hover */
.box{
    display: flex;
    justify-content: center;
}
.services .content .box .inner{
	position: relative;
    width: 270px;
}

.services .content .box .inner::before{
	content: '';
	position: absolute;
	left:0;
	bottom:0;
	width:0;
	box-sizing: border-box;
	height: 0;
	border-bottom: 2px solid transparent;

	transition: all .8s ease;
}
.services .content .box:hover .inner::after,
.services .content .box:hover .inner::before{
   border-color: #7f7f7f;
   width: 100%;
   height: 100%;
}
.services .content .box .inner .nav_text{
	transition: color .8s ease;
}
.services .content .box:hover .inner .nav_text{
	color:#3c3c3c;
}

</style>