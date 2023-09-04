<template>
    <div>
        <nav class="navbar navbar-expand-lg " style=" background-color: #f1d7b7;">
            <div class="container-fluid">
              <a class="navbar-brand" to="/">
                <img src="https://i.ibb.co/VMyLhXx/Your-Source-for-Smart-Home-Wizardry.png"  alt="logo" width="35" height="25" class="d-inline-block align-text-top">
                GeniousHomes.com
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse me-0 ms-5" id="navbarSupportedContent">
                <ul class="navbar-nav ms-5 me-0 mb-2 mb-lg-0 ">
                  <li class="nav-item h">
                    <router-link class="nav-link " to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/about">about</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                  </li>
                  
                  <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </router-link>
                    <ul class="dropdown-menu">
                      <li><router-link class="dropdown-item" to="/signin">Sign In</router-link></li>
                      <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/admin">Admin</router-link>
                  </li>
                </ul>
        
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-link,.navbar-brand{
  color:#0e255a;
}
.h{
  margin-left: 15rem;
}

</style>