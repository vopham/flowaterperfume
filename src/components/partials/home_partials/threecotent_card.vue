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

<template>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" :src="category.image" alt=""><span class="name">{{ category.name }}</span></div>
    </div>
</template>

<style scoped>
.three_item{
    height: 290px;
    margin-top: 35px;
    margin-left: 28px;
}
  
  .profile {
    position: relative;
    transition: all 0.3s;
  }
  
  .profile:hover {
    transform: translateY(25px);
  }
  
  .profile img {
    width: 240px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #f7f7f7;
    filter: drop-shadow(3px 0 3px rgba(0, 0, 0, 0.1));
    cursor: pointer;
  }

  .profile:not(:first-child) img {
    margin-left: -20px;
  }
  
  .profile .name {
    position: absolute;
    background-color: #2a2a2a;
    color: #fff;
    font-family: "Bebas Neue", cursive;
    padding: 10px 30px;
    border-radius: 100px;
    bottom: -90px; left: 44%;
    white-space: nowrap;
    transform: translate(-50%, -50px);
    letter-spacing: 1px;
    font-size: 20px;
    opacity: 0;
    transition: all 0.3s;
  }
  
  .profile .name::before {
    content: "";
    position: absolute;
    width: 15px; height: 15px;
    background-color: #2a2a2a;
    top: 0; left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  
  .profile img:hover + .name {
    opacity: 1;
    transform: translateX(-50%);
    box-shadow: 0 10px 20px rgba(86, 86, 198, 0.3);
  }

</style>