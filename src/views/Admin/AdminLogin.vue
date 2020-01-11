<template>
  <div class="container">
    <div class="wrapper">
      <div class="head">
        <div>
          <img src="../../assets/enyata-w-logo.svg" alt />
        </div>
        <div>
          <h1>enyata</h1>
          <em>
            <p>Admin Log In</p>
          </em>
        </div>
      </div>

      <div class="bottom">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" class="btn btn-primary">Sign In</button>

          <router-link to="#">
            <span>Forgot Password ?</span>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  components: {}
};
</script>

<style scoped>
.container {
  background: url("../../assets/Background-image.png");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  color: white;
  font-family: Lato;
  display: flex;
  align-items: center;
}

.wrapper {
  width: 35%;
  margin: 0 auto;
}

input {
  background: #111e2b;
  border: 1px solid white;
  color: white;
}

.btn {
  width: 100%;
  background: white;
  color: #111e2b;
  border: none;
}

.head {
  text-align: center;
}

span {
  font-size: 0.7em;
  float: right;
  padding: 0.8em 0;
  color: white;
}
</style>