<template>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar" class="navigation">
      <div class="sidebar-header">
        <!-- Profile image display -->
        <div class="avatar-wrapper">
          <img class="profile-pic" src />
          <div class="upload-button">
            <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </div>
          <input class="file-upload" type="file" accept="image/*" />
        </div>

        <div class="head-details">
          <h3>{{AdminDetails.name}}</h3>
          <em>
            <p>{{AdminDetails.email}}</p>
          </em>
        </div>
      </div>

      <ul class="list-unstyled components">
        <li>
          <router-link to="/admindashboard">
            <img src="../assets/dashboard.png" alt />
            <span>Dashboard</span>
          </router-link>
        </li>

        <li>
          <router-link to="/application">
            <img src="../assets/plus.png" alt />
            <span>Create Application</span>
          </router-link>
        </li>

        <li>
          <router-link to="/entries">
            <img src="../assets/icons8-download-50.png" alt />
            <span>Application Entries</span>
          </router-link>
        </li>

        <li>
          <router-link to="/compose">
            <img src="../assets/compose.png" alt />
            <span class="span">Compose Assessment</span>
          </router-link>
        </li>

        <li>
          <router-link to="/history">
            <img src="../assets/history.png" alt />
            <span>Assessment History</span>
          </router-link>
        </li>

        <li>
          <router-link to="/adminresult">
            <img src="../assets/result.png" alt />
            <span>Results</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SideBar",
  data() {
    return {
      name: "",
      email: ""
    };
  },
  computed: {
    ...mapGetters(["AdminDetails"])
  },
  methods: {
    ...mapActions(["getAdminProfile"])
  },
  async mounted() {
    this.getAdminProfile();

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
  }
};
</script>
<style scoped>
.wrapper {
  min-height: 65vw;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  font-family: Lato;
  width: 250px;
  position: absolute;
}

.sidebar-header {
  background: #5abefd;
  padding: 2em 0;
}

.head-details {
  text-align: center;
}

.avatar-wrapper {
  position: relative;
  height: 100px;
  width: 100px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 1px 15px -5px black;
  transition: all 0.3s ease;
}
.avatar-wrapper:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.avatar-wrapper:hover .profile-pic {
  opacity: 0.5;
}
.profile-pic {
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
}
.profile-pic:after {
  font-family: FontAwesome;
  content: "\f007";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 190px;
  background: #ecf0f1;
  color: #34495e;
  text-align: center;
}

.upload-button {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.fa-arrow-circle-up {
  position: absolute;
  font-size: 234px;
  top: -17px;
  left: 0;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease;
  color: #34495e;
}
.upload-button:hover .fa-arrow-circle-up {
  opacity: 0.9;
}

h3 {
  font-family: Lato;
  font-weight: bold;
  color: #2b3c4e;
}

p {
  font-family: Lato;
  color: #2b3c4e;
  font-size: 16px;
  line-height: 19px;
}

ul {
  margin: 2.5em 1.4em 1em 0em;
}

li {
  padding: 0.5em 0;
  margin: 0.2em 0;
  font-family: Lato;
  color: #2b3c4e;
}

li a {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 0 0 3em;
  /* margin-bottom: 1em; */
}

a {
  color: black;
}

a:hover {
  text-decoration: none;
}

.navigation a.router-link-exact-active {
  border-left: 4px solid #31d283;
  height: 49px;
  border-radius: 2px 0 0 2px;
  font-weight: bold;
  color: #2c3e50;
}

span {
  margin-left: 0.7em;
}
</style>