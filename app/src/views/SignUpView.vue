<template>
    <div class="row container-fluid justify-content-center tex-center p-md-5 signup">
        <form class="form  fw-semibold p-sm-5 text-center" action="https://formspree.io/f/xleynvdd" method="POST" @submit.prevent="register" v-if="!registered">
            <p class="title px-5">Sign Up</p>

            <label >
                Your Firstname:
                <input class="input" type="text" v-model="payload.firstName" name="firstname">
              </label>
            <label >
                Your Surname:
                <input class="input" type="text" v-model="payload.lastName" name="Surname">
            </label>
        
            <label>
                Your Age:
                <input class="input" type="number" v-model="payload.Age" name="age" min="18">
            </label>
            <label>
                Your Gender:
                <input class="input" type="text" v-model="payload.Gender" name="gender">
            </label>
        
            <label>
                Your Role:      
                <input class="input" v-model="payload.userRole" type="text" name="role">
            </label>
        
            <label>
                Your email:
              <input class="input" v-model="payload.emailAdd" type="email" name="email">
            </label>
        
            <label>
                Your password:
                <input class="input" v-model="payload.userPwd" type="password" name="password" minlength="6">
            </label>
        
            <label>
                Your Image url:
                <input class="input" v-model="payload.userImg" type="text" name="image">
            </label>
        
            <button class="submit my-3" type="submit" >Sign Up</button> 
        </form>
        <div v-else-if="registered">
          <SignInView/>
        </div>
    </div>
</template>

<script>
import SignInView from './SignInView.vue'
    export default {
        data(){
            return{
                registered:false,
                payload:{
                    firstName:"",
                    lastName:"",
                    Gender:"",
                    Age:null,
                    userRole:"",
                    emailAdd:"",
                    userPwd:"",
                    userImg:""
                }
            }
        },
        components:{
          SignInView
        },
        methods:{
            register(){
                this.reg()
                this.$store.dispatch("addUser",this.payload)
                this.clear()
            },
            reg(){
              this.registered=true
            },
            clear(){
                this.payload.firstName="",
                this.payload.lastName="",
                this.payload.Gender="",
                this.payload.Age=null,
                this.payload.userRole="",
                this.payload.emailAdd="",
                this.payload.userPwd="",
                this.payload.userImg=""
            }
        }
    
        
    }
</script>

<style scoped>
.form {
  
   
    max-width: 45rem;
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
    display: flex;
   
  }
  
 
  .form label {
    margin: 10px 1px;
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