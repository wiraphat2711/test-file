<template>
  <header class="container">
      
       <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="..." width="700px" height="300px">
 <h2 align="center">แสดงความคิดเห็นของคุณที่นี่</h2>
<div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">comment</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


  </div>


<button class="btn btn-danger" @click="save(product)">ยืนยัน</button>


 </header>



</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
</style>
