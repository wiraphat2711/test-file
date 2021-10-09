<template>
  <div id="hello">
    <h1>Wiraphat</h1>
    <h4>Tel : 0952520724</h4>
    <h4>ID : 6130203543</h4>
    <h3>name : {{ myName + " ainaurai" }}</h3>
    <h3>postition: {{ postition }}</h3>
  </div>
</template>

<script>
export default {
  //เรียกใช้ที่ไหนก็ได้ส่วนอื่นๆเข้าถึงตัวเเปลได้
  name: "hello", //ตั้งชื่อคอมโพเเนน
  data() {
    //returnค่าไปใช้งานในtemplate
    return {
      myName: "wiraphat",
      tel: "0952520724",
      postition: "student",
    };
  },
};
</script>

<style>
.test {
  font-size: 9 em;
}
#hello {
  background-color: wheat;
  color: green;
}
</style>