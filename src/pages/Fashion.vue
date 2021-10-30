<template>
<div>
  <HeaderBanner title="Fashion" />
  <div class="container mb-5">
    <ul class="page_navigate">
      <li><a href="">Home ></a></li>
      <li><a href="">Fashion</a></li>
    </ul>
    <div class="row">
      <div class="col-lg-3">
        <FilterSidebar />
      </div>
      <div class="col-lg-9">
        <CategoryBanner title="Exclusive Offers" imgsrc="static/assets/img/Rectangle 2296@2x.jpg"/>
        <section class="food_agr">
          <div class="s4_items">
            <div class="row">
              <div class="col-lg-3"  v-for="item in itemss" :key="item">
                <div class="fashion_card">
                  <a href="#!">
                    <p>{{ item.category }}</p>
                    <img :src="item.src" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <ul>
              <li></li>
            </ul>
          </div>
        </section>

        <div class="row">
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ATCCard from "../sub-components/ATCCard";
import HeaderBanner from "../sub-components/HeadingBanner";
import CategoryBanner from "../sub-components/CategoryBanner";
import FilterSidebar from "../sub-components/FilterSidebar";
import FoodAgricultureStores from "../sub-components/FoodAgricultureStores";

// import {
//     data
// } from "../Data/data";
export default {
  name: "Fashion",
  components: {
    ATCCard,
    HeaderBanner,
    CategoryBanner,
    FilterSidebar,
    FoodAgricultureStores,
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
      itemss: [
        {
          category: "Men's Clothing",
          src: "static/assets/img/Group 10824.jpg",
        },
        {
          category: "Womens's Clothing",
          src: "static/assets/img/Group 10825.jpg",
        },
        {
          category: "Boys",
          src: "static/assets/img/Group 10826.jpg",
        },
        {
          category: "Girls",
          src: "static/assets/img/Rectangle 509.jpg",
        },
      ],
    };
  },
};
</script>
