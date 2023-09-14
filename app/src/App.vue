<template>
    <NavBarComp/>
    <div class="container-fluid p-0">
      <router-view/>
    </div>
    <FooterComp/>
</template>
<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';

  export default {
    components:{
      NavBarComp,
      FooterComp
    }
  }
</script>

<style>
@import './assets/css/style.css';
</style>