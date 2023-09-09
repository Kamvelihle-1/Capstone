<template>
    <div class="container-fluid p-2" v-if="product"  :key="product.prodID" id="single">
        <div class="row justify-content-center align-content-center m-0">
            <div class="col-md-6 animate__animated animate__zoomInLeft">
                <div class="smaller ">
                  <img class="small" :src="product.prodUrl" />
                </div>
            </div>
            <div class="col-md-6 card animate__animated animate__zoomInRight" >
              <div class="card-body">
                <div class="name row">
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
                    <button class="" @click="incQ"><i class="fa-solid fa-plus"></i></button>
                  </div>
                  
                </div>
                <div class="price">
                  <p class="fw-bold">Price: R {{ product.Price }}</p><br>
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
    id() {
      return this.$route.params.id
    },
    user() {
        return this.$store.state.user ||
        cookies.get("LegitUser")
      },
    result() {
        return this.user?.result;
      },
   
  },
  data(){
    return{
      userID:null,
      qCount:1,
      payload:{},
      data:{
        prodQuantity : this.qCount,
        prodID : this.id
      }
    }
  },
  mounted() {
    console.log(this.id);
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  methods:{
    addToCart(){
      this.userID = this.result?.userID
      this.payload.userID = this.userID
      this.payload.data = this.data
      this.$store.dispatch("addToCart",this.payload)
    },
    incQ(){
      this.qCount ++
    },
    decQ(){
      this.qCount -=1
    }
   
  }
  
};

</script>
<style scoped>
    img{
        max-width: 300px;
        margin-top: 15px;
    }  
    .name {
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-bottom: 2px solid rgb(200, 160,4);
    }

</style>