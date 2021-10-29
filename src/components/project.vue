<template>
  <body>
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898459237359947777/S__3227650.jpg' " width="80%" height="70%" />
    <header class="container">
  
    <b-row><p></p><br><p></p><br>
      <b-col>
        <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898459240778317864/S__3227654.jpg' " width="100%" height="80%" />
      </b-col>
      <b-col id="sci2">
        <p></p><br> CLOTHE STORAG <br><p></p>เราเป็นร้านค้าออนไลน์ที่บริหารงานโดยบริษัท อินเตอร์มิเดียจำกัด คุณสามารถเลือกช้อปกับเราได้ผ่านทางออนไลน์เเละคุณสามารถติดต่อสอบถามสินค้าเเละบริการอื่นๆของเราได้
      </b-col>
    </b-row>
    
    <div id=sci>
      <h1>สินค้ามาเเรง</h1>
      <b-row>
        <b-col>
          <button class="btn btn-light">
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898806738503991356/b81086edec067f9b.jpg' " width="100%" height="250" />
          </button>
        </b-col>
        <b-col>
          <button class="btn btn-light">
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898806738843734016/-1.jpg' " width="100%" height="250"/>
          </button>
        </b-col>
        <b-col>
          <button class="btn btn-light">
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898806993593171988/10---.jpeg' " width="100%" height="250" />
          </button>
        </b-col>
      </b-row>
    </div><p></p><br><p></p><br><p></p><br>

    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-primary btn-lg">จั๊มสูททันสมัย</button>
      <button type="button" class="btn btn-outline-secondary btn-lg">เสื้อกล้าม & สายเดี่ยว</button>
      <button type="button" class="btn btn-outline-success btn-lg">เสื้อโค้ท & เเจ็คเก็ต</button>
      <button type="button" class="btn btn-outline-danger btn-lg">บอดี้สูทสุดเท่</button>
      <button type="button" class="btn btn-outline-warning btn-lg">ชุดว่ายน้ำ</button>
      <button type="button" class="btn btn-outline-info btn-lg">กระโปรง</button>
      <button type="button" class="btn btn-outline-dark btn-lg">กางเกง</button>
    </div>

    <p></p><br><p></p><br><p></p><br><p></p><br>
    <div class="card-body">
      <h1>BEST SELLER & REVIEW</h1>
      <b-row>
        <b-col>
          <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898475003547357194/5xu1dx.jpg' " width="300" height="400" />
        </b-col>
        <b-col>
          <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898475006873436200/PRD-1aeb5a1776a2fd01bc628f92e4411ce2-5e5f7108ef11b-1583313160.jpg' " width="300" height="400" />
        </b-col>
        <b-col>
          <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/898475009402609685/l84d3t.jpg' " width="300" height="400" />
        </b-col>
      </b-row>
    </div>

    <p></p><br><p></p><br>
    <li v-for="user in users" :key="user.id">
    <!-- <div class="card"> -->
      <div class="card-body">
        <img v-bind:src=user.img width="200" height="200"><br>
        {{user.name}}<br>
        Price: {{user.id}}
      </div>
    <!-- </div> -->
    </li>
    
    </header>
    
</body>
</template>

<script>
import usersData from "../assets/users.json"
import states from "../assets/data.json";
import Router from "vue-router"
const router = new Router({mode: "history",})

export default {
  name: "project",
  data(){
    return{
      users: usersData,
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
  },
  methods: {
    shoppingcart(){
    router.push(`/project`);
    router.go();
    }
  },
};
</script>


<style >
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
#sci{
    color: red;
    text-align:left;
}
#sci2{
    font-size:7mm;
    /* float:right; */
    /* width:640px;
    height:400px; */
    /* border:solid 2px green; */
    text-align:center;
}
#sci3{
  text-align:center;
}
#sci4{
  font-size:7mm;
  text-align:left;
}
#sci5{
  color:red;
  text-align:center;
}
</style>
