<template>
  <div class="container">
    <div class="side-bar">
      <SideBar class="side-nav" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>Dashboard</h1>

      <div>
        <div class="flex">
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p class="sans">Current Applications</p>
            <h1 class="lato">{{allAppEntries.length}}</h1>
            <div class="borderB"></div>
            <p class="px">Academy {{adminApplications[0].batch}}</p>
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
            <p class="sans">Academys</p>
            <h1 class="lato">{{adminApplications.length}}</h1>
            <div class="borderP"></div>
            <p class="px">So far</p>
          </div>
        </div>

        <div class="flex2">
          <div class="tab">
            <div>
              <h6>History</h6>
              <p class="px">Last Update 18:24, 22/02/19</p>
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
          <div class="form-group faint-border">
            <div class="pad-left">
              <h6>Create Assessment</h6>
            </div>
            <div class="content">
              <div>
                <p>Create test question for an incoming academy students</p>
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
  computed: {
    ...mapGetters(["adminApplications", "allAppEntries"])
  },
  mounted() {
    this.fetchApp();
  },
  methods: {
    ...mapActions(["getCreatedApp", "getAllEntries"]),
    fetchApp() {
      this.getCreatedApp();
      this.getAllEntries();
    }
  }
};
</script>
<style scoped>
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

.div-form {
  margin: 4em auto 0;
  /* width: 80%; */
  padding-left: 20rem;
  position: absolute;
  z-index: -1;
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
  font-size: 47px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.flex h1 {
  font-size: 49px;
}
.lato {
  font-family: Lato;
}

.sans {
  color: #4f4f4f;
}

.px {
  color: #4f4f4f;
  margin-top: 0.5rem;
  font-size: 14px;
}

.pad-left {
  padding-left: 1em;
  /* margin-top: 0; */
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
  margin-top: 2rem;
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
</style>