<template>
    <div class="cart">
        <div class="row text-center">
            <h2 class="display-2">CART</h2>
        </div>
        <div class="row my-3">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{}}</h5>
                      <p class="card-text">{{ }}</p>
                      <p class="card-text"><small class="text-body-secondary">{{}}</small></p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div class="row my-3 justify-content-end">
           <p>Subtotal: {{  }}</p> 
        </div>
        <div class="row ">
            <div class="col justify-content-center">
                <button>Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>