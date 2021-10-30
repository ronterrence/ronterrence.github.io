<template>
  <div>
    <div
      class="modal fade"
      id="signupModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="signupModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content signin_modal">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="static/assets/img/logo.png" alt="" />

            <h3>Create Account</h3>
            <div class="form-group">
              <label for="">Full Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <label for="">Email Address</label>
              <input type="email" placeholder="Your Email address" required />
            </div>
            <div class="form-group">
              <label for="">Phone Number</label>
              <input type="number" placeholder="Your Mobile Number" required />
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input type="email" placeholder="Your password" />
            </div>
            <div class="form-group"> 
              <button class="btn_main sign_btn ">Create Account</button>
            </div>
            <div
              class="modal_row mb-3 pb-2"
              style="border-bottom: 1px solid #b0340f"
            >
              <div>
                <input type="checkbox" id="checkinput" /><label
                  for="checkinput"
                  class="mb-0"
                  >Remebrer me</label
                >
              </div>
              <a href="" class="forgotpass"
                ><i class="fas fa-lock"></i> Forgot Password</a
              >
            </div>
            <div class="row modal_row">
              <button class="facebook_btn">
                <i class="fab fa-facebook-f"></i> Facebook
              </button>
              <button class="google_btn">
                <i class="fab fa-google"></i> Google
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <p>Existing User?</p>
            <router-link
              to=""
              type="button"
              style="width: auto"
              class="btn_main sign_btn"
               data-toggle="modal"
                  data-target="#signinModal"
                  id="login_close"
              >Login</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="signinModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="signinModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content signin_modal">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="static/assets/img/logo.png" alt="" />

            <h3>Welcome Back!</h3>
            <div class="form-group">
              <label for="">Email</label>
              <input type="email" placeholder="Your Email address" />
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input type="email" placeholder="Your password" />
            </div>
            <div class="form-group">
              <button class="btn_main sign_btn">Sign In</button>
            </div>
            <div
              class="modal_row mb-3 pb-2"
              style="border-bottom: 1px solid #b0340f"
            >
              <div>
                <input type="checkbox" id="checkinput" /><label
                  for="checkinput"
                  class="mb-0"
                  >Remebrer me</label
                >
              </div>
              <a href="" class="forgotpass"
                ><i class="fas fa-lock"></i> Forgot Password</a
              >
            </div>
            <div class="row modal_row">
              <button class="facebook_btn">
                <i class="fab fa-facebook-f"></i> Facebook
              </button>
              <button class="google_btn">
                <i class="fab fa-google"></i> Google
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <p>Dont have an account?</p>
            <router-link
              to=""
              type="button"
              style="width: auto"
              class="btn_main sign_btn"
                 data-toggle="modal"
                  data-target="#signupModal"
                    id="signup_close"
              >Sign Up</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <header>
      <div class="head_top">
        <div class="container">
          <ul>
            <li><a href="#!">Help Contact</a></li>
            <li>
              <router-link to="/sellapplication">Sell on Terre54</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="head_middle">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <router-link to="/" class="logo">
                <img src="static/assets/img/logo.png" alt="" />
              </router-link>
            </div>
            <div class="col-lg-6">
              <div class="searchbar_wrapper">
                <div class="search_input">
                  <i class="fas fa-search"></i>
                  <input type="text" placeholder="Search" />
                </div>
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    All Categories
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <button class="btn_main search_btn">Search</button>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="r_items_bar">
                <button
                  type="button"
                  class="btn_main btn_orange"
                  data-toggle="modal"
                  data-target="#signinModal"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  class="btn_main btn_orange fill"
                  data-toggle="modal"
                  data-target="#signupModal"
                >
                  Create Account
                </button>
                <!-- <div class="r_item">
                                <a href="#!">
                                    <img src="static/assets/img/heart-icon.svg" alt="">
                                    <p>Saved</p>
                                </a>
                            </div>
                            <div class="r_item">
                                <a href="">
                                    <img src="static/assets/img/cart-icon.svg" alt="">
                                    <p>Cart</p>
                                </a>
                            </div>
                            <div class="r_item dropdown">
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="ritem_round">AE</span>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="head_bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <ul>
                <li><router-link to="food&agriculture">Food</router-link></li>
                <li><router-link to="">Arts & Crafts</router-link></li>
                <li><router-link to="newarrival">Deals</router-link></li>
                <li><router-link to="">Sellers</router-link></li>
              </ul>
            </div>
            <div class="col-lg-4">
              <div class="hb_right">
                <ul>
                  <li>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        EN
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">Action</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        USD$
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">Action</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script> 


<style>
</style>
