<template>
  <body style="font-family: 'IBM Plex Sans Thai', sans-serif;">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">ระบบสารสนเทศศิษย์เก่า</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">หน้าแรก</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">เกี่ยวกับเรา</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">จัดการข้อมูล</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ติดต่อเรา</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">คำถามที่พบบ่อย</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <header class="container">
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898459237359947777/S__3227650.jpg' " width="100%" height="500" /> <br>
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898459240778317864/S__3227654.jpg' " width="50%" height="400" /> 
    </header>
  
  <li v-for="user in users" :key="user.id">
    <div class="card">
      <div class="card-body">
        {{user.name}}
        {{user.id}}
      </div>
  </div>
  </li>

  


  
  <li v-for="option in options" :key="option" v-bind:value="option.value">
    <div class="card">
      <div class="card-body">
      {{option.text}}<br/>
      <img v-bind:src=option.url /><br/>
      ราคา{{option.value}}
      </div>
    </div>
  </li>

ิิิิิิิิิิิิิิิิิิิิิิิิิิิิิิิิ
    <!-- <div>
    <ul>
    <li v-for="name in names" :key="name">{{ name }}</li>
    </ul>
    <ul>
    <li v-for="pic in pics" :key="pic">{{ pic }}</li>
    </ul>
    <d v-for="price in prices" :key="price">{{ price }}</d>
  </div> -->
</body>
  
</template>

<script>
import usersData from "../assets/users.json"
import states from "../assets/data.json";
export default {
  name: "project",
  data(){
    return{
      users: usersData,
      options: [
                {text: "เสื้อ",value: "1000",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHEEjzf2Fg9me_J9muNmOzQ46eck8aRj23A&usqp=CAU%22%7D"},
                {text: "กางเกง",value: "200",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHEEjzf2Fg9me_J9muNmOzQ46eck8aRj23A&usqp=CAU%22%7D"},
                {text: "รองเท้า",value: "30",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqMbjYmbX6lWFqPNMVhtKSFfSG2g1GsoI0g&usqp=CAU%22%7D"},
                {text: "หมวก",value: "40000",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqMbjYmbX6lWFqPNMVhtKSFfSG2g1GsoI0g&usqp=CAU%22%7D"},
            ]
    }
  },
  computed: {
    names() {
      return states.accounts.map(
        (item) => {return item.pic;},
        (item) => {return item.name;}
        )
    },
    pics() {
      return states.accounts.map((item) => {
        return item.pic;
      })
    },
    prices() {
      return states.accounts.map((item) => {
        return item.price;
      })
    },
    ids() {
      return states.accounts.map(
        (item) => {return item.id;}
      )
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
