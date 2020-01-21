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
      id: '',
      firstName: '',
      lastName: '',
      email: ''
    },
    userEntryStatus: {
      type: ''
    },
    testStatus: {
      status: ''
    },
    admin: {
      name: '',
      email: ''
    },
    token: localStorage.getItem("token") || null,
    appEntries: [],
    adminBatch: [],
    batchInfo: {
      id: '',
      date: '',
      batch: ''
    },
    isAdmin: {
      status: ''
    },
    questionArray: []
  },
  getters: {
    apiResponse: state => state.response,
    profileDetails: state => state.profile,
    AdminDetails: state => state.admin,
    adminLog: state => state.Adminresponse,
    adminApplications: state => state.adminBatch,
    batchDetails: state => state.batchInfo,
    isLoggedIn: function (state) {
      if (!state.token) {
        return false;
      } else {
        return true;
      }
    },
    isAdmin: state => state.isAdmin,
    entryStatus: state => state.userEntryStatus,
    takenTest: state => state.testStatus,
    allAppEntries: state => state.appEntries,
    getAssessments: state => state.questionArray
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
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
    isAdmin(state, payload) {
      state.isAdmin = {
        status: payload.status
      }
    },
    userDetails(state, payload) {
      state.profile = {
        id: payload.id,
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
    },
    adminCreatedApp(state, payload) {
      state.adminBatch = payload
    },
    allAppEntries(state, payload) {
      state.appEntries = payload
    },
    userEntryStatus(state, payload) {
      state.userEntryStatus = {
        status: payload.type
      }
    },
    takenTest(state, payload) {
      state.testStatus = {
        status: payload.status
      }
    },
    batchInfo(state, payload) {
      state.batchInfo = {
        id: payload.id,
        date: payload.date,
        batch: payload.batch
      }
    },
    getQuestions(state, payload) {
      state.questionArray = payload
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
          let testStatus = {
            status: response.data.data.takenTest
          }
          let entryStatus = {
            type: response.data.data.sentEntry
          }
          let userProfile = {
            id: response.data.data._id,
            firstName: response.data.data.firstName,
            lastName: response.data.data.lastName,
            email: response.data.data.email
          }

          localStorage.setItem("token", token)

          context.commit('takenTest', testStatus)
          context.commit('userDetails', userProfile)
          context.commit('userEntryStatus', entryStatus)
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
            name: response.data.data.name,
            email: response.data.data.email
          }
          let responseObject = {
            type: "success",
            message: response.data.message
          }
          let isAdmin = {
            status: true
          }

          localStorage.setItem("token", token)

          context.commit('isAdmin', isAdmin)
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
    logoutPerson: (context) => {

      localStorage.removeItem("token")
      context.commit('destroyToken')
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

      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
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
    },
    getCreatedApp(context) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.get("http://localhost:4000/admin/all")
        .then(response => {
          let createdApp = response.data.data

          context.commit('adminCreatedApp', createdApp)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit("getResponse", responseObject)
        })
    },
    createBatch(context, val) {
      var formData = new FormData();
      formData.append('fileapplicant', val.fileapplicant)
      formData.append("link", val.link);
      formData.append("date", val.date);
      formData.append("batch", val.batch);
      formData.append("instructions", val.instructions);

      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.post("http://localhost:4000/admin/new", formData)
        .then(response => {
          let responseObject = {
            type: "success",
            message: response.data.message
          }
          let batchDetails = {
            id: response.data.newEntry._id,
            date: response.data.newEntry.date,
            batch: response.data.newEntry.batch
          }

          context.commit("getResponse", responseObject)
          context.commit("batchInfo", batchDetails)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit("getResponse", responseObject)
        })
    },
    getAllEntries(context) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.get("http://localhost:4000/allApp")
        .then(response => {
          let allEntries = response.data.data

          context.commit('allAppEntries', allEntries)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit("getResponse", responseObject)
        })
    },
    composeQuestion(context, val) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.post("http://localhost:4000/tests/test", val)
        .then(response => {
          let responseObject = {
            type: 'success',
            message: response.data.message
          }
          context.commit("getResponse", responseObject)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit("getResponse", responseObject)
        })
    },
    getAssessment(context) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.get("http://localhost:4000/tests/all-test")
        .then(response => {
          let questionObject = response.data.questionData

          context.commit("getQuestions", questionObject)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit("getResponse", responseObject)
        })
    }
  },
  modules: {
    auth: {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  }
})