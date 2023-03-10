<template>
    <nav class="navbar navbar-expand-lg bg">
      <div class="logo">
        <img src="">
      </div>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Soccer Brokers</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <i class="fa-solid fa-house"></i> <router-link to ="/">Home</router-link>
        </li>
        <li class="nav-item">
         <i class="fa-solid fa-cart-shopping"> </i><router-link to ="/products">Products</router-link>
        </li>
        <li class="nav-item">
         <i class="fa-solid fa-lock"></i> <router-link to ="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
          <i class="fa-solid fa-user"></i> <router-link to ="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <i class="fa-solid fa-pen-to-square"> </i> <router-link to ="/register">Register</router-link>
        </li>   
        <li class="nav-item">
          <i class="fa-solid fa-phone"></i> <router-link to ="/Contact">Contact</router-link>
        </li>   
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.nav-item{
    margin-left: 60px;
    color: goldenrod;
  }
  .navbar{
    background-color:black;
  }
  nav a.router-link-exact-active {
    color: white;
  }
  nav a {
    font-weight: bold;
    text-decoration: none;
  }

</style>