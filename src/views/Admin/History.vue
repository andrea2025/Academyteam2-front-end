<template>
  <div class="container">
    <div class="side-bar">
      <SideBar class="side-nav" />
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
            <div>
              <input type="file" id="file" ref="file" />
              <label for="file" class="btn-1">
                <b>+</b>&nbsp;&nbsp;&nbsp; Choose file
              </label>
            </div>
          </div>

          <!-- Timer for each question -->
          <div class="form-group">
            <label for="number">Set Time</label>
            <div
              v-if="this.number > 0"
              class="sub-flex"
            >{{ this.number.length === 2 ? this.number : `0${this.number}` }}</div>
            <input min="0" class="form-control" id="number" type="time" v-model="number" />
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
            <input class="form-control input-height" type="text" />
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
          <button type="submit" class="btn">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/sideBar";

export default {
  name: "History",
  components: {
    SideBar
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
[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}

[type="file"] + label {
  border: 1.6px dashed #2b3c4e;
  width: 100%;
  border-radius: 5px;
  color: #2b3c4e;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-family: Avenir;
  font-size: 16px;
  padding: 3em 10em;
}
i {
  font-size: 20px;
  color: #2b3c4e;
  font-weight: 900;
}

input {
  border: 1.5px solid #2b3c4e;
}

label {
  color: #2b3c4e;
}

p {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
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

.input-height {
  height: 8em;
}

.flex > div {
  width: calc(50% - 4em);
}

thead {
  background: #2b3c4e;
  color: white;
}
#tr {
  border-left: 5px solid transparent;
}
#tr:hover {
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-left: 5px solid #31d283;
  border-radius: 8px;
}

.box-shadow {
  padding: 1em 2em;
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