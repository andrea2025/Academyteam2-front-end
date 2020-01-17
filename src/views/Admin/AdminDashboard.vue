<template>
  <div class="container">
    <div>
      <SideBar class="side-bar" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>Dashboard</h1>

      <div>
        <div class="flex">
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p>Current Applications</p>
            <h1>{{allAppEntries.length}}</h1>
            <p>Academy {{}}</p>
          </div>
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p>Total Applications</p>
            <h1>{{allAppEntries.length}}</h1>
            <p>All entries so far</p>
          </div>
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p>Academys</p>
            <h1>{{adminApplications.length}}</h1>
            <p>So far</p>
          </div>
        </div>

        <div class="flex2">
          <div class="tab">
            <div>
              <h6>History</h6>
              <p>Last Update</p>
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
            <div>
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
    ...mapGetters(["adminApplications", "AdminDetails", "allAppEntries"])
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

.div-form {
  margin: 0 auto;
  width: 78%;
  position: relative;
  margin-top: 3em;
  padding: 0 0 2em 0;
}

h6 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}

.side-bar {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 0 2em 0;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background: #cecece;
  color: white;
}

.text-area {
  height: 8em;
}

.flex > div {
  width: calc(50% - 4em);
}

.flex2 {
  display: flex;
  justify-content: space-between;
}

.flex2 > div {
  padding: 1em;
}

.faint-border {
  border: 2px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
}

.tab {
  height: fit-content;
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
  margin: 2em auto;
}
</style>