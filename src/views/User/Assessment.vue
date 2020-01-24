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
            <em>Click the button below to start assessment, you have limited time for this test</em>
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

      <div class="content-container2 resp-part">
        <div>
          <svg
            width="60"
            height="65"
            viewBox="0 0 70 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-5"
          >
            <path
              d="M58.8 69.6H55.2V64.8H49.2V52.5336C49.2 49.2936 47.5896 46.284 44.8932 44.4864L32.1636 36L44.8932 27.5136C47.5896 25.716 49.2 22.7064 49.2 19.4664V7.2H55.2V2.4H58.8C59.4624 2.4 60 1.8636 60 1.2C60 0.5364 59.4624 0 58.8 0H55.2H54H6H4.8H1.2C0.5376 0 0 0.5364 0 1.2C0 1.8636 0.5376 2.4 1.2 2.4H4.8V7.2H10.8V19.4664C10.8 22.7064 12.4104 25.716 15.1068 27.5136L27.8364 36L15.1068 44.4864C12.4104 46.284 10.8 49.2936 10.8 52.5336V64.8H4.8V69.6H1.2C0.5376 69.6 0 70.1364 0 70.8C0 71.4636 0.5376 72 1.2 72H4.8H6H54H55.2H58.8C59.4624 72 60 71.4636 60 70.8C60 70.1364 59.4624 69.6 58.8 69.6ZM16.4376 25.5168C14.4108 24.1644 13.2 21.9024 13.2 19.4664V7.2H46.8V19.4664C46.8 21.9024 45.5892 24.1644 43.5624 25.5168L30 34.5576L16.4376 25.5168ZM13.2 52.5336C13.2 50.0976 14.4108 47.8356 16.4376 46.4832L30 37.4424L43.5624 46.4832C45.5892 47.8356 46.8 50.0976 46.8 52.5336V64.8H13.2V52.5336Z"
              fill="#2B3C4E"
            />
            <g clip-path="url(#clip--hourglass)">
              <rect x="9" rx="10" id="sand" width="40" height="15" fill="#10dbb3" stroke="#2B3C4E" />
            </g>
          </svg>
        </div>
        <!-- //api response -->
        <p
          class="response"
          :class="[apiResponse ? apiResponse.type: '']"
          v-if="apiResponse.message"
        >{{ apiResponse.message }}</p>
        <div v-else>
          <p class="pt-3 lato">
            We have 4 days left until the next assessment
            <br />Watch this space
          </p>
          <button
            type="submit"
            class="btn-test lato"
            v-if="!timer"
            @click="beginTimer"
          >Take Assessment</button>
        </div>
      </div>

      <div
        class="image-group text-msg"
        v-for="(question, index) in getAssessments"
        :key="index"
        v-show="index === questionIndex"
      >
        <div class="question" v-show="index === questionIndex">
          <div class="questionBody">
            <p>Question {{index + 1}}</p>
            <h5>
              <i>{{question.question}}</i>
            </h5>
            <div class="questionOptions">
              <div class v-for="(o, index) in question.options" :key="index">
                <input type="radio" :id="index" :value="o" v-model="answer" />
                <label :for="index">{{" " + o }}</label>
                <br />
              </div>
            </div>
          </div>
          <div class="questionButtons">
            <div class="questionNav">
              <div class>
                <button class="btn-prev" :disabled="questionIndex <= 0" @click="prevQ">Prev</button>
              </div>
              <div class>
                <button
                  class="btn-next"
                  :disabled="!(questionIndex < getAssessments.length - 1)"
                  @click="nextQ"
                >Next</button>
              </div>
            </div>
            <button
              class="btn-submit"
              :disabled="questionIndex !== getAssessments.length - 1"
              @click="sendAnswer"
            >Submit</button>
          </div>
        </div>
      </div>
      <!-- <div class="finishMessage" v-if="questionIndex === getAssessments.length">
          <h3>Thank You for completing the Assessment. Click to Submit your answers</h3>
      </div>-->
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";
import sideBar from "../../components/sideBarUser";

export default {
  name: "Assessment",
  components: {
    sideBar
  },
  data() {
    return {
      timer: 0,
      totalTime: 4 * 60,
      title: "Timer",
      questionIndex: 0,
      answer: "",
      userTest: {
        questions: [],
        answers: []
      }
    };
  },
  methods: {
    ...mapActions(["getAssessment", "submitAns"]),
    beginTimer() {
      this.startTimer();
    },
    sendAnswer() {
      this.userTest.answers.push(this.answer || null);
      this.stopTimer();
      for (let q = 0; q < this.getAssessments.length; q++) {
        this.userTest.questions.push(this.getAssessments[q]._id);
      }
      this.submitAns(this.userTest);
      this.$router.push({ name: "Congratulations" });
    },
    prevQ() {
      this.userTest.answers.pop(this.answer);
      this.questionIndex--;
    },
    nextQ() {
      this.userTest.answers.push(this.answer || null);
      this.answer = "";
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
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
      }
    }
  },
  computed: {
    ...mapGetters(["getAssessments", "apiResponse", "isLoggedIn"]),

    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return "0" + this.padTime(seconds);
    }
  },

  async mounted() {
    this.getAssessment();

    $(document).ready(function() {
      $(".resp-part").show();
      $(".text-msg").hide();

      $(".btn-test").on("click", function() {
        $(".resp-part").hide();
        $(".text-msg").show();
      });
    });
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "Congratulations" });
          val.message = "";
        }, 1000);
      }
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
.response.failed {
  color: red;
}
.response.success {
  color: green;
}
.side-bar {
  position: relative;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 300px;
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
.image-group {
  margin: auto;
  display: block;
  align-content: center;
  width: 80vw;
  min-width: 800px;
}
.questionBody {
  text-align: center;
}
.questionOptions {
  margin: auto;
  width: 200px;
  text-align: left;
}
.questionButtons {
  margin: auto;
  width: 800px;
  margin-top: 2rem;
}
.question {
  margin: auto;
  margin-top: 3rem;
}
.questionNav {
  display: flex;
  justify-content: space-between;
}
.btn-submit {
  display: flex;
  margin: auto;
  margin-top: 2rem;
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

svg {
  position: relative;
  right: 20px;
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
  padding: 0.3em 2em;
  background: #2b3c4e;
  color: white;
  border-radius: 4px;
  border: none;
}
button:disabled {
  background: #cecece;
}
</style>
