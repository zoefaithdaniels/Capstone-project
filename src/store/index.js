import { createStore } from 'vuex';
import axios from 'axios';
const soccerbrokersURL = 'https://soccer-brokersnod.onrender.com/';


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
    showSpinner(state) {
      return state.showSpinner
    }
  },
  mutations: {
    setUsers(state, values){
      state.users = values
    },
    setUser(state, value){
      state.user = value
    },
    setProducts(state, values){
      state.Products = values
    },
    setProduct(state, value){
      state.product = value
    },
    setMessage(state, value){
      state.message = value
    },
    setSpinner(state, value){
      state.showSpinner = value
    }
  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${soccerbrokersURL}users`);
      const {results, err} = await res.data;
      if(results) {
       context.commit('setUsers', results)
      }else{
        context.commit('setMessage', err)
      }

    },
  },
  modules: {
  }
})
