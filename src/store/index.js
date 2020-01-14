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
    admin: {
      name: '',
      email: ''
    },
    token: localStorage.getItem("token") || null
  },
  getters: {
    apiResponse: state => state.response,
    profileDetails: state => state.profile,
    AdminDetails: state => state.admin,
    adminLog: state => state.Adminresponse
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
    Adminresp(state, payload) {
      state.Adminresponse = {
        type: payload.type,
        message: payload.message
      }
    },
    userDetails(state, payload) {
      state.profile = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email
      }
    },
    adminProfile(state, payload) {
      state.admin = {
        name: payload.name,
        email: payload.email
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

          let responseObject = {
            type: "success",
            message: response.data.message
          }

          localStorage.setItem("token", token)

          context.commit('retrieveToken', token)
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
        });
    },
    sendApp(context, val) {
      let formData = new FormData();

      formData.append("file", val.file);
      formData.append("firstName", val.firstName);
      formData.append("lastName", val.lastName);
      formData.append("email", val.email);
      formData.append("birthday", val.birthday);
      formData.append("address", val.address);
      formData.append("school", val.school);
      formData.append("courseOfStudy", val.courseOfStudy);
      formData.append("cgpa", val.cgpa);

      Axios.post("http://localhost:4000/newApp", formData)

        .then(response => {
          let responseObject = {
            type: "success",
            message: response.data.message
          }
          let userProfile = {
            firstName: response.data.newEntry.firstName,
            lastName: response.data.newEntry.lastName,
            email: response.data.newEntry.email
          }

          context.commit('userDetails', userProfile)
          context.commit('getResponse', responseObject)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit('getResponse', responseObject)
        });
    }
  },
  modules: {}
})