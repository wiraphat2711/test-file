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
                 <li v-for="user in ksale" :key="user.id">
                 <div class="card" style="width: 18rem;">
        
                <button  class="btn btn-light" >
                <img v-bind:src=user.pic width="250" height="250"><br>
                    {{user.NameThai}}<br>
                    Price: <li id=sci5>{{user.price}}</li> ลดจาก {{user.pricemax}}<br>
                </button>
                    <div class="card-footer">
                        <button class="btn btn-primary" @click="addCart(user)">หยิบลงตะกร้า</button>
                    </div>
                 </div>
                </li>
          </div>
          <div class="card-body" v-if="carts!=0">
          <h4>ตะกร้าสินค้า</h4>
          <hr>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ภาพ</th>
                <th scope="col">ชื่อ</th>
                <th scope="col">ราคา</th>
                <th scope="col">จำนวน</th>
                <th scope="col">ยอดรวม</th>
                <th scope="col">ลบ</th>
              </tr>
            </thead>
            <tbody>
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
              <button @click="removeProduct(product)">ลบ</button>
              </td>
              </tr>
            </tbody>
          </table>
          <li>ยอดชำระเงิน {{total()}} บาท</li>
          <button type="button" class="btn btn-danger" @click="shoppingcart">สั่งซื้อสินค้า</button>
        </div>
      </header>
  </body>
</template>

<script>
import ksale from "@/assets/k_sale.json"
import Router from "vue-router"
const router = new Router({mode: "history",})
export default {
data(){
        return{
            ksale: ksale,
            carts:[],
            clothes:0,
            jeans:0,
            dress:0,
            dress1:0,
            dress2:0,
            dress3:0,
            dress4:0,
            dress5:0,
            dress6:0,
            dress7:0,
        }
    },
methods: {
    shoppingcart(){
        router.push(`/shopping`);
        router.go();
    },
    addCart:function(item){
      if(item.id==1){
        //ซื้อเสื้อ
        this.clothes+=1;
        if(this.clothes<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found = this.findIndex(item);
          this.carts[found].qty+=1;
          this.carts[found].total=this.carts[found].qty * this.carts[found].price;
        }
      }else if(item.id==2){
        //ซื้อกางเกง
        this.jeans+=1;
        if(this.jeans<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found1 = this.findIndex(item);
          this.carts[found1].qty+=1;
          this.carts[found1].total=this.carts[found1].qty * this.carts[found1].price;
        }
      }else if(item.id==3){
        //ซื้อกางเกง
        this.dress3+=1;
        if(this.dress3<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found2 = this.findIndex(item);
          this.carts[found2].qty+=1;
          this.carts[found2].total=this.carts[found2].qty * this.carts[found2].price;
        }
      }else if(item.id==4){
        //ซื้อกางเกง
        this.dress2+=1;
        if(this.dress2<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found3 = this.findIndex(item);
          this.carts[found3].qty+=1;
          this.carts[found3].total=this.carts[found3].qty * this.carts[found3].price;
        }
      }else if(item.id==5){
        //ซื้อกางเกง
        this.dress1+=1;
        if(this.dress1<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found4 = this.findIndex(item);
          this.carts[found4].qty+=1;
          this.carts[found4].total=this.carts[found4].qty * this.carts[found4].price;
        }
      }else if(item.id==6){
        //ซื้อกางเกง
        this.dress4+=1;
        if(this.dress4<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found5 = this.findIndex(item);
          this.carts[found5].qty+=1;
          this.carts[found5].total=this.carts[found5].qty * this.carts[found5].price;
        }
      }else if(item.id==7){
        //ซื้อกางเกง
        this.dress5+=1;
        if(this.dress5<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found6 = this.findIndex(item);
          this.carts[found6].qty+=1;
          this.carts[found6].total=this.carts[found6].qty * this.carts[found6].price;
        }
      }else if(item.id==8){
        //ซื้อกางเกง
        this.dress6+=1;
        if(this.dress6<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found7 = this.findIndex(item);
          this.carts[found7].qty+=1;
          this.carts[found7].total=this.carts[found7].qty * this.carts[found7].price;
        }
      }else if(item.id==9){
        //ซื้อกางเกง
        this.dress7+=1;
        if(this.dress7<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found8 = this.findIndex(item);
          this.carts[found8].qty+=1;
          this.carts[found8].total=this.carts[found8].qty * this.carts[found8].price;
        }
      }
      else {
        //ซื้อกางเกง
        this.dress+=1;
        if(this.dress<=1){
          //ซื้อรอบเดียว
          this.pushData(item)
        }else{
          //รายการเดียว
          var found10 = this.findIndex(item);
          this.carts[found10].qty+=1;
          this.carts[found10].total=this.carts[found10].qty * this.carts[found10].price;
        }
      }
      
    },
      pushData(item){
        this.carts.push({
            id:item.id,
            name:item.NameThai,
            price:item.price,
            image:item.pic,
            qty:1,
            total:item.price
           })   
      },
      findIndex:function(item){
        for(var i = 0;i<this.carts.length;i++){
          if(this.carts[i].id == item.id){
            return i; //ตำแหน่งสินค้าที่ค้นเจอในตะกร้า
          }
        }
        return -1;
      },
      minusQty:function(product){
         product.qty-=1;
         if(product.qty<=1){
           product.qty=1
         }
         product.total=product.price*product.qty;
      },
      plusQty:function(product){
         product.qty+=1;
         product.total=product.price*product.qty;
      },
      removeProduct(product){
        if(confirm("คุณต้องการลบหรือไม่ ?")){
          var index=this.carts.indexOf(product);
          this.carts.splice(index,1);
          if(product.id==1){
            this.clothes=0;
          }else{
            this.jeans=0;
          }
        }
      },
       total:function(){
         var sum=0;
         this.carts.forEach(function(item){
           sum+=item.total;
        })
        return sum;
       }
  },
}
</script>

<style>

</style>