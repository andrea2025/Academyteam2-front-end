<template>
  <div>
    <logo />
    <div class="item pageTitle">
      <h3><i>Applicant Log In</i></h3>
    </div>
    <div class="item">
      <form @submit.prevent="loginFile" class="formBody">
        <div class="form__item__name col text-left">
          <label for="mail">Email Address</label>
          <input type="email" name="mail" class="form-control" />
        </div>

        <div class="form__item__name col text-left">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <button type="submit" class="btn-signup">Sign In</button>
        <div class="alt-signin d-flex  justify-content-between">
          <p>Don’t have an account yet?<router-link to="/"> <a href="">Sign Up</a></router-link></p>
          <p>Forgot Password?</p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import logo from "@/components/logo.vue";
export default {
  name: "UserLogin",
  components: {
    logo
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
@media screen and (max-width: 1000px) {
  .btn-signup {
    padding: 0.5rem 5em;
  }
}
</style>
