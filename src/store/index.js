import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    response: {
      type: '',
      message: ''
    },
    Adminresponse: {
      type: "",
      message: ""
    },
    profile: {
      firstName: '',
      lastName: '',
      email: ''
    },
    admin:{
      name:'',
      email:''
    },
    token: localStorage.getItem("token") || null
  },
  getters: {
    apiResponse: state => state.response,
    profileDetails: state => state.profile,
    AdminDetails:state => state.admin,
    adminLog:state => state.Adminresponse
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    getResponse(state, payload) {
      state.response = {
        type: payload.type,
        message: payload.message
      }
    },
    Adminresp(state, payload){
      state.Adminresponse ={
        type:payload.type,
        message:payload.message
      }
    },
    userDetails(state, payload) {
      state.profile = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email
      }
    },
    adminProfile(state,payload){
      state.admin = {
        name:payload.name,
        email:payload.email
      }
    }
  },
  actions: {
    createUser(context, val) {
      Axios.post("http://localhost:4000/signup", val)
        .then(response => {
          let responseObject = {
            type: "success",
            message: response.data.message
          }

          context.commit('getResponse', responseObject)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message || 'Invalid Registration'
          }
          context.commit('getResponse', responseObject);
        })
    },
    loginUser(context, val) {
      Axios.post("http://localhost:4000/login", val)
        .then(response => {
          const token = response.data.token;
          let userProfile = {
            firstName: response.data.data.firstName,
            lastName: response.data.data.lastName,
            email: response.data.data.email
          }

          let responseObject = {
            type: "success",
            message: response.data.message
          }

          localStorage.setItem("token", token)

          context.commit('retrieveToken', token)
          context.commit('userDetails', userProfile)
          context.commit('getResponse', responseObject)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }

          context.commit('getResponse', responseObject)
        })
    },
    loginAdmin(context, val) {
      Axios.post("http://localhost:4000/admin/login", val)
        .then(response => {
          const token = response.data.token;
          let AdminDetail = {
            Name: response.data.name,
            email: response.data.email
          }

          let responseObject = {
            type: "success",
            message: response.data.message
          }

          localStorage.setItem("token", token)

          context.commit('retrieveToken', token)
          context.commit('adminProfile', AdminDetail)
          context.commit('Adminresp', responseObject)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }

          context.commit('Adminresp', responseObject)
        })
    }
  },
  modules: {}
})