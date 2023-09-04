<template>
    <div class="d-flex flex-wrap justify-content-evenly  align-content-center; mt-5">
      
          <div class="card mb-3" v-for="product of products " :key="product.prodID" style="max-width: 640px;min-width: 240px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="product.prodUrl" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ product.prodName}}</h5>
                  <p class="card-text">{{ product.prodDesc}}</p>
                  <router-link to="/singlview" class="btn btn-primary">Show more</router-link>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch("getProducts")
        }
    }
</script>

<style scoped>
.card{
    color: #0e255a;
    background-color:#f3f2e9;
}
.btn{
    background-color: #f1d7b7;
    color: #0e255a;
}
.card img{
    height: 19rem;
    width: 30rem;
}
</style>