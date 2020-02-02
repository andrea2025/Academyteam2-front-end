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
    userEntryStatus: '',
    testStatus: {
      status: ''
    },
    userProfile: {
      firstName: '',
      lastName: '',
      email: '',
      created: ''
    },
    admin: {
      name: '',
      email: ''
    },
    token: localStorage.getItem("token") || null,
    userID: localStorage.getItem("userID") || null,
    adminID: localStorage.getItem("adminID") || null,
    appEntries: [],
    adminBatch: [],
    forgotPassword:{
      email:''
    },
  Reset:{
    password:'',
    confirm:''
  },
    batchInfo: {
      id: '',
      date: '',
      batch: ''
    },
    isAdmin: {
      status: ''
    },
    questionArray: [],
    resultProfile: []
  },
  getters: {
    apiResponse: state => state.response,
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
    userProfile: state => state.userProfile,
    isAdmin: state => state.isAdmin,
    entryStatus: state => state.userEntryStatus,
    takenTest: state => state.testStatus,
    allAppEntries: state => state.appEntries,
    getAssessments: state => state.questionArray,
    getResult: state => state.resultProfile,
    getPassword: state => state.forgotPassword,
    getReset:state => state.Reset
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
    getUserID(state, userID) {
      state.userID = userID
    },
    clearUserID(state) {
      state.userID = null
    },
    getAdminID(state, adminID) {
      state.adminID = adminID
    },
    clearAdminID(state) {
      state.adminID = null
    },
    userProfile(state, payload) {
      state.userProfile = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        created: payload.created
      }
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
      state.userEntryStatus = payload
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
    },
    scoreResult(state, payload) {
      state.resultProfile = payload
    },
    password(state,payload){
      state.forgotPassword={
        email:payload.email
      }
    },
    reset (state,payload){
      state.Reset = {
        password:payload.password,
        confirmPassword:payload.confirmPassword
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
          let entryStatus = response.data.data.sentEntry
          let userID = response.data.data._id

          localStorage.setItem("userID", userID)
          localStorage.setItem("token", token)

          context.commit('getUserID', userID)
          context.commit('retrieveToken', token)
          context.commit('userEntryStatus', entryStatus)
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
    getUserProfile(context) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.get(`http://localhost:4000/${this.state.userID}`)
        .then(response => {
          let userProfile = {
            firstName: response.data.data.firstName,
            lastName: response.data.data.lastName,
            email: response.data.data.email,
            created: response.data.data.createdAt
          }
          context.commit("userProfile", userProfile)
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
          let responseObject = {
            type: "success",
            message: response.data.message
          }
          let isAdmin = {
            status: true
          }
          let adminID = response.data.data._id

          localStorage.setItem("adminID", adminID)
          localStorage.setItem("token", token)

          context.commit('isAdmin', isAdmin)
          context.commit('retrieveToken', token)
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
    getAdminProfile(context) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.get(`http://localhost:4000/admin/${this.state.adminID}`)
        .then(response => {
          let AdminDetail = {
            name: response.data.data.name,
            email: response.data.data.email
          }
          context.commit('adminProfile', AdminDetail)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit('getResponse', responseObject)
        })
    },
    logoutUser(context) {
      localStorage.removeItem("userID")
      localStorage.removeItem("token")

      context.commit('clearUserID')
      context.commit('destroyToken')
    },
    logoutAdmin(context) {
      localStorage.removeItem("adminID")
      localStorage.removeItem("token")

      context.commit('clearAdminID')
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
      Axios.post("http://localhost:4000/appl/newApp", formData)

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
            message: error.response.data.message
          }
          context.commit('getResponse', responseObject)
        });
    },
    getCreatedApp(context) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.get("http://localhost:4000/create/all")
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
      Axios.post("http://localhost:4000/create/new", formData)
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
      Axios.get("http://localhost:4000/appl/allApp")
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
    },
    submitAns(context, val) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.post("http://localhost:4000/tests/calc-test", {
          questionId: val.questions,
          answer: val.answers
        })
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
    getScores(context) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.state.token
      Axios.get("http://localhost:4000/tests/scores")
        .then(response => {

          let responseObject = {
            type: "success",
            message: response.data.message
          }
          let resultProfile = response.data.data

          context.commit("getResponse", responseObject)
          context.commit("scoreResult", resultProfile)
        })
        .catch(error => {
          let responseObject = {
            type: 'failed',
            message: error.response.data.message
          }
          context.commit("getResponse", responseObject)
        })
    },
    passwordGet(context, val) {
      Axios.post("http://localhost:4000/forgot", val)
      console.log(val)
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
            message: error.response.data.message 
          }
          context.commit('getResponse', responseObject);
        })
    },
    resetPassword(context){
      Axios.get("http://localhost:4000/set/:token")
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
          message: error.response.data.message 
        }
        context.commit('getResponse', responseObject);
      })
    },
    ResetPassword(context, val) {
      Axios.post("http://localhost:4000/reset/:token", val)
      console.log("the new password", val)
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
            message: error.response.data.message 
          }
          context.commit('getResponse', responseObject);
        })
    },
  },
  modules: {
    auth: {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
  }
})