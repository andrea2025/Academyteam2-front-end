<template>
    <aside>
     <div class="sidebar">
      <div class="side_bar_content">
        <div class="avatar-wrapper">
          <img class="profile-pic" src="" />
          <div class="upload-button">
            <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </div>
          <input class="file-upload" type="file" accept="image/*" />
        </div>
        <div class="nameAttr">
         <p>{{name}}</p>
           <p>{{email}}</p>
        </div>
      </div> 

      <div class="dashboard mt-4">
        <router-link to="/dashboard"
          ><div class="d-flex">
            <img src="../assets/Group.png" alt="dashboard icon" />
            <p id="dashboard_item">Dashboard</p>
          </div></router-link
        >
        <router-link to="/assessment"
          ><div class="d-flex ">
            <img src="../assets/Vector.png" alt="assessment icon" />
            <p>Assessment</p>
          </div></router-link
        >
        <router-link to="/userlogin"
          ><div class="d-flex mt-4">
            <img src="../assets/Layer.png" alt="logout icon" />
            <p>Log out</p>
          </div></router-link
        >
      </div>
    </div>  
    </aside>
</template>

<script>
import $ from "jquery";
export default {
  name: "sideBar",
   data(){
return{
      name:'jane doe',
      email:'jane@gmal.com'
}

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
.side_bar_content {
  background: #2b3c4e;
  padding: 20px;
  min-height: 50px;
}
/* .sidebar {
  min-height: calc(100vh - 80px);
  color: #fff;
} */
.sidebar {
    min-height: calc(120vh - 80px);
    width: 200%;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
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
</style>