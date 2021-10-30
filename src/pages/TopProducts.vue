<template>
  <div>
    <HeaderBanner title="Top Products" />
    <div class="container mb-5">
      <ul class="page_navigate">
        <li><a href="">Home ></a></li>
        <li><a href="">Top Products</a></li>
      </ul>
      <div class="row">
        <div class="col-lg-3">
          <FilterSidebar />
        </div>
        <div class="col-lg-9">
          <div class="categroies_bar">
            <ul>
              <li class="cb_first">All Categories</li>
              <li>Food/Agriculture</li>
              <li>Fashion</li>
            </ul>
          </div>
          <div class="row">
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
            <ATCCard
              :itemss="items"
              link="/product2"
              img_src="static/assets/img/Rectangle 363.jpg"
              columns="col-lg-3 col-md-6"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ATCCard from "../sub-components/ATCCard";
import HeaderBanner from "../sub-components/HeadingBanner";
import FilterSidebar from "../sub-components/FilterSidebar";

// import {
//     data
// } from "../Data/data";
export default {
  name: "TopProducts",
  components: {
    ATCCard,
    HeaderBanner,
    FilterSidebar,
  },
  data() {
    return {
      items: [
        {
          src: "static/assets/img/Group 10803.jpg",
          f_title: "Ginger",
          f_price: "$14",
        },
      ],
    };
  },
};
</script>
