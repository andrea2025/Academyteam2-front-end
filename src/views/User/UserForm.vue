<template>
  <div class="container">
    <div class="head">
      <div>
        <img src="../../assets/enyata_logo.png" alt />
      </div>
      <div>
        <h2 class="logoName">enyata</h2>
        <h3>Application Form</h3>
      </div>
    </div>
    <div class="item mt-4">
      <span class="response" :class="[apiResponse ? apiResponse.type: '']">{{ apiResponse.message }}</span>
      <span class="alert__message">{{alert.message}}</span>
      <form @submit.prevent="sendForm" class="formBody" enctype="multipart/form-data">
        <div class="file__input">
          <input
            type="file"
            id="file"
            ref="file"
            class="file-upload"
            v-on:change="handleFileUpload()"
          />
          <label for="file" class="btn-1">
            <b>+</b>&nbsp;&nbsp;&nbsp; Upload CV
          </label>
        </div>

        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              class="form-control"
              v-model="userProfile.firstName"
            />
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" class="form-control" v-model="userProfile.lastName" />
          </div>
        </div>
        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="mail">Email Address</label>
            <input type="email" name="mail" class="form-control" v-model="userProfile.email" />
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="dob">Date of Birth</label>
            <input type="date" name="dob" class="form-control" v-model="birthday" />
          </div>
        </div>
        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="Address">Address</label>
            <input type="Address" name="Address" class="form-control" v-model="address" />
            {{userProfile.address}}
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="University">University</label>
            <input type="text" name="University" class="form-control" v-model="school" />
          </div>
        </div>
        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="course">Course of Study</label>
            <input type="course" name="course" class="form-control" v-model="courseOfStudy" />
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="cgpa">CGPA</label>
            <input type="number" name="cgpa" class="form-control" v-model="cgpa" />
          </div>
        </div>
        <div id="submit-btn">
          <button type="submit" class="btn-signup">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// import logo from "@/components/logo.vue";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  name: "UserForm",
  components: {
    // logo
  },
  data() {
    return {
      file: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      birthday: "",
      school: "",
      courseOfStudy: "",
      cgpa: "",
      alert: {
        message: ""
      }
    };
  },
  computed: {
    ...mapGetters(["apiResponse", "userProfile"])
  },
  async mounted() {
    await this.getUserProfile();
  },
  methods: {
    ...mapActions(["sendApp", "getUserProfile"]),
    handleFileUpload: function() {
      var fileName = this.$refs.file.files[0].name;
      this.file = this.$refs.file.files[0];
      var allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      if (!this.file) {
        this.alert.message = "Please upload a file (pdf/doc)";
      } else if (!allowedTypes.includes(this.file.type)) {
        this.alert.message = "Wrong file type, Please upload a file";
      } else if (this.file.size > 1000000) {
        this.alert.message = "Too large, max size allowed is 1MB";
      } else {
        this.alert.message = "";
        $(".btn-1").text(fileName);
      }
    },
    sendForm() {
      this.sendApp({
        file: this.file,
        firstName: this.userProfile.firstName,
        lastName: this.userProfile.lastName,
        email: this.userProfile.email,
        address: this.address,
        birthday: this.birthday,
        school: this.school,
        courseOfStudy: this.courseOfStudy,
        cgpa: this.cgpa
      });
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push("/dashboard");
          val.message = "";
        }, 1000);
      }
    },
    alert(val) {
      if (val.message) {
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
  /* padding: 0; */
  margin: 2em;
  min-height: 100vh;
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
.head {
  text-align: center;
  margin-top: 3em;
}
.logoName {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 31.3954px;
  line-height: 38px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

h3 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
}

.formBody {
  width: 70%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 20px 40px;
}
.alert__message {
  color: red;
  text-align: center;
  font-size: 12px;
}
.file__input {
  text-align: center;
}
.file-upload {
  margin: 0.7em auto;
  text-align: center;
}

input {
  background: #ffffff;
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
}
label {
  margin-top: 2em;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}

#submit-btn {
  margin: 1.5em auto;
  text-align: center;
}

.btn-signup {
  margin-top: 2em;
  padding: 0.5rem 10em;
  width: 50%;
  background: #2b3c4e;
  border: none;
  border-radius: 4px;
  color: #ffff;
  font-weight: bold;
  font-size: 14px;
}
.alt-signin {
  margin-top: 0.5rem;
  color: #4f4f4f;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
a {
  color: #4f4f4f;
  text-decoration: underline;
}

[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}

[type="file"] + label {
  border: 1.5px dashed #2b3c4e;

  border-radius: 5px;
  color: #2b3c4e;
  cursor: pointer;
  display: inline-block;
  font-family: Avenir;
  font-size: 16px;
  line-height: 22px;

  margin-bottom: 1rem;
  outline: none;
  padding: 0.5rem 50px;
  position: relative;
  transition: all 0.3s;
  vertical-align: middle;
}
i {
  font-size: 20px;
  color: #2b3c4e;
  font-weight: 900;
}
</style>
