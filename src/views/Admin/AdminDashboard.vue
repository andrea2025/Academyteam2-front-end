<template>
  <div class="container">
    <div class="side-bar">
      <SideBar class="side-nav" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <div>
        <img src="../../assets/menubar.svg" alt />
        <h1>Dashboard</h1>
      </div>

      <div>
        <div class="flex">
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p class="sans">Current Applications</p>
            <h1 class="lato">{{allAppEntries.length}}</h1>
            <div class="borderB"></div>
            <!-- <p class="px">Academy {{adminApplications[0].batch}}</p> -->
          </div>
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p class="sans">Total Applications</p>
            <h1 class="lato">{{allAppEntries.length}}</h1>
            <div class="borderG"></div>
            <p class="px">All entries so far</p>
          </div>
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p class="sans academy-status">Academys</p>
            <h1 class="lato">{{adminApplications.length}}</h1>
            <div class="borderP"></div>
            <p class="px">So far</p>
          </div>
        </div>

        <div class="flex2">
          <div class="tab">
            <div>
              <h6>History</h6>
              <p class="px px1">Last Update 18:24, 22/02/19</p>
            </div>
            <table>
              <tbody>
                <tr id="tr" v-for="app in adminApplications" :key="app._id" @reload="fetchApp">
                  <td>Batch {{app.batch}}</td>
                  <td>{{allAppEntries.length}} students</td>
                  <td>Started {{app.date}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="faint-border">
            <div class="pad-left">
              <h6>Create Assessment</h6>
            </div>
            <div class="content">
              <div>
                <p class="px2">Create test question for an incoming academy students</p>
              </div>
              <div>
                <router-link to="Compose">
                  <button class="btn">Create Assessment</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/sideBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdminDashboard",
  components: {
    SideBar
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["adminApplications", "allAppEntries"]),
    screenSize() {
      let x = window.matchMedia("(max-width: 768px)");
      let menuBar = document.querySelector("#menu-icon");

      if (x) {
        // If media query matches
        return (menuBar.style.display = "block");
      } else {
        return (menuBar.style.display = "none");
      }
    }
  },
  mounted() {
    this.fetchApp();
  },
  methods: {
    screen: function() {
      window.matchMedia("(max-width: 768px)");
    },
    ...mapActions(["getCreatedApp", "getAllEntries"]),
    fetchApp() {
      this.getCreatedApp();
      this.getAllEntries();
    }
  }
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  /* For mobile phones: */
  .container {
    display: flex;
    padding: 0;
    min-height: 100vh;
  }

  .side-bar {
    position: relative;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 50%;
  }

  .side-nav {
    height: 100%;
    padding: 0 0 2em 0;
  }

  img {
    display: block;
    float: right;
    padding-top: 0.3em;
  }

  .div-form {
    margin: 0;
    padding: 0.5em;
    width: 100%;
  }

  .lato {
    font-weight: 600;
    font-size: 20px;
  }

  .sans {
    color: #4f4f4f;
    font-size: 11px;
  }

  .borderB,
  .borderG,
  .borderP {
    width: 1em;
  }

  .borderB {
    border-bottom: 4px solid #006df0;
  }

  .borderG {
    border-bottom: 4px solid #00f026;
  }
  .borderP {
    border-bottom: 4px solid #f09000;
  }

  .px {
    color: #4f4f4f;
    margin-top: 0.5rem;
    font-size: 10px;
  }

  .flex {
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
  }

  .flex > div {
    width: auto;
  }

  .form-group {
    margin: 0;
  }

  .px2 {
    color: #4f4f4f;
    margin-top: 0.5rem;
    font-size: 11px;
  }
  .flex2 {
    display: block;
  }

  h6 {
    font-size: 11px;
  }

  button {
    background: #b1b1b1;
    color: white;
    font-size: 11px;
  }

  .btn:hover {
    color: white;
    text-decoration: none;
  }
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .container {
    display: flex;
    padding: 0;
    min-height: 100vh;
  }

  .side-bar {
    position: relative;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 22.2%;
  }

  .side-nav {
    height: 100%;
    padding: 0 0 2em 0;
  }

  img {
    display: none;
  }

  .div-form {
    margin: 4em auto 0;
    width: 80%;
    padding: 0 2em 3em 2em;
  }

  .borderB,
  .borderG,
  .borderP {
    width: 3em;
  }

  .borderB {
    border-bottom: 4px solid #006df0;
  }

  .borderG {
    border-bottom: 4px solid #00f026;
  }
  .borderP {
    border-bottom: 4px solid #f09000;
  }

  h1 {
    font-weight: 300;
    font-size: 49px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2b3c4e;
  }

  .lato {
    font-family: Lato;
    /* font-size: 30px; */
  }

  .sans {
    color: #4f4f4f;
    font-size: 15px;
  }

  .px {
    color: #4f4f4f;
    margin-top: 0.5rem;
    font-size: 12px;
    line-height: 16px;
  }

  .px1 {
    color: #4f4f4f;
    margin-top: 0.5rem;
    font-size: 14px;
  }

  .pad-left {
    padding-left: 1em;
  }

  h6 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #2b3c4e;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
  }

  button {
    background: #b1b1b1;
    color: white;
  }

  .btn:hover {
    color: white;
    text-decoration: none;
  }

  .flex > div {
    width: calc(50% - 4em);
  }

  .flex2 {
    display: flex;
    justify-content: space-between;
  }

  .flex2 > div {
    margin: 1em 0;
  }

  .faint-border {
    border: 2px solid #ececf9;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1em;
  }

  .tab {
    height: fit-content;
    padding-top: 1em;
  }

  td {
    padding: 1em 2em;
  }

  #tr:hover {
    border-radius: 8px;
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  }

  .content {
    text-align: center;
    width: 90%;
    margin: 3em auto;
  }
}

