<template>
  <div class="container">
    <div class="row" style="align-items:center">
      <div class="col-lg-6">
        <div class="s2_left">
          <div class="row" >
            <ATCCard :itemss="items" link="/product2" img_src="static/assets/img/Rectangle 363.jpg" columns="col-lg-4 col-md-6" />
            <ATCCard :itemss="items" link="/product2" img_src="static/assets/img/Rectangle 363.jpg" columns="col-lg-4 col-md-6" />
            <div class="col-md-4">
              <div class="atc_box">
                <div class="s2_b_img">
                  <router-link to="/newarrival">
                    <img src="static/assets/img/Group 369.png" alt=""
                  />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="s2_right">
          <div class="row">
            <div class="col-md-6">
              <div class="s2box_wrapper">
                <h3>Top Products</h3>
                <div class="s2r_box">
                  <img src="static/assets/img/Component 9 – 27.png" alt="" />
                  <div class="s2r_content">
                                  <router-link to="/topproducts">
View Products</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="s2box_wrapper">
                <h3>Deals</h3>
                <div class="s2r_box">
                  <img src="static/assets/img/Group 172.png" alt="" />
                  <div class="s2r_content">
                                  <router-link to="/topproducts">
View Deals</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ATCCard from "../sub-components/ATCCard";
// import { data } from "../Data/data";
export default {
  name: "NewArrivals",
  components: {
    ATCCard,
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
