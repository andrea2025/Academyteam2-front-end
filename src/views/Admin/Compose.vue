<template>
  <div class="container">
    <div class="side-bar">
      <SideBar class="side-nav" />
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
          <input type="file" id="file" ref="file" />
          <label for="file" class="btn-1">
            <!-- <br /> -->
            <i>+</i>&nbsp;&nbsp;&nbsp; Choose file
          </label>
        </div>

        <!-- Timer for each question -->
        <div class="form-group">
          <label for="number">Set Time</label>
          <span>{{}}min</span>
          <!-- <div
            v-if="this.number > 0"
            class="sub-flex"
          >{{ this.number.length === 2 ? this.number : `0${this.number}` }}</div>
          <input min="0" class="form-control" id="number" type="number" v-model="number" />
          <div>{{this.number2.length === 2 ? this.number2 : `00${this.number2}` }}</div>
          <input min="0" class="form-control" id="number2" type="number" v-model="number2" />-->
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

      <div id="special-btn">
        <div class="form-group left-btn">
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
import SideBar from "../../components/sideBar";

export default {
  name: "Compose",
  components: {
    SideBar
  },

  data() {
    return {
      time: 2000
    };
  },
  mounted() {
    this.countdown();
  },
  computed: {
    mins() {
      const val = Math.floor(this.time / 60);
      if (String(val).length === 1) {
        return `0${val}`;
      }
      return val;
    },
    secs() {
      const val = this.time % 60;
      if (String(val).length === 1) {
        return `0${val}`;
      }
      return val;
    }
  },
  methods: {
    countdown() {
      setInterval(() => {
        if (this.time > 0) {
          this.time--;
        }
      });
    }
  }
};
</script>
<style scoped>
p {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}

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
  padding: 3em 1em;
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
  margin: 2em auto;
  width: 20%;
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
  width: 15%;
}

.left-btn {
  margin-right: 23em;
}

.input-height {
  height: 8em;
}

.flex > div {
  width: calc(50% - 4em);
}
</style>