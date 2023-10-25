<template>
    <div class="container-fluid p-2 mt-3" v-if="product"  :key="product.prodID" id="single">
      <div class="row text-start align-content-start">
        <div class="col">
          <router-link to="/products" class="btn"><i class="fa-solid fa-arrow-left fa-beat fs-5"> Back</i></router-link>
        </div>
       </div>
        <div class="row justify-content-center align-content-center mt-5 mx-1 pt-4 pb-4 px-3" style="background-color:#c0d0d5; border-radius:.5rem">
            <div class="col-md-6 animate__animated animate__zoomInLeft" >
                <div class="smaller ">
                  <img class="small" :src="product.prodUrl" loading="lazy">
                </div>
            </div>
            <div class="col-md-6 card animate__animated animate__zoomInRight" >
              <div class="card-body">
                <div class="pname row ">
                  <h5>{{ product.prodName }}</h5>
                </div>
                <div class="row description">
                  <p class="fw-bold">Brand: {{ product.Brand }}</p>
                  <p class="fw-bold">Description: {{ product.prodDesc }}</p>
                </div>
                <div class="row justify-content-center my-4">
                  <div class="col-2 pt-2">
                    <button class="" @click="decQ"><i class="fa-solid fa-minus"></i></button>
                  </div>
                  <div class="col-1">
                    <p class="fs-3" v-text="qCount" ></p>
                  </div>
                  <div class="col-2 pt-2">
                    <button class="" @click="incQ(product.Quantity)"><i class="fa-solid fa-plus"></i></button>
                  </div>
                  
                </div>
                <div class="price">
                  <p class="fw-bold">Price: R {{ product.Price * qCount}}</p><br>
                  <button class="mb-3 btn fw-bold" @click="addToCart"><i class="fa-solid fa-bookmark"> Add To Cart</i></button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useCookies } from 'vue3-cookies';
const {cookies} = useCookies()
export default {
  // props: ["id"],
 
  computed: {
    product() {
      return this.$store.state.product; 
    },
    user() {
        return this.$store.state.user ||
        cookies.get("CurrentUser")
      },
      result() {
        if (this.user?.result?.length) {
          return this.user?.result[0];
        } else {
          console.log(cookies.get("CurrentUser")?.result[0]);
          return  cookies.get("CurrentUser")?.result[0]
        }
      },
   
  },
  data(){
    return{
      qCount:1,
      payload:{},
      data:{
        prodQuantity : null,
        prodID : this.$route.params.id
      }
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  methods:{
    addToCart(){
      console.log(this.result !=" ");
      if (this.result?.length > 0 || this.result !=" ") {
        this.payload.userID = this.result?.userID
        this.data.prodQuantity =this.qCount
        this.payload.data = this.data
        this.$store.dispatch("addToCart",this.payload)
      } else {
        swal({
              title: "Add to Cart",
              text: "Please login in order to add to cart",
              icon: "error",
              timer: 3000
        })
      }
      
    },
    incQ(x){
      if (this.qCount<x) {
        this.qCount ++
        x -= this.qCount
      }else{
        swal({
              title: "Add quantity",
              text: "Not enough product in stock",
              icon: "error",
              timer: 3000
        })
      }
      
    },
    decQ(x){
      if (this.qCount>0) {
        this.qCount -=1
        x +=this.qCount
      }
      
    }
   
  }
  
};

</script>
<style scoped>
    img{
        max-width: 300px;
        margin-top: 15px;
    }  
    .pname {
        margin-top: 1rem;
        border-bottom: 1px solid rgb(200, 160,4);
    }

</style>
