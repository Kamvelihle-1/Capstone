<template>
    <div class="profile my-3">
        <h2 class="display-2">Your Profile</h2>
        <div v-if="user" :key="user.userID">
            <div class="row text-start ">
                <div class="col">
                    <router-link to="/" class="btn"><i class="fa-solid fa-arrow-left fs-4 "> Back</i></router-link>
                </div>
            </div>
            <div class="row p-4 prof m-4">
                <div class="col">
                    <div class="row text-center justify-content-center p-3">
                        
                            <div class="col-md-4 g-2 justify-content-center ">
                                <div class="row mb-2 text-start justify-content-center align-content-center">
                                    <div class="col-4">
                                        <div class="row">
                                            <label for="firstName" class="my-1" >First Name: </label>
                                        </div>
                                        <div class="row">
                                            <label for="lastName" class="my-1" >Last Name: </label>
                                        </div>
                                        <div class="row">
                                            <label for="pass" class="my-1" >Age: </label>
                                        </div>
                                        <div class="row">
                                            <label for="pass" class="my-1">Gender: </label>
                                        </div>
                                        <div class="row">
                                            <label for="email" class="my-2">Email address: </label>
                                        </div>
                                        <div class="row">
                                            <label for="pass" class="my-1">Password: </label>
                                        </div>
                                        <div class="row">
                                            <label for="pass" class="my-2">Image Url: </label>
                                        </div>
                                          
                                    </div>
                                    <div class="col-5">
                                        <div class="row">
                                            <input type="text" v-model="data.firstName"  id="firstName" :placeholder="userName">
                                        </div>
                                        <div class="row">
                                            <input type="text" v-model="data.lastName"  class="my-2" id="lastName" :placeholder="userSurname">
                                        </div>
                                        <div class="row">
                                            <input type="number" v-model="data.Age"  id="pass" :placeholder="user.Age">
                                        </div>
                                        <div class="row">
                                            <input type="text" v-model="data.Gender"  class="my-2" id="pass" :placeholder="user.Gender">
                                        </div>
                                        <div class="row">
                                            <input type="email" v-model="data.emailAdd"  id="email" :placeholder="user.emailAdd">
                                        </div>
                                        <div class="row">
                                            <input type="password" v-model="data.userPwd"  class="my-2" id="pass" :placeholder="user.userPwd">
                                        </div>
                                        <div class="row">
                                            <input type="text" v-model="data.userImg" id="pass" :placeholder="user.userImg">
                                        </div>  
                                         
                                    </div>
                                    
                                </div>
                               
                            </div>
                            <div class="col-md-2">
                                <img :src="user.userImg" :alt="user.Fullname" loading="lazy">
                                <div class="row text-start">
                                    <label >Name: {{user.Fullname}}</label>
                                </div>
                                <div class="row text-start">
                                    <label >Email: {{ user.emailAdd}}</label>
                                </div>
                                <div class="row text-start">
                                    <label >Role:      {{user.userRole}}</label>
                                </div>
                                <div class="row text-start">
                                    <label >Gender:{{user.Gender}}</label>
                                </div>
                                <div class="row text-start">
                                    <label >Age:{{user.Age}}</label>
                                </div>
                                
                            </div>
                       
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-3">
                            <button class="p-1" @click="deleteUser(user.userID)">Delete Profile</button>
                        </div>
                        <div class="col-md-3">
                            <button class="p-1" @click="logOut">Log out</button>
                        </div>
                        <div class="col-md-3">
                            <button class="p-1" @click="updateUser">Update Profile</button>
                        </div>
                        <div class="col-md-3">
                            <button class="p-1"><router-link class="text-decoration-none clink text-decoration-none" to="/cart">Go to cart</router-link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerCompVue/>
        </div>
    </div>
</template>

<script>
import SpinnerCompVue from '@/components/SpinnerComp.vue'
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
    export default {
        data(){
            return{
                payload:{},
                data:{
                firstName:"",
                lastName:"",
                Age:null,
                Gender:"",
                emailAdd:"",
                userPwd:"",
                userImg:""
              }
            }
        },
        components:{
            SpinnerCompVue
        },
        computed:{
            user() {
            return this.$store.state.user ||
            cookies.get("CurrentUser")
          },
          userId(){
            if (this.user?.result?.length) {
          return this.user?.result[0].userID;
        } else {
          console.log(cookies.get("CurrentUser")?.result[0].Fullname);
          return  cookies.get("CurrentUser")?.result[0].userID
        }
          },
          userName(){
            if (this.user?.result?.length) {
          return this.user?.result[0].Fullname.split(" ")[0];
        } else {
          console.log(cookies.get("CurrentUser")?.result[0].Fullname);
          return  cookies.get("CurrentUser")?.result[0].Fullname.split(" ")[0]
        }
          },
          userSurname(){
            if (this.user?.result?.length) {
          return this.user?.result[0].Fullname.split(" ")[1];
        } else {
          console.log(cookies.get("CurrentUser")?.result[0].Fullname.split(" ")[1]);
          return  cookies.get("CurrentUser")?.result[0].Fullname.split(" ")[1]
        }
          }
        },
        mounted(){
            this.$store.dispatch("getUser",this.userId)
            console.log(this.user);
            console.log(cookies.get("CurrentUser")?.result[0].Fullname.split(" ")[1]);
        },
        methods: {
            logOut() {
                this.$store.dispatch('logOut')
            },
            updateUser(){
                this.payload.data = this.data
                this.payload.userID =this.userId
                this.$store.dispatch("updateUser",this.payload)
            },
            deleteUser(X){
                this.$store.dispatch("deleteUser",X)
            } 
    },
    watch:{
        user(){
            this.$store.dispatch("getUser",this.userId)
        }
    }
    }
</script>

<style scoped>
.prof{
    background-color:#c0d0d5 ;
    border-radius: .5rem;
}
button{
    padding: .5rem;
    background:#2c3e50;
    color:#f3f2e9;
    border-radius: 1rem;
}
button:hover{
  background: #f3f2e9;
  padding: 10px;
  color:#2c3e50
}
.clink{
    color:#f3f2e9;  
}
.clink:hover{
    color: #2c3e50;
}

</style>