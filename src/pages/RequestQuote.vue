<template>
  <section class="cart_sec py-5">
    <div class="container">
      <div class="cart_container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cart_left ct_top">
              <div class="row" style="align-items: center">
                <div class="cc_img">
                  <img src="static/assets/img/person01.png" alt="" />
                </div>
                <div class="cc_content">
                  <p>Three piece suit</p>
                  <ul class="quote_ul">
                    <li>
                      <label>Quantity</label>
                    </li>
                    <li>
                      <label>Quantity</label>
                    </li>
                  </ul>
                  <ul class="quote_ul">
                    <li>
                      <p class="q_quantity">100</p>
                    </li>
                    <li>
                      <select class="list-dt" id="month" name="expmonth">
                        <option selected>Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                      </select>
                    </li>
                  </ul>
                </div>
                <div class="c_item_bot">
                  <form action="">
                    <div class="form-group">
                      <label>Your Email</label>
                      <input type="email" name="email" id="" required />
                    </div>
                    <div class="form-group">
                      <label>Message</label>
                      <textarea rows="5" type="text" required></textarea>
                      <router-link to="" class="btn_main btn_green"
                        >Request Quote</router-link
                      >
                    </div>
                  </form>
                </div>
                <router-link class="request_btn" to=""
                  ><i class="fas fa-user"></i>Seller: Ohieez.ng
                </router-link>
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
  name: "RequestQuote",
};
</script>
