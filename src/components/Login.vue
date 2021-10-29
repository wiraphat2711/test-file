<template>
  <div class="about">
      <h1> เข้าสู่ระบบ </h1>
      <form @submit = "checkform">


        <ul>
             <li v-for="error in conditions" :key="error" style="color: red">{{ error }}</li>
        </ul>
          <!-- Username -->
          <b> Username: </b> 
          <input type="text" v-model = "username" placeholder="User Name" style = "margin-right : 10 px" required>
          <br>
          <!-- Password -->
          <b> Password: </b>
          <input type="text" v-model = "password" placeholder="Password" style = "margin-right : 10 px" required>
          <br>
          <!-- Login -->
          <input type= "submit" value= "Login">
          <br>
          --------------------------------หรือ---------------------------------
          <br>
          <!-- Login with Facebook -->
          <button type="button" class="btn btn-primary">เข้าสู่ระบบด้วย Facebook</button> <!-- ยังไปได้เราจ์ไปที่ faecbook -->

        </form>

  </div>
</template>

<script>

import Router from "vue-router"

const router = new Router({
    mode: "history",
})

export default {
    name: "User",
    data(){
        return{
            username : null,
            password : null,
        }
    },
    methods: {
        checkform(e) {
            if(!this.username)
            {
                this.conditions.push("Please input your Username !!");
            }
            else if(!this.password)
            {
                this.conditions.push("Please input your Password !!")
            }
            else 
            {
                router.push(`/project/${this.username}/${this.password}`);
                router.go();
            }
            e.preventDefault();
        },
        go(){
            router.push(`/Page2`); 
            router.go();
        }
    },
}
</script>
<style>

</style>