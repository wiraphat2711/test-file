<template>
  <body>
      <header class="container">
        <h2 align="center">คำนวณราคาสินค้า</h2>
        <hr>
        
        <div>
          <li v-for="user in products" :key="user.id">
          <div class="card">
          <div class="card-body">
          <img v-bind:src=user.image width="200" height="200"><br>
          <h4 class="card-title">{{user.name}}</h4>
          <p class="card-text">ราคา {{user.price}} บาท</p>
          </div>
                  <div class="card-footer">
                          <input type="checkbox" class="form-control" @change="selected(user)">
                    </div>
          </div>
          </li>
          <h1>ยอดชำระเงิน {{total()}} บาท </h1>
        </div>
      </header>
  </body>
</template>

<script>
export default {
  name: 'shopping',
  data(){
    return{
      products:[
        {
          id:1,
          name:"เด็กผู้ชาย เสื้อสวมหัวพิมพ์ลายรูปรถและกราฟฟิกตัวอักษร",
          price:190,
          image:"https://cdn.discordapp.com/attachments/706037060091248694/903558609361842207/Rectangle_65_1.jpg",
          active:false
        },
        {
          id:2,
          name:"เดรสไหล่ข้างเดียวตัดเว้าผูกเชือกผ่าสูง",
          price:430,
          image:"https://cdn.discordapp.com/attachments/706037060091248694/903558610527846420/Rectangle_1012.jpg",
          active:false
        },
        {
          id:3,
          name:"เด็กหญิง ครอส ลายลูกฟูกเรียบง่าย ไม่เป็นทางการ",
          price:170,
          image:"https://cdn.discordapp.com/attachments/706037060091248694/903566391456727100/image_34.jpg",
          active:false
        }
      ]
    }
  },
  methods:{
    selected:function(item){
        item.active = !item.active
    },
    total:function(){
        var sum=0;
        this.products.forEach(function(item){
              if(item.active){
                  sum+=item.price; 
              }
        });
        return sum;
    }
  }
}
</script>

<style>

</style>