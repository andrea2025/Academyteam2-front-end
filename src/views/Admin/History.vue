<template>
  <div class="container">
    <div class="sidebar">
      <SideBar />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>Assessment History</h1>

      <div>
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
          <tbody class="hoverable-tr">
            <tr id="tr">
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Number of questions composed -->
      <div>
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

      <div id="btn">
        <button type="submit" class="btn">Next</button>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/sideBar";
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
  /* align-items: center; */
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
  padding-top: 6em;
  /* position: relative; */
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.space-around {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#btn {
  text-align: center;
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

.hoverable-tr:hover {
  background: white;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

#tr:hover {
  border-radius: 3px;
}

select {
  background: #2b3c4e;
}

@media screen and (max-width: 600px) {
}
</style>