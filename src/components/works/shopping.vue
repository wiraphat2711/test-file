<template>
  <div id="app">
    <div class="container">
      <p></p><br>
      <h1>อัพโหลดหลักฐานการโอน</h1>
      <hr>
      <div v-if="!image">
      <input type="file" class="from-control" @change="onFileChange" />
      <hr>
      </div>
      <div v-else>
        <img :src="image" class="img-fluid"><hr>
        <boutton class="btn btn-danger" @click="removeImage">Remove</boutton><li></li>
        <button class="btn btn-danger" @click="save">ยืนยัน</button>
      </div>
    </div>
    <tr v-for="product in carts" :key="product.id">
                <td>
                  <img :src="product.image" alt="" width="80px" height="100px">
                </td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>
                  <i class="fa fa-minus qty-minus" @click="minusQty(product)" ></i>
                  {{product.qty}}
                  <i class="fa fa-plus qty-plus" @click="plusQty(product)"></i>
                  </td>
                <td>{{product.total}}</td>
              <td>
              </td>
              </tr>

  </div>
</template>


<script>
import Router from "vue-router"
const router = new Router({mode: "history",})
export default {
  name: "App",
  data() {
    return {
      image: "",
      carts:[]
    };
  },
  methods: {
    onFileChange: function (e) {
      //รับไฟล์เข้ามาทำงาน
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]); //กรองเอาแค่ไฟล์รูปภาพ
    },
    createImage(files) {
      var reader = new FileReader(); //อ่่านไฟล์เข้ามา
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(files); //เซตไปที่ตัวดาต้าอิมเมท
    },
    removeImage(){
      this.image="";
    },
     save(){
        if(confirm("บันทึกรายการสำเร็จ")){
          router.push(`/project`);
          router.go();
        }else{
          router.push(`/project`);
          router.go();
        }
      },
  }
}
</script>

<style>
</style>