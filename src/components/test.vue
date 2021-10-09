<template>
  <div id="test" :class="color">
    v-model
    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">user</span>
        <input type="text" class="form-control" aria-label="Sizing example input" v-model="userName">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">password</span>
        <input type="text" class="form-control" aria-label="Sizing example input" v-model="userPass">
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Color</span>
        <input type="text" class="form-control" aria-label="Sizing example input" v-model="userColor">
    </div>    

        shown: <br>
        user: {{userName}}<br>
        password: {{userPass}}<br>
        color: {{userColor}}
        <div v-bind:style="{'background-color':userColor}">This is colorbox</div>
    

    <div class="card">
        <div class="class-header">
            ชื่อ : {{myInfo.myname}}
            <button type="button" class="btn btn-secondary" @click="myShownInfo">{{labelBotton}}</button>
        </div>
        <div class="class-body" :hidden="!hideShown">
            <p>ชื่อเล่น: {{myInfo.mynickname}}</p>
            หรัสนิสิต: {{myInfo.mystudentid}}
        </div>
    </div>

    v-on
    v-bind
    <button type="button" class="btn btn-primary" v-on:click="alertMsg">click</button>
    <button type="button" class="btn btn-secondary" @click="alertMsg2('D','F',$event)">click</button>
    <button type="button" class="btn btn-success" @dblclick="myname">click</button>

      <p>HelloWorld</p>
      <img v-bind:src=url
      width="50%" height="50%"/>
      <img :src=url
      width="50%" height="50%"/>
      <p>fName: {{fName}}</p>

      <span/> celsius: {{celsius}}
      <span/> fahrenheit: {{fahrenheit}}
      <p>{{shown}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            fName: "booncchote",
            imgName: "aespa",
            url:"https://w2c2p4b2.stackpathcdn.com/wp-content/uploads/2020/12/aespa-mubank-debut.jpg",
            color: "tmp2",
            celsius : 30,
            dataPumu: ["หัว","ก้อย"],
            text: "clickkkk",

            myInfo:{
                myname: "wiraphat",
                mynickname: "pai",
                mystudentid: 6130203543
                },
            hideShown : true,

            userName: null,
            userPass: null,
            userColor: null
            }
        },
    computed:{
        fahrenheit(){
            let result = this.celsius * 1.8 + 32 ;
            return result;
        },
        random(){
            return Math.random() > 0.5 ? 1 : 0;
        },
        shown(){
            return this.dataPumu[this.random];
        },
        labelBotton(){
            return this.hideShown ? "Hide" : "Shown";//ใช่:ไม่ใช่
        }
    },
    methods:{
        alertMsg(){
            alert('hello, ' + this.fName)
        },
        alertMsg2(p1,p2,e){
            alert(`You ${e.type} the button at ${e.clientX}, ${e.clientY}`);
            alert(`parameter ${p1} , ${p2}`)
        },
        myname(){
            console.log('wiraphat ainaurai')
        },
        myShownInfo(){
            this.hideShown = !this.hideShown;//ค่าตรงข้าม
        }
    }
};
</script>

<style>
    .tmp{
        /* class="tmp" วันเว*/
        background-color:aqua;
        color: springgreen;
        font-size: 7em;
    }
    .tmp2{
        /* :class="color" ทูเว*/
        background-color: tomato;
        color: springgreen;
        font-size: 5em;
    }
    .card{
        /* :class="color" ทูเว*/
        background-color: black;
        color: springgreen;
    }
</style>