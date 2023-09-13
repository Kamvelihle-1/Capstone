<template>
  <div class="home">
    <div class="container-fluid landing justify-content-center p-0">
      <div class="row">
        
        <div class="col justify-content-center name pt-5  ">
          <img class="fw-4" src="https://i.postimg.cc/9XvnVMnV/Your-Source-for-Smart-Home-Wizardry-2-removebg-preview.png" alt="" style="width:35rem;">

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
