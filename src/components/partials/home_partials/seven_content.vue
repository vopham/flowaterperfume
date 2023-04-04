<script>

</script>

<template>
    <div class="container_two_content">
        <section class="services">
            <div class="content">
                <div class="box">
                    <div class="inner">
                        <div class="title_content">
                            Nước hoa theo giới tính
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
   <div class="seven_container">
      <div class="card-wrapper">
            <div class="card profile-two">  
            <div class="card-image profile-img--two">
               <img src="../../../../public/img/male.jpg" alt="profile two">
            </div>
            <div class="details">
               <h2>Nước hoa nam</h2>
            </div>
         </div>
      </div>
      <div class="card-wrapper-2">
            <div class="card profile-two">  
            <div class="card-image profile-img--two">
               <img src="../../../../public/img/female.jpg" alt="profile two">
            </div>
            <div class="details">
               <h2>Nước hoa nữ</h2>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>

.seven_container {
   background-color: #eaeaeac4;
  font-family: 'Josefin_Sans';
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
}

.card-wrapper {
  margin-top: 150px;
  width: 600px;
  height: 400px;
  position: relative;
}
.card-wrapper-2 {
  margin-top: 50px;
  width: 600px;
  height: 400px;
  position: relative;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 400px;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: 0.5s;
  

}

.card:hover .card-image {
  transform: translateY(-100px);
  transition: all .9s;
}







.card:hover li:nth-child(1) a {
    transition-delay: 0.1s;
}
.card:hover li:nth-child(2) a {
  transition-delay: 0.2s;
}
.card:hover li:nth-child(3) a {
  transition-delay: 0.3s;
}
.card:hover li:nth-child(4) a {
  transition-delay: 0.4s;
}



.details {
   text-align: center;
  position: absolute;
  bottom: -120px;
  left: 0;
  opacity: 0;
  background: #ffffff7a;
  width: 100%;
  height: 80px;
  z-index: 3;
  padding: 10px;
  transition: .4s;
}

.profile-two .social-icons li a {
  border-radius: 50%;
}

.card:hover .profile-img--two {
  transform: rotateY(180deg);
}

.card:hover .details {
  bottom: 0;
  left: 0;
  transition-delay: 0.5s;
  opacity: 1;
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
    width: 500px;
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