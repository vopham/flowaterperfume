<!-- <template>
  <div class="owl-carousel mt-3 mb-3">
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://gostyle.vn/wp-content/uploads/2020/10/y-nghia-chua-ai-biet-ve-logo-cua-thuong-hieu-dior-1.png" alt=""><span class="name">Dior</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/09/12034818/thiet-ke-logo-nuoc-hoa-pha-cach-001.jpg" alt=""><span class="name">Gucci</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://traffic-edge05.cdn.vncdn.io/cdn-pos/11108a-1936/brand/20200211_zIm7KAmcm7StySvAddLqoFEa.jpg" alt=""><span class="name">Hermes</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://aitvietnam.com/wp-content/uploads/2022/01/logo-cac-thuong-hieu-thoi-trang-noi-tieng-1.png" alt=""><span class="name">Chanel</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://perfume168.com/wp-content/uploads/2018/08/VERSACE.png" alt=""><span class="name">Versace</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://traffic-edge33.cdn.vncdn.io/cdn-pos/11108a-1936/brand/20200211_1HlMcfXKt5ikQiKy7MFkGczq.jpg" alt=""><span class="name">Louis Vuitton</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://www.thietkewebchuanseo.com/images/brand/mau-thiet-ke-logo-nuoc-hoa-2-min.png" alt=""><span class="name">Calvin Kalein</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://perfume168.com/wp-content/uploads/2018/08/GUERLAIN.png" alt=""><span class="name">Guerlain</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://elbeaute.net/ecdata/stores/UKGUR185/image/data/LOGO/giorgio-armani-1-logo-png-transparent.png" alt=""><span class="name">Giorgior Armani</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://perfume168.com/wp-content/uploads/2018/08/Tom-Ford-logo.jpg" alt=""><span class="name">Tom ford</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://theperfumesgallery.com/wp-content/uploads/2023/01/creed-768x768.png" alt=""><span class="name">Creed</span></div>
    </div>
    <div class="three_item">
        <div class="profile"> <img class="content_three_img" src="https://xxivstore.com/wp-content/uploads/2021/07/Nasomatto.png" alt=""><span class="name">Nasomatto</span></div>
    </div>
  </div>
</template> -->
  <template>
  <v-sheet
  class="mx-auto"
  max-width="1400"
  >
    <v-slide-group
      show-arrows
    >
      <v-slide-group-item>
        <div>
           <div class="three_item">
            <div class="profile"> <img class="content_three_img" src="https://gostyle.vn/wp-content/uploads/2020/10/y-nghia-chua-ai-biet-ve-logo-cua-thuong-hieu-dior-1.png" alt=""><span class="name">Dior</span></div>
          </div>
        </div>
      </v-slide-group-item>
      <v-slide-group-item>
        <div>
           <div class="three_item">
            <div class="profile"> <img class="content_three_img" src="https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/09/12034818/thiet-ke-logo-nuoc-hoa-pha-cach-001.jpg" alt=""><span class="name">Gucci</span></div>
          </div>
        </div>
      </v-slide-group-item>
      <v-slide-group-item>
        <div>
           <div class="three_item">
            <div class="profile"> <img class="content_three_img" src="https://www.thietkewebchuanseo.com/images/brand/mau-thiet-ke-logo-nuoc-hoa-2-min.png" alt=""><span class="name">Calvin Kalein</span></div>
          </div>
        </div>
      </v-slide-group-item>
      <v-slide-group-item>
        <div>
           <div class="three_item">
            <div class="profile"> <img class="content_three_img" src="https://aitvietnam.com/wp-content/uploads/2022/01/logo-cac-thuong-hieu-thoi-trang-noi-tieng-1.png" alt=""><span class="name">Chanel</span></div>
          </div>
        </div>
      </v-slide-group-item>
      <v-slide-group-item>
        <div>
           <div class="three_item">
            <div class="profile"> <img class="content_three_img" src="https://traffic-edge05.cdn.vncdn.io/cdn-pos/11108a-1936/brand/20200211_zIm7KAmcm7StySvAddLqoFEa.jpg" alt=""><span class="name">Hermes</span></div>
          </div>
        </div>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>


<script>
export default {

}
</script>

<style>
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