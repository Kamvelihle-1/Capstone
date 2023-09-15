<template>
  <div class="container-fluid products">
    <div class="row text-center ">
      <h2 class="display-2">Products</h2>
    </div>
    <div class="row filtsort p-2 mx-2">
      <FilterComp @apply-filter="newdataDisplay"></FilterComp>
      <SortComp @apply-sort="newdataDisplay"></SortComp>
    </div>
    <div class="row prod m-3 pt-0">
      <div class="d-flex c flex-wrap justify-content-evenly align-content-center  p-2" v-if="newData.length>0">
        <div class="card mb-3 mx-4" v-for="product of newData " :key="product.prodID" style="width: 18rem;">
          <img :src="product.prodUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName}}</h5>
            <p>Price: R {{product.Price}}</p>
            <router-link :to="{name:'singleview', params: {id: product.prodID}}" class="btn btn-primary">Show more</router-link>
          </div>
        </div>
      </div>
      <div class="d-flex c flex-wrap justify-content-evenly align-content-center pt-3 p-2" v-else-if="products">
        <div class="card mb-3 mx-4" v-for="product of products " :key="product.prodID" style="width: 18rem;">
          <img :src="product.prodUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName}}</h5>
            <p>Price: R {{product.Price}}</p>
            <router-link :to="{ name:'singleview', params: {id: product.prodID}}" class="btn btn-primary">Show more</router-link>
          </div>
        </div>
      </div>
      <div class="mt-5" v-else> 
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
.c{
  background-color: rgba(252, 252, 252, 0.742);
}
.prod{
  background-image: url("https://i.postimg.cc/cCPK5Mv2/Collage-Smart-Homes-2543428667.jpg");
 
  background-size: cover;
  background-color: rgba(252, 252, 252, 0.742);
}
.filtsort,.prod{
  border-radius: .5rem;
}
.filtsort{
  background-color: #c0d0d5;
}
.btn{
    background-color: #c0d0d5;
    color: #0e255a;
}
.btn:hover{
  background-color: #f3f2e9;
}
.card img{
    height: 19rem;
   /* width: 30rem;*/
}
</style>