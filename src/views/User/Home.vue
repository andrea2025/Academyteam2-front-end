<template>
    <div class="container">
        <logo/>
        <div class="item pageTitle">
            <h3><i>Application Sign Up</i></h3>
        </div>
        <div class="item">
            <form @submit.prevent='sendFile' class="formBody">
                <div class="form__item form-row">
                    <div class="form__item__name col text-left">
                        <label for="firstName">First Name</label>
                        <input type="text" name="firstName" class="form-control">
                    </div>
                    <div class="form__item__name col text-left ml-5">
                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" class="form-control">
                    </div>
                </div>
                <div class="form__item form-row">
                    <div class="form__item__name col text-left">
                        <label for="mail">Email Address</label>
                        <input type="email" name="mail" class="form-control">
                    </div>
                    <div class="form__item__name col text-left ml-5">
                        <label for="phone">Phone Number</label>
                        <input type="number" name="phone" class="form-control">
                    </div>
                </div>
                <div class="form__item form-row">
                    <div class="form__item__name col text-left">
                        <label for="password">Password</label>
                        <input type="password" name="password" class="form-control">
                    </div>
                    <div class="form__item__name col text-left ml-5">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" class="form-control">
                    </div>
                </div>
                <button type="submit" class="btn-signup">Sign Up</button>
                <div class="alt-signin">
                    <p>
                    Already have an account? <router-link to="/userlogin"> <a href="">Sign in</a></router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import logo from '@/components/logo.vue'
export default {
    name: "ApplicantSignUp",
    components:{
        logo
    }

}
</script>
<style scoped>

.pageTitle{
font-style: italic;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #2B3C4E;

}
.formBody {
    width: 70%;
    margin: auto;
}
label{
    margin-top: 2em;
    font-size: 14px;
line-height: 17px;
color: #4F4F4F;

}
.btn-signup{
    margin-top: 2em;
    padding: 0.5rem 10em;
    width: 50%;
background: #2B3C4E;
border-radius: 4px;
color:#ffff;
font-weight: bold;
font-size: 14px;

}
.alt-signin{
    margin-top: 0.5rem;
    color:#4F4F4F;
    font-style: italic;
font-weight: normal;
font-size: 14px;
line-height: 17px;
border: none;
}
a{
    
    color:#4F4F4F;
    text-decoration: underline;
}
</style>