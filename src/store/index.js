import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/"
const headers = { Accecpt : "application/json"}
export default new Vuex.Store({
  state: {
    currentUser : [],
    allUsers : []
  },
  mutations: {
    setCurrentUser(state,playload){
      if(state.currentUser.length > 0){
        state.currentUser.pop();
      }
      state.currentUser.push(playload)
      state.allUsers.push(playload)
    }
  },
  actions: {
    async setcurrentUser(state,playload){
      const user = await fetch(url+playload,{headers});
      const data = await user.json();
      state.commit('setCurrentUser',data);
    }
  },
  modules:{

  },
  getters: {
    getUser : state => state.currentUser,
    getAllUsers : state => state.allUsers,
  }
})
