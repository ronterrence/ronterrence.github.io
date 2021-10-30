
<template>

    <section class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <!-- <div class="owl-carousel owl-theme">
                        <div class="item"><img src="assets/img/banner-1.jpg" alt=""></div>
                        <div class="item"><img src="assets/img/banner-1.jpg" alt=""></div>
                    </div> -->
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="static/assets/img/banner-1.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="static/assets/img/banner-1.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="static/assets/img/banner-1.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
                 
                <BannerRight/>
            </div>
        </div>
    </section>
</template>


<script>
import BannerRight from './BannerRight'
export default {
  name: 'Carousels',
  components: {
      BannerRight,
  },
  

}

</script> 
