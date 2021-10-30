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
        <boutton class="btn btn-danger" @click="removeImage">Remove</boutton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      image: "",
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
    }
  }
}
</script>

<style>
</style>