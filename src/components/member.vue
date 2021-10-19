<template>
  <div class="container w-50 border mb-5">
    <h1 class="pt-2">Blackswan</h1>
    <div class="row pl-5 pr-5">
      <h5>รหัสนิสิต</h5>
      <input
        type="text"
        class="form-control"
        id="inputdata"
        placeholder="รหัสนิสิต"
        aria-label="StudentID"
        aria-describedby="basic-addon1"
        v-model="info.StudentID"
      />
      <h5>ชื่อ</h5>
      <input
        type="text"
        class="form-control"
        id="inputdata"
        placeholder="ชื่อ"
        aria-label="FirstName"
        aria-describedby="basic-addon1"
        v-model="info.FirstName"
      />
      <h5>นามสกุล</h5>
      <input
        type="text"
        class="form-control"
        id="inputdata"
        placeholder="นามสกุล"
        aria-label="LastName"
        aria-describedby="basic-addon1"
        v-model="info.LastName"
      />
      <h5>ชื่อเล่น</h5>
      <input
        type="text"
        class="form-control"
        id="inputdata"
        placeholder="ชื่อเล่น"
        aria-label="Nickname"
        aria-describedby="basic-addon1"
        v-model="info.Nickname"
      />
      <h5>สาขา</h5>
      <input
        type="text"
        class="form-control"
        id="inputdata"
        placeholder="สาขา"
        aria-label="Faculty"
        aria-describedby="basic-addon1"
        v-model="info.Faculty"
      />
      <h5>เพศ</h5>
    </div>
    <div class="row pl-5 pr-5">
      <div
        class="form-check mb-3"
        v-for="(data, index) in gender"
        v-bind:key="index"
      >
        <input
          type="radio"
          class="btn-check mr-2"
          :id="index"
          autocomplete="off"
          v-model="info.Gender"
          :value="data.value"
        />
        <label class="btn btn-outline-success" :for="index">
          {{ data.label }}
        </label>
      </div>
      <button
        type="button"
        class="btn btn-success btn-lg btn-block"
        v-on:click="save"
      >
        Save
      </button>
    </div>
    <div :hidden="show" class="pt-3">
      <b-table striped hover :items="studentInfo"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      info: {
        StudentID: null,
        FirstName: null,
        LastName: null,
        Nickname: null,
        Faculty: null,
        Gender: null,
      },
      gender: [
        {
          label: "ชาย",
          value: "Male",
        },
        {
          label: "หญิง",
          value: "Female",
        },
      ],
      studentInfo: [],
    };
  },
  methods: {
    save() {
      this.studentInfo.push(this.info);
      this.info = {
        StudentID: null,
        FirstName: null,
        LastName: null,
        Nickname: null,
        Faculty: null,
        Gender: null,
      };
    },
  },
};
</script>

<style>
  #inputdata {
    padding: 10px;
    font-size: 15px;
  }

  h5 {
    color: #5b5b5b;
  }
</style>