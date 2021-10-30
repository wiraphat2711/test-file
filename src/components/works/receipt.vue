<template>
  <header class="container">
      
       <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="..." width="700px" height="300px">
 <h2 align="center">แสดงความคิดเห็นของคุณที่นี่</h2>
<div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="info.email">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">comment</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="info.comment"></textarea>
</div>
<button class="btn btn-danger" @click="save">ยืนยัน</button>
<div :hidden="!show" v-for="(data,index) in employeeInfo" :key="index">
      <b-row><p></p><br><p></p><br>
      <b-col id=sci4>
          <li>Email :<br>{{data.email}}</li>
      </b-col>
      <b-col id="sci4">
        <ln>comment :<br>{{data.comment}}</ln>
      </b-col><hr>
    </b-row>
</div> 


 </header>



</template>

<script>
export default {
  data(){
    return{
      info:{
        email:null,
        comment:null
      },
      show : false,
      employeeInfo:[],
      clothes:0,
      jeans:0
    }
  },
  methods:{
    save(){
            this.employeeInfo.push(this.info);
            this.show = true;
            this.info = {
                email:null,
                comment:null,
                active : false
            };
        },
  }
};
</script>
<style scoped>
</style>
