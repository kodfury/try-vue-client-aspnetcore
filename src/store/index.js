import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);
const apiUrl = 'http://localhost:5000/api'

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUser(state, user) {
      state.user = {...user}
    }
  },

  actions: {
    async loginUser({commit}, userDetails) {
      const response = await axios.post(`${apiUrl}/user/login`, userDetails)
      const user = response.data
      localStorage.setItem('user', JSON.stringify(user))
      
      commit('setUser', user)
      return response
    }
  },
  modules: {}
});
