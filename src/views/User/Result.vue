<template>
  <div>
    <div class="side">
      <div class="sideBar">
        <div class="side_bar_content">
          <div class="avatar-wrapper">
            <img class="profile-pic" src />
            <div class="upload-button">
              <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
            </div>
            <input class="file-upload" type="file" accept="image/*" />
          </div>
          <div class="nameAttr">
            <p>{{profileDetails.firstName}}</p>
            <p>{{profileDetails.email}}</p>
          </div>
        </div>

        <div class="dashboard mt-4">
          <router-link to="/dashboard">
            <div class="d-flex">
              <img src="../../assets/Group.png" alt="dashboard icon" />
              <p id="dashboard_item">Dashboard</p>
            </div>
          </router-link>
          <router-link to="/assessment">
            <div class="d-flex">
              <img src="../../assets/Vector.png" alt="assessment icon" />
              <p>Assessment</p>
            </div>
          </router-link>
          <router-link to="/userlogin">
            <div class="d-flex mt-4">
              <img src="../../assets/Layer.png" alt="logout icon" />
              <p>Log out</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="image-group assessment-section">
      <div class="image_wrapper">
        <img src="../../assets/victory.png" alt="congratulaton_icon" />
      </div>
      <p class="image_text mt-4">
        We have received your assessment test, we will get back to you soon.
        <span>Best of luck</span>
      </p>
      <router-link to="/dashboard">
        <button class="homePage mt-4">Home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters } from "vuex";

export default {
  name: "ResultUser",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["profileDetails"])
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
.side {
  display: grid;
  grid-template-columns: 300px auto;
  min-height: calc(120vh - 80px);
}
.sideBar {
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
}
.side_bar_content {
  background: #2b3c4e;
  padding: 20px;
  min-height: 50px;
}

.avatar-wrapper {
  position: relative;
  height: 100px;
  width: 100px;
  margin: 50px auto;
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
.nameAttr {
  color: #fff;
}

.dashboard {
  color: #2b3c4e;
  margin-left: 2em;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}
.dashboard a {
  color: #2b3c4e;
  text-decoration: none;
}

.dashboard a.router-link-exact-active {
  color: #2b3c4e;
  font-weight: bold;
}
img {
  height: 15px;
  margin-top: 2px;
  margin-right: 2em;
}
</style>