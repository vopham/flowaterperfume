<script>

$(document).ready(function () {
var count = 0;

$(".tarot-card").click(function() {
  var card = $(this);
  if(count < 4) {

   $(this).removeClass("top").addClass("bottom");
    
    count++;
  }
  if(count == 4) {
   $("div").removeClass("bottom");
    
    count = 0;
  }
  shuffle(card);
});
});

function shuffle(card) {
    TweenLite.fromTo(
        card, 
        0.6, 
        {
        x:160, 
        y:-15, 
        ease: Expo.easeOut}, 
        {
        x:0,
        y:0,
        ease: Expo.easeIn});
};

    export default{
        name: 'five_content'
    }
</script>

<template>
    <v-container class="container_five">
    <v-row no-gutters>
      <v-col order="last">
        <v-sheet class="pa-2 ma-2">
          <div class="first_sheet">
            <div class="five_img"><img class="imgg" src="https://dcat.vn/wp-content/uploads/2020/11/nuoc-hoa-nam-gucci-guilty-intense-pour-homme-edt-90ml-3.jpg"></div>
          </div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <div class="second_sheet">
                <div class="root">
                    <article class="content">
                            <div class="row">
                                <div class="col-5">
                                    <div class="container_title">
                                        <div class="title">Collections</div>
                                        <p>Smooth hover effect achieved by using variable fonts.</p>
                                        <p>Write your own words to try it out.</p>
                                    </div>
                                </div>
                                <div class="col-7">
                                    
                                </div>
                            </div>



                            <!-- <div class="containerrr">
                               
                                <div class="tarot-card shuffle">
                                <img class="img2" src="https://cdn.pixabay.com/photo/2021/02/15/07/52/hermit-6016941_960_720.jpg">
                                </div>

                               
                                <div class="tarot-card shuffle">
                                <img class="img2" src="https://cdn.pixabay.com/photo/2021/02/15/07/42/temperance-6016917_960_720.jpg">
                                </div>

                           
                                <div class="tarot-card shuffle">
                                <img class="img2" src="https://cdn.pixabay.com/photo/2021/02/15/07/52/hanged-man-6016939_960_720.jpg">
                                </div>

                               
                                <div class="tarot-card shuffle">
                                <img class="img2" src="https://cdn.pixabay.com/photo/2021/02/15/07/53/hierophant-6016942_960_720.jpg">
                                </div>
                            </div> -->
                    </article>
                </div>
            </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.container_five{
    margin-top: 20px;
    height: 600px;
    /* background-color: blueviolet; */
}
.first_sheet{
    height: 500px;
    width: 360px;
}
/* first */
.five_img{
    height: 500px;
    width: 360px;
  --b: 5px; /* border thickness */
  --c: #0000 25%,#8f8f8f 0; /* define the color here */
  padding: 10px;
  background:
    conic-gradient(from 90deg  at top    var(--b) left  var(--b),var(--c)) 0    0,
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--c)) 100% 0,
    conic-gradient(from 0deg   at bottom var(--b) left  var(--b),var(--c)) 0    100%,
    conic-gradient(from -90deg at bottom var(--b) right var(--b),var(--c)) 100% 100%;
  background-size: 50px 50px; /* adjust border length here */
  background-repeat: no-repeat;
  transition: .6s;
  cursor: pointer;
}

.five_img:hover {
  background-size: 51% 51%;
}
.imgg{
    height: 97%;
    width: 97%;
    margin: 5px;
}
.imgg:hover{
    transform: scale(0.9);
    transition-timing-function: ease-in;
    transition-duration: 0.5s;

}
/* second */

/* .second_sheet {
    background-image: linear-gradient(122deg, #8457f6 0%, #9cd7ff 100%);
} */
.root {
    display: flex;
    height: 500px;
    width: 740px;
    align-items: center;
    filter: drop-shadow(0 0 6px #a8a8a8);
}

.content {
    position: relative;
    margin: auto;
    height: 500px;
    width: 740px;
    border-radius: 20px;
    background-color: #ffffff;
    color: #363c5f;
    padding: 40px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    clip-path: polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%);
}

.content::after {
    content: '';
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    background-color: #e8e6e6;
    top: 0;
    right: 0;
    border-bottom-left-radius: 20px;
}




/* zz */
/* *,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #000;
}

.container {
  width: 640px;
  height: 300px;
  margin: auto;
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  overflow-x: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform: scale(.9);
}

.img2 {
  width: 100%;
  height:100%;
    margin: auto;
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;

}

.tarot-card {
  width: 100px;
  height: 200px;
  margin: auto;
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  box-shadow: 0px 2px 30px #000;
  cursor: pointer;
    border-radius: 10px;
  border: .3em solid #fff;
  z-index: 100;
  background-color: #fff;
}

.tarot-card:nth-child(1) {
  transform: rotate(-3deg);
}

.tarot-card:nth-child(2) {
  transform: rotate(4deg);
}

.tarot-card:nth-child(3) {
  transform: rotate(10deg);
}

.tarot-card:nth-child(4) {
  transform: rotate(4deg);
}

.top {
  z-index: 150;
}

.bottom{
  z-index: 50;
} */


/* zz */


.container_title {
  /* background-color: #111; */
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 40px;
  text-transform: uppercase;
  font-family: 'Josefin_Sans', serif;
  letter-spacing: -3px;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-bottom: 0.8rem;
  color: rgb(38, 38, 37);
  outline: none;
  text-align: center;
}

.title:hover {
  font-variation-settings: "wght" 582; 
  letter-spacing: 1px;
}

p {
  font-size: 1.2em;
  line-height: 150%;
  text-align: center;
  color: rgb(34, 35, 34);
  letter-spacing: .5px;
}

</style>