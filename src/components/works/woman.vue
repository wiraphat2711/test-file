<template>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light  " >
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1"></span>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/newwoman">สินค้ามาใหม่</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/womanclothes">เสื้อผ้า</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/womansale">สินค้าลดราคา</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/903498943277707304/unknown.png' " width="80%" height="70%" />
    <header class="container">
    <div ID=sci4><p></p><br><p></p><br>
        <h1>#FEATURED COLLECTIONS</h1>
    </div>
    <div>
        <b-row class="card-body">
            <b-col>
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/903504111696224256/unknown.png' " width="350" height="100%" />
            </b-col>
            <b-col id="sci4">
                <p></p><br>
                <h3>SOFT STRETCH LONG SLEEVE PAJAMA DRESS</h3>
                ชุดกระโปรงที่เหมาะสำหรับใส่ในบ้านเเละออกนอกบ้าน
                <h1>720THB</h1>
            </b-col>
        </b-row>
        <b-row class="card-body">
            <b-col>
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/903517001677438996/903540643941466132/unknown.png' " width="350" height="100%" />
            </b-col>
            <b-col id="sci4">
                <p></p><br>
                <h3>SOFT PILE LINED FLEECE V NECK LONG SLEEVE CARDIGAN</h3>
                เสื้อคาร์ดิเเกนผ้าฟลีชที่ให้ความอบอุ่นเเละนุ่มฟู
                <h1>990THB</h1>
            </b-col>
        </b-row>
    </div>
    <div id=sci><p></p><br><p></p><br>
        <h1>Flash sale</h1>
    </div>
    <p></p><br>
    <li v-for="user in FSwomen" :key="user.id">
    <!-- <div class="card"> -->
      <div class="card-body">
        <img v-bind:src=user.pic width="300" height="400"><br>
        {{user.NameThai}}<br>
        Price: {{user.price}}
      </div>
    <!-- </div> -->
    </li>
    <p></p><br>
    </header>
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/903517001677438996/903534007516553216/unknown.png' " width="80%" height="70%" /><p></p><br>
    </body>
</template>

<script>
import FSwomen from "@/assets/fswomen.json"
export default {
data(){
        return{
            FSwomen: FSwomen
        }
    },
}
</script>

<style>

</style>