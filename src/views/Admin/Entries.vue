<template>
  <div class="container">
    <div class="side-bar">
      <sideBar class="side-nav" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>
        Entries -
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
                <span class="fa fa-sort" name="age" @click="sort('birthday')"></span>
              </th>
              <th scope="col">Address</th>
              <th scope="col">University</th>
              <th scope="col">
                CGPA
                <span class="fa fa-sort" name="cgpa" @click="sort('cgpa')"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr id="tr" v-for="entry in applications" :key="entry._id">
              <td>{{entry.firstName}} {{entry.lastName}}</td>
              <td>{{entry.email}}</td>
              <td>{{entry.birthday}} / {{calcAge(entry.birthday)}}</td>
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
import sideBar from "../../components/sideBar";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Entries",
  components: {
    sideBar
  },
  data() {
    return {
      applications: [],
      sortState: {
        birthday: "desc",
        cgpa: "desc"
      }
    };
  },
  computed: {
    ...mapGetters(["allAppEntries"])
  },
  methods: {
    ...mapActions(["getAllEntries"]),
    sort(sortKey) {
      this.sortState[sortKey] =
        this.sortState[sortKey] === "asc" ? "desc" : "asc";
      let isAsc = this.sortState[sortKey] === "asc";

      this.applications = this.allAppEntries.sort((a, b) => {
        if (sortKey === "birthday") {
          let d1 = new Date(a.birthday).getTime();
          let d2 = new Date(b.birthday).getTime();

          return isAsc ? d1 - d2 : d2 - d1;
        } else {
          return isAsc ? a.cgpa - b.cgpa : b.cgpa - a.cgpa;
        }
      });
    },
    calcAge(bday) {
      let a = new Date(bday).getTime();
      let age = Math.floor((Date.now() - a) / (60 * 60 * 60 * 24 * 365));
      return age;
    }
  },
  mounted() {
    this.getAllEntries();
    this.applications = this.allAppEntries;
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
.div-form {
  margin: 4em auto 0;
  width: 100%;
  min-width: 1000px;
  padding-left: 4rem;
  /* position: absolute;
  z-index: -1; */
  padding-right: 1em;
}
select {
  font-weight: 300;
}
thead {
  background: #2b3c4e;
  color: white;
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
</style>