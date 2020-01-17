<template>
  <div class="container">
    <div class="side-bar">
      <SideBar />
    </div>
    <form class="div-form" @submit.prevent="createAppl" enctype="multipart/form-data">
      <p class="alert__message">{{ apiResponse.message }}</p>
      <!-- Page title -->
      <h1>Create Application</h1>

      <div>
        <div class="flex">
          <div>
            <input type="file" id="file" ref="file" />
            <label for="file" class="btn-1">
              <i>+</i>&nbsp;&nbsp;&nbsp; Upload CV
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
            <input class="form-control" type="date" placeholder="dd/mm/yy" v-model="date" />
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
      instructions: ""
    };
  },
  computed: {
    ...mapGetters(["apiResponse"])
  },
  methods: {
    ...mapActions(["createBatch"]),
    createAppl() {
      this.file = this.$refs.file.files[0];
      var allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!this.file) {
        this.alert.message = "Please upload a picture";
      } else if (!allowedTypes.includes(this.file.type)) {
        this.alert.message = "Wrong file type, Please upload a picture";
      } else if (this.file.size > 100000) {
        this.alert.message = "Too large, max size allowed is 100kb";
      } else {
        this.createBatch({
          fileapplicant: this.file,
          link: this.link,
          date: this.date,
          batch: this.batch,
          instructions: this.instructions
        });
      }
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "AdminDashboard" });
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
  border: 1.5px dotted #2b3c4e;
  width: 100%;

  border-radius: 5px;
  color: #2b3c4e;
  cursor: pointer;
  display: inline-block;
  font-family: Avenir;
  font-size: 16px;
  line-height: 22px;

  margin-bottom: 1rem;
  outline: none;
  padding: 1em;
  position: relative;
  transition: all 0.3s;
  vertical-align: middle;
}
i {
  font-size: 20px;
  color: #2b3c4e;
  font-weight: 900;
}
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
  padding-bottom: 10em;
  margin: 0 auto;
  width: 76%;
  /* position: relative; */
}
.alert__message {
  color: red;
  font-size: 12px;
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
  width: 40%;
  color: white;
}
.alert__message {
  color: red;
  font-size: 12px;
}
button {
  background: #2b3c4e;
  border: none;
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