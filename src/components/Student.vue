<template>
    <div>
        <form @submit="checkForm">

            <p v-if="conditions.length">
            <b>Please Input your infomation</b>
            <ul>
                <li v-for="error in conditions" :key="error" style="color: red">{{error}}</li>
            </ul>
            </p>

            <input type="text" v-model="id" placeholder="Student Id" style="margin-right:10px">
            <input type="checkbox" id="one" value="one" v-model="gender" placeholder="Male"> Male
            <input type="checkbox" id="two" value="two" v-model="gender" placeholder="Female"> Female
            <br><p></p>
            <input type="text" v-model="fname" placeholder="First Name" style="margin-right:10px" required>
            <input type="text" v-model="lname" placeholder="Last Name" style="margin-right:10px" required>
            <br><p></p>
            <textarea v-model="introduce" placeholder="Introduce youself"></textarea>
            <br>
            <input type="radio" id="one" value="one" v-model="picked"/> จบเเล้ว
            <input type="radio" id="two" value="two" v-model="picked"/> ยังไม่จบ
            
            <select v-model="selected">
                <option value="">Select</option>
                <option 
                v-for="option in options" :key="option" 
                v-bind:value="option.value">
                    {{option.text}}
                </option>
            </select>
            <br>
            <input type="submit" value="Submit">
            <input type="button" @click="go" value="Submit2">
        </form>
    </div>
</template>

<script>
import Router from "vue-router"
const router = new Router({
    mode: "history",
})

export default {
    name: "Student",
    data(){
        return{
            id:null,
            gender:[],
            fname: null,
            lname: null,
            introduce: null,
            picked: null,
            selected: "",
            options: [
                {text: "ชั้นปีที่ 1",value: "1"},
                {text: "ชั้นปีที่ 2",value: "2"},
                {text: "ชั้นปีที่ 3",value: "3"},
                {text: "ชั้นปีที่ 4",value: "4"},
                {text: "มากกว่าชั้นปีที่ 4",value: "5"},
            ],
            conditions:[]
        }
    },
    methods:{
        checkForm(e) {
            if(!this.id){
                this.conditions.push("*Please input your Student Id");
            }
            else{
                router.push(`/page1/${this.id}/${this.fname}/${this.lname}`);
                router.go();
            }
            e.preventDefault();//จุดเเรกที่จะทำ
        },
        go(){
            router.push(`/Page2`);
            router.go();
        }
    }
}
</script>

<style>
    
</style>