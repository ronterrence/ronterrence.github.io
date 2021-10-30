<template>
  <section class="cart_sec py-5">
    <div class="container">
      <div class="checkout_container container mb-5">
        <div class="row">
          <div class="col-lg-8">
            <div class="co_left ct_top">
              <div class="co_head">
                <span>1</span>
                <h3>Shipping Address</h3>
              </div>
              <div class="co_address">
                <p class="ship_title">Ship to this address</p>
                <div class="co_content">
                  <div class="co_ad_left">
                    <input type="radio" />
                  </div>
                  <div class="co_ad_right">
                    <p>Mo. 12345 09986</p>
                    <p>7195 S. Sulphur Springs Lane Sugar Land, TX 77478</p>
                  </div>
                  <div class="co_links">
                    <router-link class="edit_btn" to=""
                      ><i class="fas fa-user"></i>Edit</router-link
                    >
                    <router-link class="delete_btn" to=""
                      ><i class="fas fa-trash"></i>Remove</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name*"
                  />
                </div>
                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name*"
                  />
                </div>
                <div class="col-lg-6 form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Mobile Number*"
                  />
                </div>
                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City*"
                  />
                </div>
                <div class="col-lg-12 form-group">
                  <textarea
                    type="number"
                    class="form-control"
                    placeholder="Address*"
                    rows="4"
                  ></textarea>
                  
                </div>
                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City*"
                  />
                </div>
                <div class="col-lg-6 form-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Zip Code*"
                  />
                </div>
                <div class="col-lg-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="State*"
                  />
                </div>
                <div class="col-lg-6 form-group">
                    <select class="list-dt" id="month" name="expmonth">
                        <option selected>Country</option>
                        <option>UK</option>
                        <option>San</option>
                          <option>UK</option>
                        <option>San</option>
                      </select>
                </div>
                <div class="co_row text-right my-3">
                    <router-link to="" class="btn_main btn_green">Save & Procced to payment</router-link>
                </div>
              </div>
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
