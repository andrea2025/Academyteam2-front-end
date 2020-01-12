<template>
  <div class="container">
    <div class="side-bar">
      <SideBar />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>Compose Assessment</h1>

      <!-- Number of questions composed -->
      <div>
        <p>15/30</p>
      </div>

      <div class="flex">
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

      <div id="special-btn">
        <div class="form-group">
          <button class="btn btn-primary">Previous</button>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Next</button>
        </div>
      </div>

      <div id="submit-btn">
        <button type="submit" class="btn btn-primary">Finish</button>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar";
import FileUpload from "../../components/FileUpload";

export default {
  name: "Compose",
  components: {
    SideBar,
    FileUpload
  },
  data() {
    return {
      number: 0,
      number2: 0
    };
  },

  computed: {
    // minutes: function() {
    //   if (this.number.length === 2) {
    //     return this.number;
    //   } else {
    //     `0${this.number}`;
    //   }
    // }
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
  /* position: relative; */
}

/* .side-bar {
  position: relative;
  top: 0;
  left: 0;
} */

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#btn {
  text-align: center;
}

.btn {
  width: 100%;
  border: none;
}

#submit-btn {
  margin: 0 auto;
  width: 40%;
}

#submit-btn button {
  background: #cecece;
  color: white;
}

#special-btn button {
  background: #2b3c4e;
}

#special-btn {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#special-btn > div {
  width: 20%;
}

.text-area {
  height: 8em;
}

.flex > div {
  width: calc(50% - 4em);
}

@media screen and (max-width: 600px) {
}
</style>