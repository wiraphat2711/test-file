<template>
  <div id="app">
    <div id="nav">
      <body style="font-family: 'IBM Plex Sans Thai', sans-serif;">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1"></span>
                <img src="https://cdn.discordapp.com/attachments/792278215900790827/902128709719429150/S__3219461.jpg" alt="" width="60" height="60" class="d-inline-block align-text-top">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/project">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/woman">WOMEN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/men">MEN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/kid">KIDS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/test1">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
      </body>
    </div>
    <h1></h1>
    <router-view/>
    <div id=green>
      <p></p><br>
      <h1>CLOTHES STORAGE</h1><br>
      <h3>{{address}}</h3>
      <h3>{{phone}}</h3>
      <h3>{{mobilephone}}</h3>
      <p></p><br>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      address:"82/34 หมู่ 20 สุธาวี ถนนบางพลีตำหรุ ตำบลบางพลีใหญ่ อำเภอบางพลี จังหวัดสมุทรปราการ 10540",
      phone:" โทร:064 986 4862 (เปิดทุกวัน 9.30 am.-7.30 pm.)",
      mobilephone:"มือถือ: 094 323 7912"
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#green{
  background-color:mediumaquamarine;
  color: azure;
}
</style>
