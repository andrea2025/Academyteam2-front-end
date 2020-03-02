<template>
  <div class="container">
    <div class="side-bar">
      <sideBar class="side-nav" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <div>
        <img src="../../assets/menubar.svg" alt />
        <h1>
          Entries -
          <select name="batch" class="special-select">
            <option value="0" disabled></option>
            <option value="1">Batch 1</option>
            <option value="2">Batch 2</option>
            <option value="3">Batch 3</option>
          </select>
        </h1>
      </div>
      <em>
        <p>Comprises of all that applied for batch 2</p>
      </em>

      <div>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col" class="bd-tr">
                DOB-Age
                <select name="age"></select>
              </th>
              <th scope="col" class="bd-tr">Address</th>
              <th scope="col" class="bd-tr">University</th>
              <th scope="col">
                CGPA
                <select name="grade"></select>
              </th>
              <th scope="col">
                Test Scores
                <span class="fa fa-sort" name="scores" @click="sort('score')"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr id="tr" v-for="(result, index) in results" :key="index">
              <td>{{result.userProfile.firstName}} {{result.userProfile.lastName}}</td>
              <td>{{result.userProfile.email}}</td>
              <td class="bd-tr">{{result.userProfile.birthday}}</td>
              <td class="bd-tr">{{result.userProfile.address}}</td>
              <td class="bd-tr">{{result.userProfile.school}}</td>
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
  data() {
    return {
      results: [],
      sortState: {
        birthday: "desc",
        score: "desc"
      }
    };
  },
  computed: {
    ...mapGetters(["getResult"])
  },
  mounted() {
    this.getScores();
    this.results = this.getResult;
  },
  methods: {
    ...mapActions(["getScores"]),
    sort(sortKey) {
      this.sortState[sortKey] =
        this.sortState[sortKey] === "asc" ? "desc" : "asc";
      let isAsc = this.sortState[sortKey] === "asc";

      this.results = this.getResult.sort((a, b) => {
        if (sortKey === "birthday") {
          let d1 = new Date(a.birthday).getTime();
          let d2 = new Date(b.birthday).getTime();

          return isAsc ? d1 - d2 : d2 - d1;
        } else {
          return isAsc ? a.score - b.score : b.score - a.score;
        }
      });
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
  /* height: 100%; */
  padding: 0 0 2em 0;
}

.div-form {
  margin: 4em auto 0;
  width: 100%;
  padding: 0 3em 3em 3em;
}

img {
  display: none;
}

h1 {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

em {
  font-family: Lato;
  /* font-weight: bold; */
  line-height: 16px;
  color: #4f4f4f;
}

select {
  /* font-style: normal; */
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
#tr {
  border-left: 5px solid transparent;
}
#tr:hover {
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-left: 5px solid #31d283;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

td {
  margin-top: 1em;
}

.fa-sort:hover {
  cursor: pointer;
}
.special-select {
  background: white;
  border: none;
  outline: none;
}
#tr {
  border-left: 5px solid transparent;
  border-radius: 8px;
}
#tr:hover {
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-left: 5px solid #31d283;
  border-radius: 8px;
}

td,
th {
  text-align: center;
}

@media only screen and (max-width: 768px) {
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
    width: 40%;
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
    min-width: 50%;
  }

  .box-shadow {
    padding: 0;
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
    border-radius: 8px;
  }

  table,
  p {
    font-size: 11px;
  }

  .bd-tr {
    display: none;
  }
}
</style>