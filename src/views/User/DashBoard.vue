<template>
  <div class="container">
    <div class="side-bar">
      <sideBar class="side-nav lato" />
    </div>

    <div class="mainContent">
      <h1 class="mainContent_text">Dashboard</h1>

      <!-- application response fron the backend -->
      <h6
        class="lato mt-4"
      >Your Application is currently being review, you wil be notified if successful</h6>

      <div class="d-flex status_update lato">
        <div>
          <p class="color">Date of Application</p>
          <div class="appDate lato">{{date}}</div>
          <div class="borderB"></div>
          <p class="color daySince">{{day}} days since applied</p>
        </div>
        <div class="status">
          <p class="color">Application Status</p>
          <h5 class="appDate lato">Pending</h5>
          <div class="borderP"></div>
          <p class="color daySince">We will get back to you</p>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-5 lato">
        <div class="update_item">
          <h3>Updates</h3>
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        <div class="update_item">
          <h3>Take Assessment</h3>
          <div class="content">
            <div>
              <p>
                We have 0 days left until the next assessment
                <br />Watch this space
              </p>
            </div>
            <div>
              <router-link to="/assessment">
                <button class="lato">Take Assessment</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";
import sideBar from "../../components/sideBarUser";

export default {
  name: "DashBoard",
  components: {
    sideBar
  },
  data() {
    return {
      date: "",
      day: ""
    };
  },
  async mounted() {
    await this.getUserProfile();

    var created = await this.userProfile.created.slice(0, 10);
    this.date = await created.replace(/-/g, ".");

    var days = await new Date(this.userProfile.created);
    var daySince = await Date.now() - days.getTime();
    this.day = await Math.floor(daySince / (24 * 60 * 60 * 1000));

    $(document).ready(function() {
      var readURL = function(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function(e) {
            $(".profile-pic").attr("src", e.target.result);
          };

          reader.readAsDataURL(input.files[0]);
        }
      };

      $(".file-upload").on("change", function() {
        readURL(this);
      });

      $(".upload-button").on("click", function() {
        $(".file-upload").click();
      });
    });
  },
  computed: {
    ...mapGetters(["userProfile"])
  },
  methods: {
    ...mapActions(["logoutPerson", "getUserProfile"]),
    logoutUser() {
      this.logoutPerson();
      this.$router.push({ name: "home" });
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
  width: 28.1%;
}

.side-nav {
  height: 100%;
  padding: 0 0 2em 0;
}

.mainContent {
  margin: 4em auto 0;
  width: 100%;
  min-width: 1000px;
  padding: 0 2em 2em;
  color: #2b3c4e;
  padding-left: 20rem;
  position: absolute;
  z-index: -1;
}

.lato {
  font-family: Lato;
}

h1 {
  font-weight: 300;
}

em {
  font-weight: 600;
  color: #2b3c4e;
}

.status_update {
  margin-top: 6em;
  font-size: 14px;
  line-height: 17px;
}
.status {
  padding-left: 13em;
}
.update_item h3 {
  color: #2b3c4e;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
}
.color {
  color: #4f4f4f;
  font-size: 15px;
}
.daySince {
  padding-top: 0.5rem;
}
.appDate {
  font-style: normal;
  font-weight: 300;
  font-size: 45px;
  line-height: 58px;
}
.appDate h4 {
  margin: 0;
  line-height: 0%;
}
.borderB {
  padding-top: 0.7rem;
  width: 170px;
  border-bottom: 4px solid #006df0;
}
.borderP {
  width: 170px;
  border-bottom: 4px solid #f09000;
}
.update_item {
  border: 1px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
  width: 45%;
}

hr {
  border: 1px solid #cecece;
  margin: 4em 0;
}

.content {
  text-align: center;
  width: 90%;
  margin: 8em auto;
}

button {
  padding: 0.3em 2em;
  background: #b1b1b1;
  color: white;
  border-radius: 4px;
  border: none;
}
</style>