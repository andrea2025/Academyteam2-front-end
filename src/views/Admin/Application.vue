<template>
  <div class="container">
    <div class="side-bar">
      <SideBar class="side-nav" />
    </div>
    <form class="div-form" @submit.prevent="createAppl" enctype="multipart/form-data">
      <!-- Page title -->
      <h1>Create Application</h1>

      <p class="response" :class="[apiResponse ? apiResponse.type: '']">{{ apiResponse.message }}</p>
      <p class="alert__message">{{ alert.message }}</p>
      <div>
        <div class="flex">
          <div>
            <input
              type="file"
              id="file"
              ref="file"
              class="file-upload"
              v-on:change="handleFileUpload()"
            />
            <label for="file" class="btn-1">
              <b>+</b>&nbsp;&nbsp;&nbsp; Choose file
            </label>
          </div>
          <div class="form-group">
            <label>Link</label>
            <input class="form-control" type="url" v-model="link" />
          </div>
        </div>
        <div class="flex">
          <div class="form-group">
            <label>Application closure date</label>
            <input
              class="italic form-control"
              type="text"
              onfocus="(this.type='date')"
              placeholder="dd/mm/yy"
              v-model="date"
            />
          </div>
          <div class="form-group">
            <label>Batch ID</label>
            <input class="form-control" type="text" v-model="batch" />
          </div>
        </div>

        <div class="form-group">
          <label>Instructions</label>
          <input class="form-control text-area" type="text" v-model="instructions" />
        </div>
      </div>
      <div id="btn">
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import SideBar from "../../components/sideBar";
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Application",
  components: {
    SideBar
  },
  data() {
    return {
      file: "",
      link: "",
      date: "",
      batch: "",
      instructions: "",
      alert: {
        message: ""
      }
    };
  },
  computed: {
    ...mapGetters(["apiResponse"])
  },
  methods: {
    ...mapActions(["createBatch"]),
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
    createAppl() {
      this.createBatch({
        fileapplicant: this.file,
        link: this.link,
        date: this.date,
        batch: this.batch,
        instructions: this.instructions
      });
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "AdminDashboard" });
          val.message = "";
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
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
.response {
  text-align: center;
}
.response.failed {
  color: red;
}
.response.success {
  color: green;
}
input {
  border: 1.5px solid #2b3c4e;
}

label {
  color: #2b3c4e;
}

.italic::placeholder {
  font-style: italic !important;
  font-family: Lato;
  color: #cecece;
}

.container {
  display: flex;
  padding: 0;
  min-height: 100vh;
}

.side-bar {
  /* position: absolute; */
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
  z-index: -1; */
}
.alert__message {
  color: red;
  font-size: 12px;
}

h1 {
  margin-bottom: 1.5em;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}

#btn {
  text-align: center;
  margin-top: 2em;
}

.btn {
  width: 40%;
  color: white;
}
button {
  background: #2b3c4e;
  border: none;
  padding: 0.8em 0;
  font-family: Lato;
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