<template>
  <div class="home">
    <div class="container-fluid landing p-0">
      <div class="row mt-4">
        <div class="col-8 justify-content-center mt-5 pt-5">
            <h2 class="display-2 mt-5">GeniusHouse</h2>
            <h5 class="display-6">Your Source for Smart Home Wizardry</h5>
        </div>
        <div class="col-4 ">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner justify-content-center text-center">
              <div class="carousel-item active mx-0" >
                <img src="https://i.postimg.cc/HsyGPkkJ/051b3-Jv-Caz7-TUe9-VW12gb2m-8-fit-lim-size-960x.jpg" class="d-block w-100" alt="product.prodName">
              </div>
              <div class="carousel-item mx-0" >
                <img src="https://i.postimg.cc/bwnVfqds/61-Kg-G7-G4an-L-AC-SL1500.jpg" class="d-block w-100" alt="prodName">
              </div>
              <div class="carousel-item mx-0" >
                <img src="https://i.postimg.cc/85hs2Kr2/714d-K-u-ZTUL-AC-SL1500.jpg" class="d-block w-100" alt="prodName">
              </div>
              <div class="carousel-item mx-0" >
                <img src="https://i.postimg.cc/NFz2gypT/718m-LGnc2-L-AC-SL1500.jpg" class="d-block w-100" alt="prodName">
              </div>
              <div class="carousel-item mx-0" >
                <img src="https://i.postimg.cc/90Qg4yfg/71bgyic1-TQL-SL1500.jpg" class="d-block w-100" alt="prodName">
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
    <div class="container-fluid mt-3">
      <div class="row">
        <h2 >Featured Categories</h2>
      </div>
      <div class="row justify-content-center">
        <div class="card m-4" style="width: 18rem;">
          <img src="https://i.postimg.cc/HsyGPkkJ/051b3-Jv-Caz7-TUe9-VW12gb2m-8-fit-lim-size-960x.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card m-4" style="width: 18rem;">
          <img src="https://i.postimg.cc/bwnVfqds/61-Kg-G7-G4an-L-AC-SL1500.jpg" class="card-img-top" alt="...">
        </div>
        <div class="card m-4" style="width: 18rem;">
          <img src="https://i.postimg.cc/NFz2gypT/718m-LGnc2-L-AC-SL1500.jpg" class="card-img-top" alt="...">
        </div>

      </div>
      

    </div>
   
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
      return{
       
      }
  },
  components: {
    
  }

}
</script>
<style>
.landing{
  height: 36rem;
}
@media screen and (width > 900px){
  
}
.carousel-item img{
  max-height: 35rem;
  max-width: 100%;
}
</style>
