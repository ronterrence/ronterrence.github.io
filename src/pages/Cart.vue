<template>
<section class="cart_sec py-5">
  <div class="container">
    <h3>Cart</h3>
    <div class="cart_container">
      <div class="row">
        <div class="col-lg-8">
          <div class="cart_left ct_top">
            <div class="row c_item" style="align-items: center">
              <div class="cc_img">
                <img src="static/assets/img/person01.png" alt="" />
              </div>
              <div class="cc_content">
                <p>Three piece suit</p>
                <p>Size: 40,Color: Blue</p>
                <ul>
                  <li class="mr-3"><p class="cc_price">$14</p></li>
                  <li>
                    <label for="">Quantity</label>
                    <span class="cc_quantity">2</span>
                  </li>
                </ul>
                <p class="delivery_time">Delivery is 3-4 Days</p>
                <router-link class="trash_btn" to=""
                  ><i class="fa fa-trash"></i>Remove
                </router-link>
              </div>
              <router-link class="trash_btn" to=""
                ><i class="fa fa-trash"></i>Remove
              </router-link>
            </div>
            <div class="row c_item" style="align-items: center">
              <div class="cc_img">
                <img src="static/assets/img/person01.png" alt="" />
              </div>
              <div class="cc_content">
                <p>Three piece suit</p>
                <p>Size: 40,Color: Blue</p>
                <ul>
                  <li class="mr-3"><p class="cc_price">$14</p></li>
                  <li>
                    <label for="">Quantity</label>
                    <span class="cc_quantity">2</span>
                  </li>
                </ul>
                <p class="delivery_time">Delivery is 3-4 Days</p>
                <router-link class="trash_btn" to=""
                  ><i class="fa fa-trash"></i>Remove
                </router-link>
              </div>
            </div>
             <div class="row c_item" style="align-items: center">
              <div class="cc_img">
                <img src="static/assets/img/person01.png" alt="" />
              </div>
              <div class="cc_content">
                <p>Three piece suit</p>
                <p>Size: 40,Color: Blue</p>
                <ul>
                  <li class="mr-3"><p class="cc_price">$14</p></li>
                  <li>
                    <label for="">Quantity</label>
                    <span class="cc_quantity">2</span>
                  </li>
                </ul>
                <p class="delivery_time">Delivery is 3-4 Days</p>
                <router-link class="trash_btn" to=""
                  ><i class="fa fa-trash"></i>Remove
                </router-link>
              </div>
            </div>
          </div>
          <div class="ct_bot">
            <router-link to="" class="btn_main">Continue Shopping</router-link>
            <router-link to="checkout" class="btn_main btn_green"
              >Check Out</router-link
            >
          </div>
        </div>
        <div class="col-lg-4">
          <div class="cart_right">
            <h3 class="ctr_title">Price Details</h3>
            <div class="ctr_content">
              <ul>
                <li>
                  <p class="ctr_left">Price (2 items)</p>
                  <p class="ctr_right">$28</p>
                </li>
                <li>
                  <p class="ctr_left">Delivery Charge</p>
                  <p class="ctr_right">$12</p>
                </li>
                <li>
                  <p class="ctr_left">Amount Payable</p>
                  <p class="ctr_right">$40</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: "TopProducts",
};
</script>
