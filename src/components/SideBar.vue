<template>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar">
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
          <h3>{{name}}</h3>
          <em>
            <p>{{email}}</p>
          </em>
        </div>
      </div>

      <ul class="list-unstyled components">
        <li class="active">
          <img src="../assets/dashboard.png" alt />
          <router-link to="/Dashboard">
            <span>Dashboard</span>
          </router-link>
        </li>

        <li>
          <img src="../assets/plus.png" alt />
          <router-link to="/Create-Application">
            <span>Create Application</span>
          </router-link>
        </li>

        <li>
          <router-link to="/Application-Entries">
            <img src="../assets/icons8-download-50.png" alt />
            <span>Application Entries</span>
          </router-link>
        </li>

        <li>
          <img src="../assets/compose.png" alt />
          <router-link to="/Compose-Assessment">
            <span class="span">Compose Assessment</span>
          </router-link>
        </li>

        <li>
          <img src="../assets/history.png" alt />
          <router-link to="/Assessment-History">
            <span>Assessment History</span>
          </router-link>
        </li>

        <li>
          <img src="../assets/result.png" alt />
          <router-link to="/Results">
            <span>Results</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "SideBar",
  data() {
    return {
      name: "John Doe",
      email: "j.doe@gmal.com"
    };
  },

  mounted() {
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
  min-height: 100vh;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  font-family: Lato;
}

.sidebar-header {
  background: #5abefd;
  padding: 2em 0;
}

.head-details {
  text-align: center;
}

/* .components img {
  padding: 0 1em 0 2em;
} */

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

ul {
  padding: 1em;
}

li {
  display: flex;
  align-items: center;
  padding: 0 0 1em 0;
}

a {
  color: black;
}

span {
  padding: 0 0 0 1em;
}

@media screen and (max-width: 600px) {
}
</style>