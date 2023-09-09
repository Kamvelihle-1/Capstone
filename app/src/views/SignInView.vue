<template>
    <div class="row container-fluid justify-content-center tex-center p-5 signin">
        <form class="form  fw-semibold" action="https://formspree.io/f/xleynvdd" method="POST" v-if="!register" @submit.prevent="login" >
            <p class="title">Welcome back</p>
            
               <label>
                   <span>Email:</span>
                   <input v-model="payload.emailAdd" placeholder="" type="email" class="input ">
               </label> 
               <label>
                <span>Password:</span>
                <input v-model="payload.userPwd" placeholder="" type="password" class="input" minlength="6">
            </label> 
               <button class="submit my-2">Login</button>
               <p><small>Create a new account: <span @click="reg">Register</span></small></p> 
       </form>
       <div v-else-if="register">
        <SignUpViewVue/>
       </div>
    </div>
</template>

<script>
import { useCookies } from 'vue3-cookies';
import SignUpViewVue from './SignUpView.vue';
const {cookies} = useCookies()
    export default {
        components:{
            SignUpViewVue
        },
        data(){
            return{
              
                register:false,
                payload:{
                    emailAdd:"",
                    userPwd:""
                }
            }
        },
        computed:{
            user(){
                return this.$store.state.user
            }
        },
        beforeCreate() {
            this.$store.dispatch('getUsers')
        },
        mounted() {
            console.log(cookies.get('LegitUser'));
        },
        methods:{
            login(){
                this.$store.dispatch("login",this.payload)
            },
            reg(){
                this.register=true
            }
        }  
    }
</script>

<style scoped>
.form {
  
   
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid black ;
   
   
  }
  button:hover{
  background:#2c3e50  ;
  padding: 1rem;
  color:#f1d7b7;
}
  .title {
    font-size: 28px;
    color: #0e255a;;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  
 
  .form label {
    position: relative;
  }
  
  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }
  
  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }
  
  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }
  
  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  

  
  .submit {
    border: none;
    outline: none;
    background: #f1d7b7;
    padding: 10px;
    border-radius: 10px;
    color: #0e255a;;
    font-size: 16px;
    transform: .3s ease;
  }
  
  .submit:hover {
    background-color: black;
  }
  
  
</style>