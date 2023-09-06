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
                <div class="name">
                  <h5>{{ product.prodName }}</h5>
                </div>
                <div class="description">
                  <p class="fw-bold">Brand: {{ product.Brand }}</p>
                  <p class="fw-bold">Description: {{ product.prodDesc }}</p>
                </div>
                <div class="price">
                  <p class="fw-bold">Price: R {{ product.Price }}</p><br>
                  <button class="mb-3 btn fw-bold">Add to Cart</button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  // props: ["id"],
  computed: {
    product() {
      return this.$store.state.product; 
    },
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    console.log(this.id);
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  
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