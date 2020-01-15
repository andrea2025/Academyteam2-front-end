<template>
  <div class="container">
    <div>
      <SideBar class="side-bar" />
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
                <select name="age"></select>
              </th>
              <th scope="col">Address</th>
              <th scope="col">University</th>
              <th scope="col">
                CGPA
                <select name="grade"></select>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr id="tr">
              <td>Ify Chinke</td>
              <td>ify@enyata.com</td>
              <td>12/07/94</td>
              <td>3 Sabo Ave, Yaba, Lagos</td>
              <td>University of Nigeria</td>
            </tr>
            <tr id="tr">
              <td>Ify Chinke</td>
              <td>ify@enyata.com</td>
              <td>12/07/94</td>
              <td>3 Sabo Ave, Yaba, Lagos</td>
              <td>University of Nigeria</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar";

export default {
  name: "Entries",
  components: {
    SideBar
  }
  //   data() {
  //     return {
  //       number: 0,
  //       number2: 0
  //     };
  //   }

  //   methods: {
  //     setTime() {
  //       this.number = 2;
  //     }
  //   }
};
</script>
<style scoped>
.container {
  display: flex;
  /* align-items: center; */
  padding: 0;
  min-height: 100vh;
}

select {
  font-weight: 300;
}

.div-form {
  margin: 0 auto;
  width: 78%;
  position: relative;
  margin-top: 3em;
  padding: 0 0 2em 0;
}

.side-bar {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  padding: 0 0 2em 0;
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