@media only screen and (min-width: 992px) {
  /* For Desktop and larger screens*/
  .container {
    display: flex;
    padding: 0;
    min-height: 100vh;
  }

  .side-bar {
    position: relative;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 250px;
  }

  .side-nav {
    height: 100%;
    padding: 0 0 2em 0;
  }

  img {
    display: none;
  }

  .div-form {
    margin: 4em auto 0;
    width: 80%;
    padding: 0 2em 3em 2em;
  }
  .borderB {
    /* padding-top: 0.7rem; */
    width: 140px;
    border-bottom: 4px solid #006df0;
  }
  .borderG {
    width: 140px;
    border-bottom: 4px solid #00f026;
  }
  .borderP {
    width: 140px;
    border-bottom: 4px solid #f09000;
  }
  h1 {
    font-weight: 300;
    font-size: 49px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2b3c4e;
  }

  .lato {
    font-family: Lato;
  }

  .sans {
    color: #4f4f4f;
    font-size: 14px;
  }

  .px {
    color: #4f4f4f;
    margin-top: 0.5rem;
    font-size: 12px;
    line-height: 16px;
  }

  .px2 {
    font-size: 16px;
    line-height: 22px;
  }

  .pad-left {
    padding-left: 1em;
  }

  h6 {
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #2b3c4e;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
  }

  button {
    background: #b1b1b1;
    color: white;
  }

  .flex > div {
    width: calc(50% - 4em);
  }

  .flex2 {
    display: flex;
    justify-content: space-between;
  }

  .flex2 > div {
    margin: 1em 0;
  }

  .faint-border {
    border: 2px solid #ececf9;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 1em;
  }

  .tab {
    height: fit-content;
    padding-top: 1em;
  }

  td {
    padding: 1em 2em;
    font-size: 16px;
    line-height: 22px;
  }

  #tr:hover {
    border-radius: 8px;
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  }

  .content {
    text-align: center;
    width: 90%;
    margin: 3em auto;
  }

  .btn:hover {
    color: white;
    text-decoration: none;
  }
}
</style>