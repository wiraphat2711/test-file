<template>
  <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light " >
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1"></span>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/kidnew">สินค้ามาใหม่</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/kidclothes">เสื้อผ้า</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/kidsale">สินค้าลดราคา</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      <header  class="container">
          <div id=sci5>
              <p></p><br>
                <li v-for="user in kclot2" :key="user.id">
                 <div class="card" style="width: 18rem;">
        
                <button  class="btn btn-light" @click="shoppingcart">
                <img v-bind:src=user.pic width="250" height="250"><br>
                    {{user.NameThai}}<br>
                    Price: {{user.price}}<br>
                </button>
                    <div class="card-footer">
                          <input type="checkbox" class="form-control" @change="selected(user)">
                    </div>
                 </div>
                </li>
          </div>
          <div>
              <h1>ยอดชำละเงิน {{total()}} บาท</h1>
          </div>
      </header>
  </body>
</template>

<script>
import Router from "vue-router"
const router = new Router({mode: "history",})

import kclot from "@/assets/k_clothes.json"
export default {
data(){
        return{
            kclot2: kclot,
            pic: "รายละเอียด",
            name: 2,
            employeeInfo : []
        }
    },
methods: {
    shoppingcart(){
        
        // this.num =  this.kclot2.id;
        // this.employeeInfo.push(this.kclot2[this.num]);
        // console.log(this.employeeInfo)
        router.push(`/shopping/${this.pic}`);
        router.go();
    },
    selected:function(item){
        item.active = !item.active
    },
    total:function(){
        var sum=0;
        this.kclot2.forEach(function(item){
              if(item.active){
                  sum+=item.price; 
              }
        });
        return sum;
    }
  },
}
</script>

<style>

</style>