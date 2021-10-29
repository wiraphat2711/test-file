<template>
  <div id="app">
    <div class="container">
      <h2 align="center">คำนวณราคาสินค้า</h2>
      <hr />
      <div class="row">
        <div class="col-md-2" v-for="item in products" :key="item.image">
          <div class="card h-50">
            <img :src="item.image" class="card-img-top" />
            <div class="card-body">
              <p class="card-title">{{ item.name }}</p>
              <p class="card-text">ราคา {{ item.price }} บาท</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary" @click="addCart(item)">หยิบลงตะกร้า</button>
            </div>
          </div>
        </div>
        <div class="col-md-8" v-if="carts!=0">
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
          <h4>ยอดชำระเงิน {{total()}} บาท</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      carts:[],
      clothes:0,
      jeans:0,
      dress:0,
      products: [
        {
          id: 1,
          name: "เด็กผู้ชาย เสื้อสวมหัวพิมพ์ลายรูปรถและกราฟฟิกตัวอักษร",
          price: 190,
          image:
            "https://cdn.discordapp.com/attachments/706037060091248694/903558609361842207/Rectangle_65_1.jpg",
          active: false,
        },
        {
          id: 2,
          name: "เดรสไหล่ข้างเดียวตัดเว้าผูกเชือกผ่าสูง",
          price: 430,
          image:
            "https://cdn.discordapp.com/attachments/706037060091248694/903566391456727100/image_34.jpg",
          active: false,
        },
  
      ],
    };
  },
  methods:{
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
      
      }else {
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
      }
      
    },
      pushData(item){
        this.carts.push({
            id:item.id,
            name:item.name,
            price:item.price,
            image:item.image,
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
          var index=this.carts.indexof(product);
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
    }
  }
</script>
<style scoped>
.qty-minus{
  cursor: pointer;
  margin-right: 5px;
}
.qty-plus{
  cursor: pointer;
  margin-left: 5px;
}
</style>