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
          <h3>{{userProfile.firstName ||" "}} {{userProfile.lastName||" "}}</h3>
          <em>
            <p>{{userProfile.email || " "}}</p>
          </em>
        </div>
      </div>
      <ul class="list-unstyled components">
        <li>
          <router-link to="/dashboard">
            <img src="../assets/Group.png" alt="dashboard icon" />
            <span>Dashboard</span>
          </router-link>
        </li>

        <li>
          <router-link to="/assessment">
            <img src="../assets/Vector.png" alt="assessment icon" />
            <span>Assessment</span>
          </router-link>
        </li>

        <li class="logout-margin" @click="logout">
          <router-link to>
            <img src="../assets/Layer.png" alt="logout icon" />
            <span>Log out</span>
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
  name: "sideBar",
  data() {
    return {
      name: "",
      email: ""
    };
  },
  computed: {
    ...mapGetters(["userProfile"])
  },
  methods: {
    ...mapActions(["logoutUser", "getUserProfile"]),
    logout() {
      this.logoutUser();
      this.$router.push("/");
    }
  },
  async mounted() {
    this.getUserProfile();

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
  min-height: 88vw;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  font-family: Lato;
  width: 250px;
}

.sidebar-header {
  background: #2b3c4e;
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
  color: white;
}

p {
  color: white;
}

/* ul {
  margin: 1em 1.4em 1em 0;
} */

ul {
  margin: 1.4em 1.4em 1em 0em;
}

li a {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 0 0 3em;
  /* margin-bottom: 1em; */
}

li {
  padding: 0.5em 0;
  margin: 0.2em 0;
  font-family: Lato;
  color: #2b3c4e;
}
/* li a {
  display: flex;
  align-items: center;
  padding: 0 0 0 1em;
  margin-bottom: 1em;
} */

.logout-margin {
  margin-top: 3em;
}

a {
  color: #2b3c4e;
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

/* .navigation a.router-link-exact-active {
  border-left: 4px solid #31d283;
  border-radius: 2px 0 0 2px;
  font-weight: bold;
  color: #2c3e50;
} */

span {
  margin-left: 0.7em;
}
</style>