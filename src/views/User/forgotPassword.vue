 <template>
    <div>
     <form @submit.prevent="forgotPass" >
     <h1>Forgot Password</h1>
     <div class="form-group col-5">
         <label for="email">Email:</label>
         <input type="email" placeholder="email address" class="form-control" v-model="Password.email">
     </div>
     <button type="submit" class="btn-danger btn-lg">Reset Password</button>
     </form>   
    </div>
</template>
<script>
import {mapActions } from "vuex";
export default {
  name:"forgotPassword",
  data() {
    return {
      Password: {}
    }
  },
  methods: {
    ...mapActions(["passwordGet"]),
    forgotPass() {
      this.passwordGet(this.Password);
    }
  },
}
</script>