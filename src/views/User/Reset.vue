<template>
    <div>
        
        <form @submit.prevent="Reset">
        <h1>
            Reset Password
        </h1>
        <div class="form-group col-4">
            <label for="psw">New Password</label>
            <input type="password" name="password"  placeholder=" New Password" class="form-control" v-model="reset.password">
        </div>
        <div class="form-group col-4">
            <label for="psw2">Confirm Password</label>
            <input type="password" name="confirm"  placeholder="Confirm Password" class="form-control" v-model="reset.confirm">
        </div>
        <button type="reset" class="btn btn-primary">Change Password</button>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:'Reset',
    data(){
        return{
            reset:{}
        }
    },
    computed:{
        ...mapGetters(['getReset'])
    },

    methods:{
        ...mapActions(['ResetPassword','resetPassword']),
        Reset(){
            this.ResetPassword("this.reset"),
            this.$router.push({ name: "login" });
        }
    }

}
</script>