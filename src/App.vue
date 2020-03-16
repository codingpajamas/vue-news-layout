<template>
  <div id="app"> 
    <div class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="p-5 text-center"> 
              <img src="./assets/newspaper.png" class="d-inline-block align-top" width="30" height="30" alt="">
              <p class="m-0">NEWSONLINE</p> 
              <p class="m-0 text-muted"><small>or offline - PWA enabled (on https)</small></p>
            </div>
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
