<template>
  <div class="container">
    <div>
      <SideBar class="side-bar" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>Assessment History</h1>

      <div class="box-shadow">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Batch</th>
              <th scope="col">Date Composed</th>
              <th scope="col">No of Questions</th>
              <th scope="col">Time Allocated</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr id="tr">
              <td>Batch 1</td>
              <td>12/07/94</td>
              <td>30</td>
              <td>30mins</td>
              <td>Taken</td>
            </tr>
            <tr id="tr">
              <td>Batch 1</td>
              <td>12/07/94</td>
              <td>30</td>
              <td>30mins</td>
              <td>Taken</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="compose-div">
        <!-- Number of questions composed -->
        <div id="page-num">
          <p>15/30</p>
        </div>

        <div class="space-around">
          <div>
            <FileUpload />
          </div>

          <!-- Timer for each question -->
          <div class="form-group">
            <label for="number">Set Time</label>
            <div
              v-if="this.number > 0"
              class="sub-flex"
            >{{ this.number.length === 2 ? this.number : `0${this.number}` }}</div>
            <input min="0" class="form-control" id="number" type="number" v-model="number" />
            <div>{{this.number2.length === 2 ? this.number2 : `00${this.number2}` }}</div>
            <input min="0" class="form-control" id="number2" type="number" v-model="number2" />
          </div>

          <div id="btn">
            <button type="submit" id="edit-btn">Edit</button>
          </div>
        </div>

        <div>
          <div class="form-group">
            <label>Questions</label>
            <input class="form-control" type="text" />
          </div>
        </div>

        <div class="flex">
          <div class="form-group">
            <label>Option A</label>
            <input class="form-control" type="text" />
          </div>
          <div class="form-group">
            <label>Option B</label>
            <input class="form-control" type="text" />
          </div>
        </div>

        <div class="flex">
          <div class="form-group">
            <label>Option C</label>
            <input class="form-control" type="text" />
          </div>
          <div class="form-group">
            <label>Option D</label>
            <input class="form-control" type="text" />
          </div>
        </div>

        <div id="btn" class="btn-margin-top">
          <button class="btn">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar";
import FileUpload from "../../components/FileUpload";

export default {
  name: "History",
  components: {
    SideBar,
    FileUpload
  },
  data() {
    return {
      number: 0,
      number2: 0
    };
  }

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
  padding: 0;
}

p {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}

.div-form {
  margin: 3em auto;
  width: 78%;
  position: relative;
  padding: 0 0 2em 0;
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

#page-num {
  margin: 2em 0 0 0;
}

.space-around {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#btn {
  text-align: center;
}

.compose-div {
  margin: 0 2em;
}

.btn {
  width: 40%;
  color: white;
}

button {
  background: #2b3c4e;
  border: none;
}

#edit-btn {
  background: #ff9900;
  padding: 5px 2em;
  border-radius: 3px;
  color: white;
}

.btn-margin-top {
  margin-top: 2em;
}

.text-area {
  height: 8em;
}

.flex > div {
  width: calc(50% - 4em);
}

thead {
  background: #2b3c4e;
  color: white;
}

#tr:hover {
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}

.box-shadow {
  padding: 1em 3em;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}

select {
  background: #2b3c4e;
}

td,
th {
  text-align: center;
}
</style>