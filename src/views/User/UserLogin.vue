<template>
  <div>
    <logo />
    <div class="item pageTitle">
      <h3>
        <i>Applicant Log In</i>
      </h3>
    </div>
    <div class="item">
      <p class="alert__message">{{ apiResponse.message }}</p>
      <form @submit.prevent="loginFile" class="formBody">
        <div class="form__item__name col text-left">
          <label for="mail">Email Address</label>
          <input type="email" name="mail" class="form-control" v-model="userLogin.email" />
        </div>

        <div class="form__item__name col text-left">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control" v-model="userLogin.password" />
          <i  class="fa fa-eye field-icon toggle-password"></i>
        </div>
        <button type="submit" class="btn-signup">Sign In</button>
        <div class="alt-signin d-flex justify-content-between">
          <p>
            Don’t have an account yet?
            <router-link to="/">
              <a href>Sign Up</a>
            </router-link>
          </p>
          <p>Forgot Password?</p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import logo from "@/components/logo.vue";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";

export default {
  name: "UserLogin",
  components: {
    logo
  },
  data() {
    return {
      userLogin: {}
    };
  },
  computed: {
    ...mapGetters(["apiResponse"])
  },
  methods: {
    ...mapActions(["loginUser"]),
    loginFile() {
      this.loginUser(this.userLogin);
    }
  },
  mounted(){
    $(function(){
  
  $('.toggle-password').click(function(){
       
        if($(this).hasClass('fa-eye-slash')){
           
          $(this).removeClass('fa-eye-slash');
          
          $(this).addClass('fa-eye');
          
          $('#password').attr('type','text');
            
        }else{
         
          $(this).removeClass('fa-eye');
          
          $(this).addClass('fa-eye-slash');  
          
          $('#password').attr('type','password');
        }
    });
});
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push("/userform");
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
  width: 30%;
  margin: auto;
}
label {
  margin-top: 2em;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.btn-signup {
  margin-top: 2em;
  padding: 0.5rem 17em;
  border: none;
  background: #2b3c4e;
  border-radius: 4px;
  color: #ffff;
  font-weight: bold;
  font-size: 14px;
}
.alt-signin {
  color: #4f4f4f;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin: 1rem;
}
a {
  color: #4f4f4f;
  text-decoration: underline;
}
.field-icon {
  float: right;
  margin-right:1em;
  margin-top: -25px;
  position: relative;
  z-index: 2;
  cursor:pointer;
opacity: 0.4;
}
@media screen and (max-width: 1000px) {
  .btn-signup {
    padding: 0.5rem 5em;
  }
}
</style>
