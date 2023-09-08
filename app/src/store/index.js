import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
import router from '@/router';
import UserAuthentication from '@/services/UserAuthentication'
const cUrl = "https://capstone-84sf.onrender.com/"
const{cookies}=useCookies();
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    cart:null,
    msg:null
  },
 
  mutations: {
    setProducts: (state, products) =>{
      state.products = products;
    },
     setProduct: (state, product) => {
      state.product = product;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setUser: (state, user) => {
      state.users = user;
    },
    setCart:(state,cart)=>{
      state.cart = cart;
    },
    setMsg:(state,msg)=>{
      state.msg = msg;
    }
  },
  actions: {
    async getProducts(context) {
      try{
        const {data} = await axios.get(`${cUrl}products`)
        if (data.results) {
          context.commit("setProducts", data.results)
        }else{
          sweetAlert({
            title:"Error",
            text:data.msg,
            icon:"error",
            timer:2000
          })
        }  
      }catch(e){
        context.commit("setMsg", "An error occured")
        console.log(e);
      }
    },
    async getProduct(context, id) {
    try{
      const {data} = await axios.get(`${cUrl}product/` + id)
      context.commit("setProduct", data.results[0])
    }catch(e){
      context.commit("setMsg", "An error occured")
    }
    },
    async addProduct(context,payload){
      try {
        let {data} =await axios.post(`${cUrl}product`,payload)
        if(data.msg){
          context.dispatch("getProducts")
          swal({
            title:"Product adding",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    },
    async updateProduct(context,payload){
      try {
        let {data} =await axios.patch(`${cUrl}product/${payload.prodID}`,payload.data)
        
        if(data.msg){
          context.dispatch("getProducts")
          swal({
            title:"Update",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    },
    async deleteProduct(context,id){
      try {
        let {data}= await axios.delete(`${cUrl}product/${id}`)
        if (data.msg) {
          context.dispatch("getProducts")
          swal({
            title:"Product removal",
            text: data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    }, 
    // Users 
    async getUsers(context) { 
      try{  
        const {data} = await  axios.get(`${cUrl}users`)
        if (data.results) { 
          context.commit("setUsers", data.results)
        }else{  
          sweetAlert({  
            title:"Error",  
            text:data.msg,  
            icon:"error", 
            timer:2000  
          })  
        }   

      }catch(e){  
        context.commit("setMsg", "An error occured")
        console.log(e); 
      } 
    },  
    async getUser(context, id ) {
      try{  
        const {data} = await  axios.get(`${cUrl}user/`+ id)
        context.commit("setUs er", data.results[0])
      }catch(e){  
        context.commit("setMsg", "An error occured")
        console.log(e); 
      } 
    }, 
    async addUser(context,payload){
      try {
        let {data} =await axios.post(`${cUrl}register`,payload)
        const {msg} = await data
        if(msg){
          swal({
            title:"User Registration",
            text:data.msg,
            icon:"success",
            timer:2000
          })
          context.dispatch("getUsers")
          router.push({name: 'signin'})
        } else {
          sweet({
            title: "Error",
            text: data.msg,
            icon: "error",
            timer: 2000
          })
        }
        
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    },
    async logOut(context) {
      context.commit('setUser')
      cookies.remove('LegitUser'); //removes the cookie
    },
    async login(context, payload) {
      try {
        const {msg,token,result} = ( await axios.post(`${cUrl}login`, payload)).data
          if(result) {
            context.commit("setUser", {result,msg});
            cookies.set("LegitUser", {token, msg, result})
            UserAuthentication.applyToken(token)
            sweet({
              title: "Login",
              text: msg,
              icon: "success",
              timer: 2000
            })
            router.push({name: 'home'})
          }
          else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 2000
            })
          }
      } catch(error) {
        context.commit("setMsg", "An error has occurred.")
        };
    },
    async updateUser(context,payload){
      try {
        let {data} =await axios.patch(`${cUrl}user/${payload.userID}`,payload)
        if(data.msg){
          context.dispatch("getUsers")
          swal({
            title:"Update",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    },
    async deleteUser(context,id){
      try {
        let {data}= await axios.delete(`${cUrl}user/${id}`)
        if (data.msg) {
          context.dispatch("getUsers")
          swal({
            title:"User removal",
            text: data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    },
    // Cart
    async getCart(context,id) { 
      try{  
        const {data} = await  axios.get(`${cUrl}user/${id}/carts`)
        if (data.results) { 
          context.commit("setCart", data.results)
        }else{  
          sweetAlert({  
            title:"Error",  
            text:data.msg,  
            icon:"error", 
            timer:2000  
          })  
        }   

      }catch(e){  
        context.commit("setMsg", "An error occured")
        console.log(e); 
      } 
    },  
    async addToCart(context,payload,id){
      try {
        let {data} =await axios.post(`${cUrl}user/${id}/cart`,payload)
        if(data.msg){
          context.dispatch("getCart")
          swal({
            title:"Adding to cart",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    },
    async updateCart(context,payload,id){
      try {
        let {data} =await axios.patch(`${cUrl}user/${payload.userID}/cart/${id}`,payload)
        if(data.msg){
          context.dispatch("getCart")
          swal({
            title:"Update",
            text:data.msg,
            icon:"success",
            timer:2000
          })
        }
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    },
    async deleteCart(context,id){
      try {
        let {data}= await axios.delete(`${cUrl}user/${id}/cart`)
        if (data.msg) {
          context.dispatch("getCart")
          swal({
            title:"Cart removal",
            text: data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    }, 
    async deleteCartItem(context,id,id2){
      try {
        let {data}= await axios.delete(`${cUrl}user/${id}/cart/${id2}`)
        if (data.msg) {
          context.dispatch("getCart")
          swal({
            title:"Cart item removal",
            text: data.msg,
            icon:"success",
            timer:2000
          })
        }
        
      } catch (e) {
        context.commit("setMsg","An error occured")
      }
    } 
  } 

})
