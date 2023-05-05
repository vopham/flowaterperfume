<template>
  <div class="container">
    <div class="title_pageproducts">
        <div class="text_title">
          Thông tin tài khoản
        </div>
    </div>
    <div class="container_info">
      <div class="container_avatar">
        <img class="avatar" :src="user.image" alt="">
      </div>
      <div class="container_text_info">
        <div class="username">
          <span>Họ và tên: {{ user.name }}</span>
        </div>
        <div class="username">
          <span>Số điện thoại: {{ user.phone }}</span>
        </div>
        <div class="username">
          <span>Email: {{ user.email }}</span>
        </div>
        <div class="username">
          <span>Địa chỉ: {{ user.address }}</span>
        </div>
      </div>
    </div>
  </div>
  <div style="width: 100%; height: 200px;"></div>
</template>

<script>
export default {
  data(){
    return{
      user:[]
    }
  },
  async mounted(){
    var id = window.localStorage.getItem('id');
    const res = await axios.get('http://localhost:3000/user/'+id)
    this.user = res.data
  }
}
</script>

<style scoped>
.title_pageproducts{
  width: 100%;
  height: 100px;
}
.text_title{
  text-align: center;
  font-size: 50px;
  font-family: 'Josefin_Sans';
  font-weight: 300;
  padding: 14px;
}
.container_info{
  border: 1px solid #aaaa;
  border-radius: 10px;
  
  margin: 0 auto;
  width: 50%;
  height: 600px;
  background-color: rgb(236, 236, 236);
}
.container_avatar{
  width: 100%;
  height: 270px;
  text-align: center;
}
.avatar{
  margin-top: 30px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 5px solid #24232333;
}
.container_text_info{
  margin-left: 40px;
}
.username{
  font-size: 30px;
  font-family: 'Josefin_Sans';
  font-weight: 400;
  padding: 10px;
}
</style>