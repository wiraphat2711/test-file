<template>
  <div class="register">
      <h1> สมัครสมาชิก </h1>
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
          <!-- เงื่อนไข -->
          **รหัสผ่านต้องประกอบด้วยตัวอักษร 6 ตัว ประกอบไปด้วยตัวพิมพ์ใหญ่, พิมพ์เล็ก และตัวเลข
          <br>
          <!-- Confirm Password -->
          <b> Confirm Password: </b>
          <input type="text" v-model = "conpassword" placeholder="Password" style = "margin-right : 10 px" required>
          <br>
          <!-- Submit -->
          <input type= "submit" value= "สมัครสมาชิก">
          <br>
          --------------------------------หรือ---------------------------------
          <br>
          <!-- Register with Facebook -->
          <button type="button" class="btn btn-primary">สมัครสมาชิกด้วย Facebook</button> <!-- ยังไปได้เราจ์ไปที่ faecbook -->
          <button type="button" class="btn btn-link">เข้าสู่ระบบ</button> <!-- ยังไปได้เราจ์ไปที่หน้า login -->

            
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
            conpassword : null,
        }
    },
    methods: {
        checkform(e) {
            // ใช้ตรวจรหัสกับรหัสที่ยืนยัน
            if(this.password != this.conpassword)
            {
                this.conditions.push("Your Password is not correct !!");
            }
            else 
            {
                // ของมูลที่ส่งไปมี Username กับ Password
                router.push(`/project/${this.username}/${this.password}`);
                router.go();
            }
            e.preventDefault();
        },
    },
}
</script>