<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <router-link to="/" class="navbar-brand" href="#">
                <img src="./assets/newspaper.png" class="d-inline-block align-top" width="30" height="30" alt="">
                NewsOnline
              </router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul class="navbar-nav mr-auto">
                  <!-- menu items here -->
                </ul>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                  <button type="button" class="btn btn-secondary">ALL</button>
                  <button type="button" class="btn btn-outline-secondary">CNN</button>
                  <button type="button" class="btn btn-outline-secondary">GMA</button> 
                </div>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> 
                </form>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </div>
    <router-view/>

    <div class="comtainer pt-5 mb-5">
      <div class="col-md-12 text-center text-muted">
        Powered by <a href="https://newsapi.org/" target="_blank" class="text-muted">newsapi.org</a>
      </div>
    </div>
  </div>
</template>

<style>
.news-card {
  color: #555;
  text-decoration: none !important;
}
.news-card:hover {
  color: #000;
  box-shadow: 0 0 5px rgba(0,0,0,0.3)
}
</style>
