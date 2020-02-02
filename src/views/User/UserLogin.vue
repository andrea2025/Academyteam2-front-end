<template>
  <div>
    <div class="head">
      <div>
        <img src="../../assets/enyata_logo.png" alt />
      </div>
      <div>
        <h2 class="logoName">enyata</h2>
        <h3>Applicant Log In</h3>
      </div>
    </div>

    <div class="item">
      <form @submit.prevent="loginFile" class="formBody">
        <p class="response" :class="[apiResponse ? apiResponse.type: '']">{{ apiResponse.message }}</p>
        <div class="form__item__name col text-left">
          <label for="mail">Email Address</label>
          <input type="email" name="mail" class="form-control" v-model="userLogin.email" />
        </div>

        <div class="form__item__name col text-left">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control" v-model="userLogin.password" />
          <i class="fa fa-eye field-icon toggle-password"></i>
        </div>
        <div class="col" id="submit-btn">
          <button type="submit" class="btn-signup">Sign In</button>
        </div>
        <div class="alt-signin d-flex justify-content-between">
          <p>
            Don’t have an account yet?
            <router-link to="/">
              <a href>Sign Up</a>
            </router-link>
          </p>
          <router-link to='/forgot' >
            <p>Forgot Password?</p>
          </router-link>
          
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";

export default {
  name: "UserLogin",
  components: {},
  data() {
    return {
      userLogin: {}
    };
  },
  computed: {
    ...mapGetters(["apiResponse", "entryStatus"])
  },
  methods: {
    ...mapActions(["loginUser"]),
    loginFile() {
      this.loginUser(this.userLogin);
    }
  },
  mounted() {
    $(function() {
      $(".toggle-password").click(function() {
        if ($(this).hasClass("fa-eye-slash")) {
          $(this).removeClass("fa-eye-slash");

          $(this).addClass("fa-eye");

          $("#password").attr("type", "text");
        } else {
          $(this).removeClass("fa-eye");

          $(this).addClass("fa-eye-slash");

          $("#password").attr("type", "password");
        }
      });
    });
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          if (this.entryStatus) {
            this.$router.push("/dashboard");
          } else {
            this.$router.push("/userform");
          }
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
div > img {
  margin-top: 3em;
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
  width: 30%;
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
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
  border: none;
  background: #2b3c4e;
  border-radius: 4px;
  color: #ffff;
  font-family: Lato;
  font-weight: bold;
  font-size: 14px;
}
.alt-signin {
  font-family: Lato;
  color: #4f4f4f;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin: 1rem;
}
#submit-btn {
  margin: 1em auto;
  text-align: center;
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
@media screen and (max-width: 1000px) {
  .btn-signup {
    padding: 0.5rem 5em;
  }
}
</style>
