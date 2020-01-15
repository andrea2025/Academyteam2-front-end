<template>
  <div class="container">
    <div class="side-bar">
      <SideBar />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>
        Results - Batch X
        <select name="batch" class="special-select">
          <option value="0"></option>
          <option value="1">Batch 1</option>
          <option value="2">Batch 2</option>
          <option value="3">Batch 3</option>
        </select>
      </h1>
      <em>
        <p>Comprises of all that applied for batch 2</p>
      </em>

      <div>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">
                DOB-Age
                <select name="age"></select>
              </th>
              <th scope="col">Address</th>
              <th scope="col">University</th>
              <th scope="col">
                CGPA
                <select name="grade"></select>
              </th>
              <!-- <th scope="col">
                Test Scores
                <select name="scores"></select>
              </th>-->
            </tr>
          </thead>
          <tbody
            class="hoverable-tr"
            v-for="entry in allAppEntries"
            :key="entry._id"
            @reload="fetchEntries"
          >
            <tr>
              <td>{{entry.firstName}} {{entry.lastName}}</td>
              <td>{{entry.email}}</td>
              <td>{{entry.birthday}}</td>
              <td>{{entry.address}}</td>
              <td>{{entry.school}}</td>
              <td>{{entry.cgpa}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/sideBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Batch",
  components: {
    SideBar
  },
  computed: {
    ...mapGetters(["allAppEntries"])
  },
  mounted() {
    this.fetchEntries();
  },
  methods: {
    ...mapActions(["getAllEntries"]),
    fetchEntries() {
      this.getAllEntries();
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
}

h1 {
  font-weight: 400;
}

.div-form {
  margin: 0 auto;
  width: 76%;
  padding-bottom: 26em;
}

.side-bar {
  position: relative;
  top: 0;
  left: 0;
}

thead {
  background: #2b3c4e;
  color: white;
}

.hoverable-tr:hover {
  background: white;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 0.4em;
}

.special-select {
  background: white;
  border: none;
  outline: none;
}

@media screen and (max-width: 600px) {
}
</style>