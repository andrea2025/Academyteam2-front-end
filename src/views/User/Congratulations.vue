<template>
  <div class="container">
    <div class="side-bar">
      <sideBar class="side-nav lato" />
    </div>

    <div class="mainContent">
      <div class="content-container">
        <div>
          <h1 class="mainContent_text">Take Assessment</h1>

          <p class="lato mt-4 resp-part">
            <em>Thank you!</em>
          </p>
        </div>
        <div class="time-indicator lato">
          <p class="title">{{ title }}</p>

          <span id="minutes">
            {{ minutes }}
            <small>min</small>
          </span>
          <span id="seconds">
            {{ seconds }}
            <small>sec</small>
          </span>
        </div>
      </div>

      <div class="content-container2">
        <div>
          <img src="../../assets/victory.png" alt="congratulaton_icon" />
        </div>

        <div>
          <p>
            We have received your assessment test, we will get back to you soon.
            <br />Best of luck
          </p>
        </div>

        <div>
          <router-link to="/dashboard">
            <button class="homePage mt-4 lato">Home</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import sideBar from "../../components/sideBarUser";
export default {
  name: "Congratulations",
  components: {
    sideBar
  },
  data() {
    return {
      name: "jane doe",
      email: "jane@gmal.com",
      timer: null,
      totalTime: 4 * 60,
      resetButton: false,
      title: "Timer"
    };
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.title = "Start test!!";
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
      this.title = "Time has elasped!!";
    },
    resetTimer: function() {
      this.totalTime = 4 * 60;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      // this.title = "Let the countdown begin!!"
    },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    }
  },
  // ========================
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return "0" + this.padTime(seconds);
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

    $(document).ready(function() {
      $(".image-wrapper").hide();
      $(".resp-part").show();
      $("text-msg").hide();

      $(".btn-test").on("click", function() {
        $(".resp-part").hide();
        $("text-msg").show();
        $(".image-wrapper")
          .animate({
            opacity: "1",
            height: "toggle"
          })
          .show();
      });
    });
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
  padding: 0 3em 2em;
  color: #2b3c4e;
}

.content-container {
  display: flex;
  justify-content: space-between;
  line-height: 15px;
}

.time-indicator span {
  font-size: 2em;
  font-weight: 300;
}

small {
  font-size: 10px;
  font-weight: 100;
}

.content-container2 {
  text-align: center;
  align-items: center;
  padding: 7em 0;
}

.content-container2 div {
  padding: 0.3em 0;
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

button {
  padding: 0.3em 3em;
  background: #31d283;
  color: white;
  border-radius: 4px;
  border: none;
}
</style>
