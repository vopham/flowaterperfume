<script>
    export default{
        name: 'header_web',
        data(){
            return{
                avatar: '',
                isLogged: localStorage.getItem('token') ? true: false
            }
        }, 
        async created(){
            var img = window.localStorage.getItem('image');
            this.avatar = img;
        },
        methods:{
            async logout(){
                localStorage.removeItem('token');
                localStorage.removeItem('admin');
                localStorage.removeItem('name');
                localStorage.removeItem('image');
                window.location.href = '/login';
            },
        },
        components:{
        }
    }
</script>

<template>
  <div class="header_container mt-2 mb-2">
        <div class="container text-center">
            <div class="row">
                <div class="col-sm-8">
                    <div class="header_nav">
                        <div class="col-sm-3">
                            <router-link to="/">
                                <div class="water">
                                    <h3>flow
                                        <div class="img_logo">
                                            <img class="logo" src="/public/img/logo.png" alt="">
                                        </div>
                                        ter
                                    </h3>
                                    <h3>flow
                                        <div class="img_logo">
                                            <img class="logo" src="/public/img/logo.png" alt="">
                                        </div>
                                        ter
                                    </h3>
                                </div>
                            </router-link>

                        </div>
                        <nav class="col-sm-9">
                            <ul class="nav justify-content-flex-start margin_20px">
                                <li class="nav-item navhover">
                                    <router-link class="nav-link" to="/">
                                        <section class="services">
                                            <div class="content">
                                                <div class="box">
                                                    <div class="inner">
                                                        <div class="nav_text">Trang chủ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/products">
                                        <section class="services">
                                            <div class="content">
                                                <div class="box">
                                                    <div class="inner">
                                                        <div class="nav_text">Sản phẩm</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/about">
                                        <section class="services">
                                            <div class="content">
                                                <div class="box">
                                                    <div class="inner">
                                                        <div class="nav_text">Giới thiệu</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="header_login margin_20px">
                        <ul class="header_justify">
                            <li class="header_login_item">
                            </li>
                            <li class="header_login_item">
                                <router-link class="nav-link" to="/cart">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </router-link>
                            </li>
                            <li class="header_login_item">
                                <router-link class="nav-link" to="/login">
                                    <i class="fa-solid fa-user"></i>
                                </router-link>
                            </li>
                            <li class="header_login_item">
                                <button v-if="isLogged" @click="logout" class="nav-link">
                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                </button>
                            </li>
                            <li class="header_login_avatar">
                               <router-link to="/profile" v-if="isLogged" class="helloavatar"><img class="avatar" :src="avatar" alt=""></router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<!-- style -->
<style scoped>

  .header_container{
    height: 70px;
    border-bottom: solid #e3e3e3 1px;
}
.header_nav{
    display: flex;
}
.helloavatar{
    width: 40px;
}
.avatar{
    width: 35px;
    border-radius: 40px;
    height: 35px; 
}
.header_login_avatar{
    position: relative;
    bottom: 3px;
    list-style: none;
    margin: 0 30px;
}
.nav_text{
    font-family: 'Josefin_Sans';
    font-size: 1.3rem;
    font-weight: 300;
    color: #3c3c3c;
}
/* navhover */
.services .content .box .inner{
	padding: 4px 13px;
	text-align: center;
	position: relative;
}

.services .content .box .inner::before{
	content: '';
	position: absolute;
	left:0;
	bottom:0;
	width:0;
	box-sizing: border-box;
	height: 0;
	border-bottom:1.5px solid transparent;

	transition: all .8s ease;
}
.services .content .box .inner::after{
	content: '';
	position: absolute;
	right:0;
	top:0;
	width:0;
	box-sizing: border-box;
	height:0;
	border-top: 1.5px solid transparent;
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
/* end */


.logo{
    height: 35px;
    width: 30px;
}
.margin_20px{
    margin-top: 16px;
}

.header_justify{
    display: flex;
    justify-content: flex-start;
    padding: 10px;
}
.header_login_item{
    list-style: none;
    margin: 0 30px;
}

/* hieu ung flowater */
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

.water {
    left: 82px;
    top: 39px;
	position: relative;
}

.water h3 {
    display: flex;
    font-family: 'Josefin_Sans';
	color: #fff;
	font-size: 2.5em;
	position: absolute;
	transform: translate(-50%, -50%);
}

.water h3:nth-child(1) {
	color: transparent;
	-webkit-text-stroke: 2px #1c1c1c;
}

.water h3:nth-child(2) {
	color: #0b0a0c;
	animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
	0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
	}
}
/* end */
/* search */


</style>
