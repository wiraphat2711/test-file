<template>
  <div>
        <h5>เดอะเเบก</h5>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">StudentID</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.EmployeeID">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Firstname</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.firstName">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Lastname</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.lastName">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Nickname</span>
            <input type="text" class="form-control" aria-label="Sizing example input" v-model="info.nickName">
        </div>

        <div v-for="(data, index) in gender" v-bind:key="index">
            <input type="radio" class="btn-check" name="options" :id="index" autocomplete="off" v-model="info.gender" :value="data.value">
            <label class="btn btn-outline-primary" :for="index">{{data.lable}}</label>
            <p></p>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">TimeIn</span>
            <b-form-timepicker v-model="info.timeIn" locale="en"></b-form-timepicker>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">TimeOut</span>
            <b-form-timepicker v-model="info.timeOut" locale="en"></b-form-timepicker>
        </div>

        <button type="button" class="btn btn-secondary" @click="save">Save</button>

        <div :hidden="!show" v-for="(data,index) in employeeInfo" :key="index">
            <span>Employee ID :{{data.EmployeeID}}</span>
            <span>Nickname :{{data.nickName}}</span>
            <span>First Name :{{data.firstName}}</span>
            <span>Last Name :{{data.lastName}}</span>
            <span>Gender :{{data.gender}}</span>
            <span>Time : {{data.timeIn}} = {{data.timeOut}}</span>
            <span>Active : 
                <span v-if="data.active" v-bind:style="{color : 'green'}">Active</span>
                <span v-else v-bind:style="{color : 'red'}">Non Active</span>
            </span>
        </div> 

        <div :hidden="!show">
            <b-table striped hover :items="employeeInfo"></b-table>
        </div>

    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: "workshop4",
    data(){
        return{
            info :{
                EmployeeID : null,
                firstName : null,
                lastName : null,
                gender : null,
                nickName : null,
                timeIn : null,
                timeOut : null,
                active : false
            },
            show : false,
            gender:[
                {
                lable:'Male',
                value:'M'
                },
                {
                lable:'Female',
                value:'F'
                }
            ],
            employeeInfo : []
        }
    },
    methods:{
        save(){
            this.employeeInfo.push(this.info);
            this.checkActiveTime();
            this.show = true;
            this.info = {
                EmployeeID : null,
                firstName : null,
                lastName : null,
                gender : null,
                nickName : null,
                timeIn : null,
                timeOut : null,
                active : false
            };
        },
        checkActiveTime(){
            const today = new Date();
            console.log(today)
            const time = moment(today, 'HH:mm');
            if(moment(this.info.timeIn,'HH:mm').isBefore(time) && 
            moment(time).isBefore(moment(this.info.timeOut,'HH:mm'))){
                this.info.active = true;
            }else{
                this.info.active = false;
            }
        }
    }
}
</script>

<style>

</style>