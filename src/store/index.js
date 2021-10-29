import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const headers = { Accecpt : "application/json"}
export default new Vuex.Store({
  state: {
    currentUser : [],
    allUsers : [],
    infoStd : [],
    AllinfoStd : [],
  },
  mutations: {
    setStudentData(state, payload) {
      if (state.infoStd.length > 0) {
        state.infoStd.pop();
      }
      state.infoStd.push(payload)
      state.AllinfoStd.push(payload)
      console.log(state.infoStd)
      console.log(state.AllinfoStd)
    },
    setCurrentUser(state,playload){
      if(state.currentUser.length > 0){
        state.currentUser.pop();
      }
      state.currentUser.push(playload)
      state.allUsers.push(playload)
    },
    setCurrentStd(state) {
      if (state.currentUser.length > 0) {
        state.studentUser.pop();
      }
      state.studentUser.push(state.info)
      state.allStudentUsers.push(state.info)
    },
  },
  actions: {
    async setCurrentUser(state,playload){
      const user = await fetch(url+playload,{headers});
      const data = await user.json();
      state.commit('setCurrentUser',data);
    }
  },
  modules:{
    
  },
  getters: {
    getUser : state => state.infoStd,
    getAllUsers : state => state.AllinfoStd,
  }
})
