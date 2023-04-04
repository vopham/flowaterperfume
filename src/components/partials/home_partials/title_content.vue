<script>

    export default{
        props:{
            title: String
        }
    }

</script>

<template>
    <div class="container_two_content">
        <section class="services">
            <div class="content">
                <div class="box">
                    <div class="inner">
                        <div class="title_content">
                            {{ title }}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
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
    width: 300px;
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
/* end */
</style>