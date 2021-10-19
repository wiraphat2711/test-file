<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Home</h1>
    <!-- <form> -->
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Student ID</label>
        <input type="text" class="form-control" id="studentid"
          placeholder="Student ID" v-model="infoData.studentID"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Firstname</label>
        <input type="text" class="form-control" id="firstname"
          placeholder="Firstname" v-model="infoData.firstName"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Lastname</label>
        <input type="text" class="form-control" id="lastname"
          placeholder="Lastname" v-model="infoData.lastName"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Level</label>
        <input type="text" class="form-control" id="level"
          placeholder="Level" v-model="infoData.level"/>
      </div>
      <button type="submit" class="btn btn-primary" @click="addUser">Add</button>
    <!-- </form> -->
    <b-table striped hover :items="users"></b-table>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      infoData:{
        studentID : null,
        firstName : null,
        lastName : null,
        level : null
      }
    }
  },
  methods: {
    addUser(){
      // this.$store.dispatch('setcurrentUser',this.id);
      this.$store.commit('setStudentData',this.infoData);
    }
  },
  computed:{
    users(){
      return this.$store.getters.getUser;
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
