<template>

  <form class="flip-card__form " action="https://formspree.io/f/xleynvdd" method="POST" @submit.prevent="register">
    <input class="flip-card__input" v-model="payload.firstName" placeholder="Name" type="name">
    <input class="flip-card__input" v-model="payload.lastName" placeholder="Surname" type="name">
    <input class="flip-card__input" v-model="payload.Age" placeholder="Age" type="number" min="18">
    <input class="flip-card__input" v-model="payload.Gender" placeholder="Gender" type="name" >
    <input class="flip-card__input" v-model="payload.userRole" placeholder="Role" type="name">
    <input class="flip-card__input" v-model="payload.emailAdd" name="email" placeholder="Email" type="email">
    <input class="flip-card__input" v-model="payload.userPwd" name="password" placeholder="Password" type="password">
    <input class="flip-card__input" v-model="payload.userImg" placeholder="Image url" type="name">
    <button class="flip-card__btn submit " type="submit">Sign up</button>
 </form>

</template>

<script>
import SignInView from './SignInView.vue'
    export default {
        data(){
            return{
               
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
                this.$store.dispatch("addUser",this.payload)
                this.clear()
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

<style scoped>.flip-card__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
}
.flip-card__input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: var(--font-color);
  padding: 5px 10px;
  outline: none;
}

.flip-card__input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.flip-card__input:focus {
  border: 2px solid var(--input-focus);
}

.flip-card__btn:active, .button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

.flip-card__btn {
  margin: 20px 0 20px 0;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
} 
</style>