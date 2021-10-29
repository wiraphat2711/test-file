<template>
  <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light " >
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1"></span>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/mennew">สินค้ามาใหม่</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/menclothes">เสื้อผ้า</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/mensale">สินค้าลดราคา</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <img  v-bind:src="'https://media.discordapp.net/attachments/886177667404161065/903527333732958228/17a4232ec7b59fc4.jpg?width=889&height=330' " width="80%" height="70%" />
    <header class="container">
    <div ID=sci4><p></p><br><p></p><br>
        <h1>#FEATURED COLLECTIONS</h1>
    </div>
    <div>
        <b-row class="card-body">
            <b-col>
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/792278215900790827/903569474022703104/unknown.png' " width="350" height="100%" />
            </b-col>
            <b-col id="sci4">
                <p></p><br>
                <h3>DAY STRETCH EASY SHORTS</h3>
                กางเกงขาสั้นใส่สบาย ยืดหยุ่น เเละเเห้งไว
                <h1>590THB</h1>
            </b-col>
        </b-row>
        <b-row class="card-body">
            <b-col>
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/792278215900790827/903569548798742538/unknown.png' " width="350" height="100%" />
            </b-col>
            <b-col id="sci4">
                <p></p><br>
                <h3>JERSEY RELAX ANKLE PANTS</h3>
                กางเกงทรงหรวมใส่สบาย ที่เหมาะสำหรับใส่ในบ้านและออกนอกบ้าน
                <h1>590THB</h1>
            </b-col>
        </b-row>
    </div>
    <div id=sci><p></p><br><p></p><br>
        <h1>Flash sale</h1>
    </div>
    <p></p><br>
    <li v-for="user in FSmen" :key="user.id">
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
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/792278215900790827/903570624818085908/unknown.png' " width="80%" height="70%" /><p></p><br>
    </body>
</template>

<script>
import FSmen from "@/assets/fsmen.json"
export default {
data(){
        return{
            FSmen: FSmen
        }
    },
}
</script>

<style>

</style>