<template>
  <div class="container-fluid">
    <div class="row text-center ">
      <h2 class="display-2">Products</h2>
    </div>
    <div class="row filtsort p-2 mx-2">
      <FilterComp @apply-filter="newdataDisplay"></FilterComp>
      <SortComp @apply-sort="newdataDisplay"></SortComp>
    </div>
    <div class="row">
      <div class="d-flex flex-wrap justify-content-evenly align-content-center mt-5 p-2" v-if="newData.length>0">
        <div class="card mb-3 mx-4" v-for="product of newData " :key="product.prodID" style="width: 18rem;">
          <img :src="product.prodUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName}}</h5>
            <router-link :to="{name:'singleview', params: {id: product.prodID}}" class="btn btn-primary">Show more</router-link>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-evenly align-content-center mt-5 p-2" v-else-if="products">
        <div class="card mb-3 mx-4" v-for="product of products " :key="product.prodID" style="width: 18rem;">
          <img :src="product.prodUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName}}</h5>
            <router-link :to="{ name:'singleview', params: {id: product.prodID}}" class="btn btn-primary">Show more</router-link>
          </div>
        </div>
      </div>
      <div v-else> 
        <SpinnerComp />
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import FilterComp from '@/components/FilterComp.vue';
import SortComp from '@/components/SortComp.vue';

    export default {
      data(){
        return{
          newData:[]
        }
      },
      components:{
          SpinnerComp,
          FilterComp,
          SortComp,
          
      },
      computed:{
          products(){
              return this.$store.state.products
          }
      },
      mounted(){
          this.$store.dispatch("getProducts")
      },
      methods:{
        newdataDisplay(data){
         this.newData = data;
         
       }
      }
    }
</script>

<style scoped>
.card{
    color: #0e255a;
    background-color:#f3f2e9;
}
.filtsort{
  background-color: #f1d7b7;
}
.btn{
    background-color: #f1d7b7;
    color: #0e255a;
}
.card img{
    height: 19rem;
   /* width: 30rem;*/
}
</style>