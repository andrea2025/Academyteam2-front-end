<template>
  <div class="container">
    <div class="head">
      <div>
        <img src="../../assets/enyata_logo.png" alt />
      </div>
      <div>
        <h2 class="logoName">enyata</h2>
        <h3>Applicant Sign Up</h3>
      </div>
    </div>

    <div class="item">
      <p class="alert__message">{{ apiResponse.message }}</p>
      <form @submit.prevent="sendFile" class="formBody">
        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" class="form-control" v-model="newUser.firstName" />
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" class="form-control" v-model="newUser.lastName" />
          </div>
        </div>
        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="mail">Email Address</label>
            <input type="email" name="mail" class="form-control" v-model="newUser.email" />
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="phone">Phone Number</label>
            <input type="number" name="phone" class="form-control" v-model="newUser.phone" />
          </div>
        </div>
        <div class="form__item form-row">
          <div class="form__item__name col text-left">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              class="form-control password-icon"
              v-model="newUser.password"
            />
            <i class="fa fa-eye field-icon toggle-password"></i>
          </div>
          <div class="form__item__name col text-left ml-5">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              class="form-control password-icon"
              v-model="confirmPassword"
            />
            <i class="fa fa-eye field-icon toggle-password"></i>
          </div>
        </div>
        <div id="submit-btn">
          <button type="submit" class="btn-signup">Sign Up</button>
        </div>
        <div class="alt-signin">
          <p>
            Already have an account?
            <router-link to="/userlogin">
              <a href>Sign in</a>
            </router-link>
          </p>
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
  name: "ApplicantSignUp",
  components: {},
  data() {
    return {
      newUser: {},
      confirmPassword: ""
    };
  },
  computed: {
    ...mapGetters(["apiResponse"])
    // apiResponse: {
    //   message: ""
    // }
  },
  mounted() {
    $(function() {
      $(".toggle-password").click(function() {
        if ($(this).hasClass("fa-eye-slash")) {
          $(this).removeClass("fa-eye-slash");

          $(this).addClass("fa-eye");

          $(".password-icon").attr("type", "text");
        } else {
          $(this).removeClass("fa-eye");

          $(this).addClass("fa-eye-slash");

          $(".password-icon").attr("type", "password");
        }
      });
    });
  },
  methods: {
    ...mapActions(["createUser"]),
    sendFile() {
      if (this.confirmPassword !== this.newUser.password) {
        // this.apiResponse.message = "Passwords don't match";
      } else {
        this.createUser(this.newUser);
      }
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push("/userlogin");
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
}

div > img {
  margin-top: 3em;
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
}
.alert__message {
  color: red;
  font-size: 12px;
}
label {
  margin-top: 2em;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.btn-signup {
  margin-top: 2em;
  padding: 0.5rem 10em;
  width: 50%;
  background: #2b3c4e;
  border-radius: 4px;
  color: #ffff;
  font-weight: bold;
  font-size: 14px;
}
.alt-signin {
  text-align: center;
  /* margin-top: 0.2; */
  color: #4f4f4f;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  border: none;
}
a {
  color: #4f4f4f;
  text-decoration: underline;
}
.field-icon {
  float: right;
  margin-right: 1em;
  margin-top: -25px;
  position: relative;
  z-index: 2;
  cursor: pointer;
  opacity: 0.4;
}

#submit-btn {
  margin: 1em auto;
  text-align: center;
}

button {
  border: none;
  outline: none;
}
</style>
