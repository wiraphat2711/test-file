<template>
    <div>
        <h1>search page</h1>
        <div>
            <b-table :items="studentInfo"></b-table>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "Page1",
    data(){
        return{
            studentInfo: []
        }
    },
    mounted(){
        axios
            .get('https://mocki.io/v1/423b4c07-dc19-4a17-94f8-fd8d2b0484b8')//path serve
            .then( res => { const info = res.data
                console.log('============================');
                console.log(info);
                console.log('============================');
                this.studentInfo = info.filter(info => info.id.includes(this.$route.params.id))
                this.studentInfo = info.filter(info => info.Fname.includes(this.$route.params.Fname))
                this.studentInfo = info.filter(info => info.Lname.includes(this.$route.params.Lname))
            })//includes หาค่าในอเร
    },
}
</script>
<style>
    
</style>