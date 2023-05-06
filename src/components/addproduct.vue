<template>
  <div class="container">
    <div class="title_pageproducts">
          <div class="text_title">
              Thêm sản phẩm
          </div>
    </div>
    <div class="edit_container">
        <div class="form">
         
        
        <div class="input-container ic1">
          <input v-model="name"  class="input" type="text" placeholder="Tên sản phẩm" />
          <div class="cut"></div>
        </div>
        <div class="input-container ic2">
          <input v-model="category" class="input" type="text" placeholder="Tên thương hiệu" />
          <div class="cut"></div>
        </div>
        <div class="input-container ic2">
          <input v-model="volume" class="input" type="text" placeholder="Dung tích" />
          <div class="cut"></div>
        </div>
        <div class="input-container ic2">
          <input v-model="price" class="input" type="text" placeholder="Giá" />
          <div class="cut"></div>
        </div>
        <div class="input-container ic2">
          <input v-model="sex" class="input" type="text" placeholder="Giới tính (true name, false nữ)" />
          <div class="cut"></div>
        </div>
        <div class="input-container ic2">
          <input v-model="descripsion" class="input" type="text" placeholder="Mô tả:" />
          <div class="cut"></div>
        </div>
        <div class="input-container ic2">
          <input v-model="image" class="input" type="text" placeholder="Hình ảnh (link)" />
          <div class="cut"></div>
        </div>
        <div class="btn_update">
          <button @click="update" type="text" class="submit">Thêm sản phẩm</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      array:[],
    }
  },
  async mounted(){ 
      const ress = await axios.get('http://localhost:3000/product/'+this.$route.params.id)
      this.array = ress.data

  },
  methods:{
    update(){
      
    const data = {
        name: this.name,
        category: this.category,
        volume: this.volume,
        price: this.price,
        sex: this.sex,
        descripsion: this.descripsion,
        image: this.image
    }

    for (let key in data) {
      if (!this[key]) {
        delete data[key];
      }
    }
      axios.post('http://localhost:3000/product/createproduct', data)
            .then( res => {
                console.log(res);
              alert('Thêm thành công')
            })
            .catch( err => {
                console.log(err);
            })
    }
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


body {
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.form {
  margin: 20px auto;
  background-color:#ced3ff;
  border-radius: 20px;
  box-sizing: border-box;
  height: 750px;
  padding: 20px;
  width: 800px;
}

.title {
  color: #2e2d2d;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}
.titlee{
  text-align: center;
}
.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 40px;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #ececec;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #2e2b2b;
  font-size: 18px;
  height: 100%;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #ced3ff;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #ffffff00;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
  color: #ffffff00;
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #ffffff;
}

.input:focus ~ .placeholder {
  color: #ffffff00;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 30px;
  text-align: center;
  width: 25%;
}

.submit:active {
  background-color: #06b;
}
.btn_update{

  width: 100%;
  text-align: center;
}
</style>