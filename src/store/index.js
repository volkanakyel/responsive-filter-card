import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { getEmploye } from '../services/getEmploye';
export default new Vuex.Store({
  state: {
    employeList:[],
  },
  getters: {
    getEmploye : state => {
      return state.employeList[0]?.results;
    }
  },
  mutations: {
    SET_EMPLOYE(state, employe) {
      state.employeList.push(employe);
    }
  },
  actions: {
    async fetchEmployeList(store) {
      const employe = await getEmploye()
      store.commit('SET_EMPLOYE', employe)
    }
  },
}) 