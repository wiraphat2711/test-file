<template>
  <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light " >
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
      <header  class="container">
          <div id=sci5>
              <p></p><br>
                <li v-for="user in clothes" :key="user.NameThai">
                 <div class="card" style="width: 18rem;">
            <div class="card-body">
                <img v-bind:src=user.pic width="250" height="250"><br>
                    {{user.NameThai}}<br>
                    Price: {{user.price}}
            </div>
                 </div>
                </li>
          </div>
      </header>
  </body>
</template>

<script>
import wclothes from "@/assets/wclothes.json"
export default {
    name:"womanclothes",
    data(){
        return{
            clothes: wclothes
        }
    },
}
</script>

<style>

</style>