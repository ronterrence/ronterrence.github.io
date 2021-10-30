<template>
<div>
  <HeaderBanner title="Top Products" />
  <div class="container mb-5">
    <ul class="page_navigate">
      <li><a href="">Home ></a></li>
      <li><a href="">Arrivals</a></li>
    </ul>
    <div class="sp_container">
      <div class="row" style="align-items:center">
        <div class="col-lg-6">
          <img src="static/assets/img/person01.png" alt="" />
        </div>
        <div class="col-lg-6">
          <div class="sp_right">
            <div class="container">
              <div class="col-lg-12">
                <div class="row">
                  <h2>Three piece suit</h2>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <p>Striped blue three piece suit</p>
                </div>
              </div>

              <ul class="sp_row">
                <li>
                  <p class="sp_rating"><span>4.8</span> 1342 Ratings</p>
                </li>
                <li><p>SKU: 235252</p></li>
                <li><p>SellerL Ohieez.ng</p></li>
              </ul>
              <div class="col-lg-12">
                <div class="row">
                  <h3 class="sp_price">Price</h3>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row mb-3" style="align-items: center">
                  <h2 class="price_count">$14</h2>
                                      <div class="pc_wrapper">
                  <div class="price_counter">
                    <span class="sp_c">-</span>
                    <span class="sp_c">2</span>
                    <span class="sp_c">+</span>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row my-4">
                  <router-link to="checkout" class="btn_main spc_btn">Buy Now</router-link>
                  <router-link to="cart" class="btn_main spc_btn fill">Add to Cart</router-link>
                </div>
              </div>
              <ul class="sp_row ct_options">
                <li>
                  <a href=""><i class="fa fa-envelope"></i> Email to Friend</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-heart"></i> Add to Wishlist</a>
                </li>
                <li>
                  <a href=""
                    ><i class="fas fa-exchange-alt"></i> Add to Compare</a
                  >
                </li>
              </ul>
              <div class="col-lg-12">
                <div class="row">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque feugiat metus lorem, quis aliquam quam lacinia id.
                    Aenean arcu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sp_container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Descriptions</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            >Specifications</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            >Ratings & Review</a
          >
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="sp_content">
            <h2>Overview</h2>
            <div class="row">
              <div class="col-lg-4">
                <h3>Product details</h3>
                <div class="row">
                  <div class="col-6">
                    <div class="spc_left">
                      <ul>
                        <li><p>Material:</p></li>
                        <li><p>Brand Name:</p></li>
                        <li><p>Available Quantity:</p></li>
                        <li><p>Colour:</p></li>
                        <li><p>Size:</p></li>
                        <li><p>Type:</p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="spc_right">
                      <ul>
                        <li><p>Polyster, Cotton</p></li>
                        <li><p>Ohieez Clothing</p></li>
                        <li><p>100</p></li>
                        <li><p>Blue</p></li>
                        <li><p>40</p></li>
                        <li><p>Male suit</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                          <h3>Delivery</h3>
                <div class="row">
                  <div class="col-6">
                    <div class="spc_left">
                      <ul>
                        <li><p>Selling Unit:</p></li>
                        <li><p>Estimated delivery time:</p></li>
                        <li><p>Weight:</p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="spc_right">
                      <ul>
                        <li><p>Single Item</p></li>
                        <li><p>3 - 5 Days</p></li>
                        <li><p>1.2 Kg</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
            <div class="sp_content">
            <h2>Specifications</h2>
            <div class="row">
              <div class="col-lg-4">
                <h3>Product details</h3>
                <div class="row">
                  <div class="col-6">
                    <div class="spc_left">
                      <ul>
                        <li><p>Material:</p></li>
                        <li><p>Brand Name:</p></li>
                        <li><p>Available Quantity:</p></li>
                        <li><p>Colour:</p></li>
                        <li><p>Size:</p></li>
                        <li><p>Type:</p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="spc_right">
                      <ul>
                        <li><p>Polyster, Cotton</p></li>
                        <li><p>Ohieez Clothing</p></li>
                        <li><p>100</p></li>
                        <li><p>Blue</p></li>
                        <li><p>40</p></li>
                        <li><p>Male suit</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                          <h3>Delivery</h3>
                <div class="row">
                  <div class="col-6">
                    <div class="spc_left">
                      <ul>
                        <li><p>Selling Unit:</p></li>
                        <li><p>Estimated delivery time:</p></li>
                        <li><p>Weight:</p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="spc_right">
                      <ul>
                        <li><p>Single Item</p></li>
                        <li><p>3 - 5 Days</p></li>
                        <li><p>1.2 Kg</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
            <div class="sp_content">
            <h2>Ratings</h2>
            <div class="row">
              <div class="col-lg-4">
                <h3>Product details</h3>
                <div class="row">
                  <div class="col-6">
                    <div class="spc_left">
                      <ul>
                        <li><p>Material:</p></li>
                        <li><p>Brand Name:</p></li>
                        <li><p>Available Quantity:</p></li>
                        <li><p>Colour:</p></li>
                        <li><p>Size:</p></li>
                        <li><p>Type:</p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="spc_right">
                      <ul>
                        <li><p>Polyster, Cotton</p></li>
                        <li><p>Ohieez Clothing</p></li>
                        <li><p>100</p></li>
                        <li><p>Blue</p></li>
                        <li><p>40</p></li>
                        <li><p>Male suit</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                          <h3>Delivery</h3>
                <div class="row">
                  <div class="col-6">
                    <div class="spc_left">
                      <ul>
                        <li><p>Selling Unit:</p></li>
                        <li><p>Estimated delivery time:</p></li>
                        <li><p>Weight:</p></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="spc_right">
                      <ul>
                        <li><p>Single Item</p></li>
                        <li><p>3 - 5 Days</p></li>
                        <li><p>1.2 Kg</p></li>
                      </ul>
                    </div>
                  </div>
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
// import ATCCard from "../sub-components/ATCCard";
// import HeaderBanner from "../sub-components/HeadingBanner";
// import FilterSidebar from "../sub-components/FilterSidebar";

// import {
//     data
// } from "../Data/data";
export default {
  name: "SignleProduct",
};
</script>
