<template>
    <div class="profile my-3">
        <div v-if="user" :key="user.userID">
            <div class="row text-start">
                <router-link to="/" class="btn"><i class="fa-solid fa-arrow-left "> Back</i></router-link>
            </div>
            <div class="row p-4">
                <div class="col">
                    <div class="row text-center justify-content-center p-3">
                        
                            <div class="col-md-4 g-2 justify-content-center ">
                                <div class="row mb-2 text-start justify-content-center align-content-center">
                                    <label for="firstName" >First Name: 
                                        <input type="text" class="mx-5"  id="firstName" :placeholder="userName">  
                                    </label>
                                </div>
                                <div class="row my-2 pt-2 text-start">
                                    <label for="lastName" >Last Name: 
                                        <input type="text" class="mx-5 " id="lastName" :placeholder="userSurname">
                                    </label>
                                </div>
                                <div class="row my-2 pt-2 text-start">
                                    <label for="email">Email address: 
                                        <input type="email" class="mx-4 " id="email" :placeholder="user.emailAdd">
                                    </label>
                                </div>
                                <div class="row my-2 pt-2 text-start">
                                    <label for="pass" >Password: 
                                        <input type="password" class="mx-5" id="pass" :placeholder="user.userPwd">
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <img :src="user.userImg" :alt="user.Fullname" loading="lazy">
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
                            <button class="p-1"><router-link class="text-decoration-none text-black" to="/cart">Go to cart</router-link></button>
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
                this.payload.userID =this.userID
                this.$store.dispatch("updateUser",this.data)
            },
            deleteUser(X){
                this.$store.dispatch("deleteUser",X)
            } 
    },
    }
</script>

<style scoped>

</style>