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
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/706047042723643406/903502231716917319/2b6d5afbab9cec2c.jpg' " width="80%" height="70%" />
    <header class="container">
    <div ID=sci4><p></p><br><p></p><br>
        <h1>#FEATURED COLLECTIONS</h1>
    </div>
    <div>
        <b-row class="card-body">
            <b-col>
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/792278215900790827/903568152259084288/unknown.png' " width="350" height="100%" />
            </b-col>
            <b-col id="sci4">
                <p></p><br>
                <h3>NYLON PARKA</h3>
                เสื้อตัวนอกที่เบาสบาย เเมทช์กับเสื้อผ้าได้ง่าย
                <h1>790THB</h1>
            </b-col>
        </b-row>
        <b-row class="card-body">
            <b-col>
            <img  v-bind:src="'https://cdn.discordapp.com/attachments/792278215900790827/903568526441336832/unknown.png' " width="350" height="100%" />
            </b-col>
            <b-col id="sci4">
                <p></p><br>
                <h3>EASY SHORTS</h3>
                กางเกงขาสั้นทีให้ความรู้สึกเย็นสบายเเละคล่องตัว
                <h1>290THB</h1>
            </b-col>
        </b-row>
    </div>
    <div id=sci><p></p><br><p></p><br>
        <h1>Flash sale</h1>
    </div>
    <p></p><br>
    <li v-for="user in fskid" :key="user.id">
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
    <img  v-bind:src="'https://cdn.discordapp.com/attachments/792278215900790827/903570948492509184/unknown.png' " width="80%" height="70%" /><p></p><br>
    </body>
</template>

<script>
import fskid from "@/assets/fskid.json"
export default {
data(){
        return{
            fskid: fskid
        }
    },
}
</script>

<style>

</style>