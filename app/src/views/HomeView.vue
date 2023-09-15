<template>
  <div class="home">
    <div class="container-fluid landing justify-content-center p-0">
      <div class="row">
        
        <div class="col justify-content-center name pt-5  ">
          <img class="fw-4" src="https://i.postimg.cc/9XvnVMnV/Your-Source-for-Smart-Home-Wizardry-2-removebg-preview.png" alt="" style="width:35rem;" loading="lazy">

        </div>
      
      </div>
        
    </div>
    <div class="container-fluid mt-3">
      <div class="row justify-content-center py-5">
      <div class="col-6 mt-3 p-0  git fs-4 fw-semibold " >
        <div class="info pt-5">
          <p class=" mt-5 ">Get in Touch with us!
           <br>
           You will be contacted soon for any additional infomation or feedback regarding our products or delivery service.
          </p>
          <br>
          <h5 class="display-6 fw-bold m-2">Contact Information</h5>
          <p class="m-2"><i class="bi bi-house-door-fill "></i> Cape Town,South Africa</p>
          <p class="m-2"><i class="bi bi-envelope-at "></i> admin@geniushouse.com</p>
          <p class="m-2"><i class="bi bi-telephone-inbound-fill "></i>+021 638 0658</p>
          <router-link class="btn my-3 fs-3" to="/contact">Show more <i class="fa-solid fa-arrow-right fa-fade"></i></router-link>
        </div>
      </div>
    </div>
    <div class="fp">
      <div class="row">
        <h2 >Featured Products</h2>
      </div>
      <div class="row justify-content-center">
        <div class="card m-4" style="width: 18rem;">
          <img src="https://i.postimg.cc/HsyGPkkJ/051b3-Jv-Caz7-TUe9-VW12gb2m-8-fit-lim-size-960x.jpg" class="card-img-top" alt="..." loading="lazy">
        </div>
        <div class="card m-4" style="width: 18rem;">
          <img src="https://i.postimg.cc/bwnVfqds/61-Kg-G7-G4an-L-AC-SL1500.jpg" class="card-img-top" alt="..." loading="lazy">
        </div>
        <div class="card m-4" style="width: 18rem;">
          <img src="https://i.postimg.cc/NFz2gypT/718m-LGnc2-L-AC-SL1500.jpg" class="card-img-top" alt="..." loading="lazy">
        </div>

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
.fp{
  background-color: #c0d0d5;
  border-radius: .5rem;
}
.git{
  background-image: url("https://i.postimg.cc/yNsKdn3R/Adobe-Stock-238237322-2048x1323.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: .5rem;
}
.info{
  height: 100%;
  background-color: rgba(252, 252, 252, 0.742);
}
.landing{
  height: 40rem;
  background-image: url("https://i.postimg.cc/cCPK5Mv2/Collage-Smart-Homes-2543428667.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(252, 252, 252, 0.742);
}
.name,.logo{
  height: 40rem;
  background-color: rgba(252, 252, 252, 0.742);
}
@media screen and (width > 900px){
  
}

</style>
