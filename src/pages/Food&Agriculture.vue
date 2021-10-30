<template>
<div>
  <HeaderBanner title="Food & Agriculture" />
  <div class="container mb-5">
    <ul class="page_navigate">
      <li><a href="">Home ></a></li>
      <li><a href="">Arrivals</a></li>
    </ul>
    <div class="row">
      <div class="col-lg-3">
        <FilterSidebar />
      </div>
      <div class="col-lg-9">
        <CategoryBanner title="Straight from the farm produce" imgsrc="static/assets/img/Group 10820.jpg"/>
          <section class="food_agr">
                    <div class="s4_items bg-white">
                        <ul>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10806.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Food Crop</p>
                                    <img src="static/assets/img/Group 10809.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10810.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10813.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10814.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10817.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10807.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10808.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10811.jpg" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="" class="s4_item_box">
                                    <p>Cash Crop</p>
                                    <img src="static/assets/img/Group 10812.jpg" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
    </section>
     
        <div class="row">
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Rectangle 363.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Rectangle 363.png" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/fish.png" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/rice.png" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/sweet-potatoe.png" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/rice-bag.png" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/yellow-gari.png" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/fish.png" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/rice.png" columns="col-lg-3 col-md-6" />
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
  name: "Food&Agriculture",
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
    };
  },
};
</script>
