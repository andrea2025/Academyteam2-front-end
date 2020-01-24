<template>
  <div class="container">
    <div class="side-bar">
      <sideBar class="side-nav" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>
        Results -
        <select name="batch" class="special-select">
          <option value="0" disabled></option>
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
              <th scope="col">
                Test Scores
                <select name="scores"></select>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr id="tr" v-for="(result, index) in getResult" :key="index">
              <td>{{result.userProfile.firstName}} {{result.userProfile.lastName}}</td>
              <td>{{result.userProfile.email}}</td>
              <td>{{result.userProfile.birthday}}</td>
              <td>{{result.userProfile.address}}</td>
              <td>{{result.userProfile.school}}</td>
              <td>{{result.userProfile.cgpa}}</td>
              <td>{{result.score}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from "../../components/sideBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Result",
  components: {
    sideBar
  },
  computed: {
    ...mapGetters(["getResult"])
  },
  async mounted() {
    await this.getScores();
  },
  methods: {
    ...mapActions(["getScores"])
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
  width: 80%;
  padding: 0 3em 3em;
}

select {
  font-style: normal;
  font-weight: 300;
}

thead {
  background: #2b3c4e;
  color: white;
}

.special-select {
  background: white;
  border: none;
  outline: none;
}

#tr:hover {
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}

td,
th {
  text-align: center;
}
</style>