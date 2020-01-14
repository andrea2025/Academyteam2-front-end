<template>
  <div class="container">
    <logo />
    <div class="item pageTitle">
      <h3>Application Form</h3>
    </div>
    <div class="item mt-4">
      <p class="alert__message">{{ apiResponse.message }}</p>
      <form @submit.prevent="sendForm" class="formBody" enctype="multipart/form-data">
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
        <label for="file" class="btn-1">
          <i>+</i>&nbsp;&nbsp;&nbsp; Upload CV
        </label>

        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" class="form-control" v-model="firstName" />
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" class="form-control" v-model="lastName" />
          </div>
        </div>
        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="mail">Email Address</label>
            <input type="email" name="mail" class="form-control" v-model="email" />
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
        <button type="submit" class="btn-signup">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import logo from "@/components/logo.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserForm",
  components: {
    logo
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
      cgpa: ""
    };
  },
  computed: {
    ...mapGetters(["apiResponse"])
  },
  methods: {
    ...mapActions(["sendApp"]),
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    sendForm() {
      this.sendApp({
        file: this.file,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
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
    }
  }
};
</script>
<style scoped>
.pageTitle {
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  text-align: center;
}
.formBody {
  width: 70%;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 20px 40px;
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
