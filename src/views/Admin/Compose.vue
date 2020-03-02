<template>
  <div class="container">
    <div class="side-bar">
      <SideBar class="side-nav" />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <div>
        <img src="../../assets/menubar.svg" alt />
        <h1>Compose Assessment</h1>
      </div>

      <!-- Number of questions composed -->
      <div>
        <p>/30</p>
      </div>

      <p class="response" :class="[apiResponse ? apiResponse.type: '']">{{ apiResponse.message }}</p>
      <p class="alert__message">{{ alert.message }}</p>
      <div class="flex">
        <div>
          <div>
            <input
              type="file"
              id="file"
              ref="file"
              class="file-upload"
              v-on:change="handleFileUpload()"
            />
            <label for="file" class="btn-1">
              <b>+</b>&nbsp;&nbsp;&nbsp; Upload picture
            </label>
          </div>
        </div>

        <!-- Timer for each question -->
        <div class="form-group">
          <label for="number">Set Time</label>
          <!-- <span>{{}}min</span> -->
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
          <input class="form-control input-height" type="text" v-model="question" />
        </div>
      </div>

      <div class="flex">
        <div class="form-group">
          <label for="optionA">Option A</label>
          <input class="form-control" name="optionA" v-model="options[0]" />
        </div>
        <div class="form-group">
          <label for="optionB">Option B</label>
          <input class="form-control" name="optionB" v-model="options[1]" />
        </div>
      </div>
      <div class="flex">
        <div class="form-group">
          <label for="optionC">Option C</label>
          <input class="form-control" name="optionC" v-model="options[2]" />
        </div>
        <div class="form-group">
          <label for="optionD">Option D</label>
          <input class="form-control" name="optionD" v-model="options[3]" />
        </div>
      </div>
      <div class="correct-ans">
        <label for="answer">Answer:</label>
        <br />
        <select id="ansOptions" class="form-group" v-model="selected">
          <option value>Choose answer</option>
          <option value="0">Option A</option>
          <option value="1">Option B</option>
          <option value="2">Option C</option>
          <option value="3">Option D</option>
        </select>
      </div>
      <div id="special-btn">
        <div class="form-group left-btn">
          <button class="btn btn-primary">Previous</button>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="sendQuestion">Next</button>
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
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Compose",
  components: {
    SideBar
  },

  data() {
    return {
      number: 0,
      number2: 0,
      alert: {
        message: ""
      },
      questionCount: 0,

      file: "",
      question: "",
      options: [],
      selected: "",
      time: 2000
    };
  },
  computed: {
    ...mapGetters(["apiResponse", "getAssessments"]),
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
  mounted() {
    this.countdown();
  },
  methods: {
    ...mapActions(["composeQuestion"]),
    countdown() {
      setInterval(() => {
        if (this.time > 0) {
          this.time--;
        }
      });
    },
    handleFileUpload: function() {
      var fileName = this.$refs.file.files[0].name;
      this.file = this.$refs.file.files[0];
      var allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!this.file) {
        this.alert.message = "Please upload a picture";
      } else if (!allowedTypes.includes(this.file.type)) {
        this.alert.message = "Wrong file type, Please upload a picture";
      } else if (this.file.size > 100000) {
        this.alert.message = "Too large, max size allowed is 100kb";
      } else {
        this.alert.message = "";
        $(".btn-1").text(fileName);
      }
    },
    sendQuestion() {
      let formData = new FormData();

      formData.append("file", this.file);
      formData.append("answer", this.selected);
      formData.append("question", this.question);
      formData.append("options", this.options[0]);
      formData.append("options", this.options[1]);
      formData.append("options", this.options[2]);
      formData.append("options", this.options[3]);
      console.log(this.selected, " ", this.options);
      this.composeQuestion(formData);
      this.questionCount++;

      this.file = "";
      this.question = "";
      this.options = "";
      this.answer = "";
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          val.message = "";
        }, 1000);
      }
    },
    alert(val) {
      if (val.message != null) {
        setTimeout(() => {
          val.message = "";
        }, 500);
      }
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
  height: 100%;
  padding: 0 0 2em 0;
}

.div-form {
  margin: 4em auto 0;
  width: 100%;
  min-width: 900px;
  padding: 0 3em 3em;
  padding-left: 7rem;
  /* position: absolute;
  z-index: 0; */
}

.flex > div {
  width: calc(50% - 4em);
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

img {
  display: none;
}
.response {
  text-align: center;
}
.response.failed {
  color: red;
}
.response.success {
  color: green;
}
.alert__message {
  color: red;
  font-size: 12px;
}
p {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
#ansOptions {
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  padding: 2px;
  margin-bottom: 2rem;
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

@media only screen and (max-width: 600px) {
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

  .flex {
    /* display: flex; */
    flex-wrap: wrap;
    width: 100%;
  }

  .flex > div {
    width: 100%;
  }

  [type="file"] {
    height: 0;
    overflow: hidden;
    width: 0;
    border: none;
  }

  [type="file"] + label {
    border-radius: 5px;
    color: #2b3c4e;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    font-family: Avenir;
    font-size: 10px;
    padding: 1em;
    width: 100%;
  }

  label {
    color: #2b3c4e;
    font-size: 11px;
  }

  i {
    font-size: 20px;
    color: #2b3c4e;
    font-weight: 900;
  }

  input {
    border: 1.5px solid #2b3c4e;
  }

  .response {
    text-align: center;
  }
  .response.failed {
    color: red;
  }
  .response.success {
    color: green;
  }
  .alert__message {
    color: red;
    font-size: 12px;
  }
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  #ansOptions {
    border: 1.5px solid #2b3c4e;
    border-radius: 4px;
    padding: 2px;
    margin-bottom: 2rem;
    width: 100%;
  }

  #btn {
    text-align: center;
  }

  .btn {
    width: 100%;
    border: none;
  }

  #submit-btn {
    margin: 0 auto 1em;
    width: 100%;
  }

  #submit-btn button {
    background: #cecece;
    color: white;
  }

  #special-btn button {
    background: #2b3c4e;
    width: 100%;
  }

  #special-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  #special-btn div {
    width: 100%;
  }

  #special-btn > div {
    width: 100%;
  }

  .left-btn {
    margin-right: 0;
    width: 100%;
  }

  .input-height {
    height: 8em;
  }
}
</style>