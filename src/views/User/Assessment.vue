<template>
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
            <img class="image-icon" src="../../assets/Group.png" alt="dashboard icon" />
            <p id="dashboard_item">Dashboard</p>
          </div>
        </router-link>
        <router-link to="/assessment">
          <div class="d-flex">
            <img class="image-icon" src="../../assets/Vector.png" alt="assessment icon" />
            <p>Assessment</p>
          </div>
        </router-link>
        <router-link to="/userlogin">
          <div class="d-flex mt-4">
            <img class="image-icon" src="../../assets/Layer.png" alt="logout icon" />
            <p>Log out</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="mainContent">
      <div class="d-flex justify-content-between">
        <div>
          <h2 class="mainContent_text">Take Assessment</h2>

          <p class="resp mt-4 resp-part">
            Click the button below to start assessment, you have limited time
            for this test
          </p>
          <!-- <p class="resp mt-4 text-msg">Thank you!</p> -->
        </div>

        <div class="mainContent_text mr-4">
          <section id="app" class="hero">
            <div class="hero-body">
              <div class="container">
                <h6 class="title text-left">{{ title }}</h6>

                <div id="timer">
                  <span id="minutes">
                    {{ minutes }}
                    <small>mins</small>
                  </span>
                  <span id="seconds">
                    {{ seconds }}
                    <small>secs</small>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="assessment-section resp-part">
        <div>
          <svg
            width="80"
            height="72"
            viewBox="0 0 60 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-5"
          >
            <path
              d="M58.8 69.6H55.2V64.8H49.2V52.5336C49.2 49.2936 47.5896 46.284 44.8932 44.4864L32.1636 36L44.8932 27.5136C47.5896 25.716 49.2 22.7064 49.2 19.4664V7.2H55.2V2.4H58.8C59.4624 2.4 60 1.8636 60 1.2C60 0.5364 59.4624 0 58.8 0H55.2H54H6H4.8H1.2C0.5376 0 0 0.5364 0 1.2C0 1.8636 0.5376 2.4 1.2 2.4H4.8V7.2H10.8V19.4664C10.8 22.7064 12.4104 25.716 15.1068 27.5136L27.8364 36L15.1068 44.4864C12.4104 46.284 10.8 49.2936 10.8 52.5336V64.8H4.8V69.6H1.2C0.5376 69.6 0 70.1364 0 70.8C0 71.4636 0.5376 72 1.2 72H4.8H6H54H55.2H58.8C59.4624 72 60 71.4636 60 70.8C60 70.1364 59.4624 69.6 58.8 69.6ZM16.4376 25.5168C14.4108 24.1644 13.2 21.9024 13.2 19.4664V7.2H46.8V19.4664C46.8 21.9024 45.5892 24.1644 43.5624 25.5168L30 34.5576L16.4376 25.5168ZM13.2 52.5336C13.2 50.0976 14.4108 47.8356 16.4376 46.4832L30 37.4424L43.5624 46.4832C45.5892 47.8356 46.8 50.0976 46.8 52.5336V64.8H13.2V52.5336Z"
              fill="#2B3C4E"
            />
            <g clip-path="url(#clip--hourglass)">
              <rect x="9" rx="10" id="sand" width="40" height="20" fill="#10dbb3" stroke="#2B3C4E" />
            </g>
          </svg>
        </div>
        <!-- //api response -->
        <p class="pt-3">
          We have 4 days left until the next assessment
          <br />Watch this space
        </p>
        <button type="submit" class="btn-test" v-if="!timer" @click="beginTimer">Take Assessment</button>
      </div>

      <div
        class="questionArea image-group assessment-section"
        v-for="(question, index) in getAssessments"
        :key="index"
        v-show="index === questionIndex"
      >
        <div class="question">
          <p>Question {{index + 1}}</p>
          <h5>
            <i>{{question.question}}</i>
          </h5>
        </div>
        <div class="questionOptions" v-for="(o, index) in question.options" :key="index">
          <input type="radio" :id="index" :value="o" v-model="answer" />
          <label :for="index">{{" " + o }}</label>
          <br />
          <!-- <input type="radio" id="two" value="1" v-model="answers" />
          <label for="two">B: {{question.options[1]}}</label>
          <br />
          <input type="radio" id="three" value="2" v-model="answers" />
          <label for="three">C: {{question.options[2]}}</label>
          <br />
          <input type="radio" id="four" value="3" v-model="answers" />
          <label for="four">D: {{question.options[3]}}</label>-->
        </div>
        <div class="questionArea">
          <div class="questionNav">
            <div class>
              <button class="btn-prev" v-if="questionIndex > 0" @click="prevQ">Prev</button>
            </div>
            <div class>
              <button
                class="btn-next"
                v-if="questionIndex < getAssessments.length -1"
                @click="nextQ"
              >Next</button>
            </div>
          </div>
          <button class="btn-submit" @click="sendAnswer">Submit</button>
        </div>
      </div>
      <!-- <div class="image-group assessment-section">
        <div class="image_wrapper">

          v-show="questionIndex === getAssessments.length - 1"

          <img src="../../assets/victory.png" alt="congratulaton_icon" />
        </div>
        <p class="image_text mt-4">
          We have received your assessment test, we will get back to you soon.
          <span>Best of luck</span>
        </p>
        <router-link to="/">
          <button class="homePage mt-4">Home</button>
        </router-link>
      </div>-->
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Assessment",
  data() {
    return {
      timer: 0,
      totalTime: 4 * 60,
      title: "Timer",
      questionIndex: 0,
      qArray: [],
      answer: "",
      userTest: {
        questions: [],
        answers: []
      }
    };
  },
  methods: {
    ...mapActions(["getAssessment"]),
    beginTimer() {
      this.getAssessment();
      this.startTimer();
    },
    sendAnswer() {
      this.stopTimer();
      for (let q in this.qArray) {
        console.log(q._id);
        this.userTest.questions.push(q._id);
      }
      console.log(this.userTest);
      this.$router.push("/result");
    },
    prevQ() {
      this.userTest.answers.pop(this.answer);
      this.questionIndex--;
    },
    nextQ() {
      this.userTest.answers.push(this.answer);
      this.questionIndex++;
    },
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.title = "Start test!!";
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.title = "Time has elasped!!";
    },
    // resetTimer: function() {
    //   this.totalTime = 4 * 60;
    //   clearInterval(this.timer);
    //   this.timer = null;
    //   this.resetButton = false;
    //   // this.title = "Let the countdown begin!!"
    // },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.sendAnswer();
      }
    }
  },
  computed: {
    ...mapGetters(["getAssessments", "profileDetails"]),

    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  },

  async mounted() {
    this.qArray = this.getAssessments;
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
  color: #144a80;
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
#dashboard_item {
  font-weight: bold;
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
.image-icon {
  height: 15px;
  margin-top: 2px;
  margin-right: 2em;
}
.mainContent {
  text-align: left;
  color: #2b3c4e;
  margin-left: 2em;
}
.resp {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}
.mainContent_text {
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  padding-top: 2.5em;
  font-style: normal;
}
.status_update {
  margin-top: 6em;
  font-size: 14px;
  line-height: 17px;
}
.status {
  margin-left: 8em;
}
.update_item h3 {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
}
.update_item {
  border: 1px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
  width: 45%;
}
.assessment-section {
  margin-top: 6em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.hourglass-icon {
  margin-left: 6em;
}
.btn-test {
  margin-top: 1em;
  padding: 0.5rem 2em;

  background: #b1b1b1;
  border-radius: 4px;
  color: #ffff;
  font-weight: bold;
  font-size: 14px;
}
#timer span {
  font-size: 38px;
}
#timer small {
  font-size: 12px;
}
.title {
  font-size: 14px;
  text-align: left;
}
#sand {
  animation: moveSand 6s ease-in-out infinite;
}
@keyframes rotateHourglass {
  95% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
@keyframes moveSand {
  95%,
  100% {
    transform: translateY(50px);
  }
}
.homePage {
  background: #31d283;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  padding: 0.5rem 5em;
  margin-left: 10em;
}

.image_wrapper {
  margin-left: 11em;
}
.image_text {
  text-align: center;
  width: 120%;
}
/* .image_text span{
  
  text-indent: -10em;
} */
</style>
