<template>
  <!-- MultiStep Form -->
  <div class="container" id="grad1">
    <div class="row justify-content-center mt-0">
      <div class="col-12">
        <div class="steps_card p-3">
          <h2>Seller Application</h2>
          <div class="row">
            <div class="col-md-12">
              <form id="msform">
                <!-- progressbar -->
                <ul id="progressbar">
                  <li id="account" class="active">Application Criteria</li>
                  <li id="company_profile">Company Profile</li>
                  <li id="web_socialMedia">Web & Social Media</li>
                  <li id="contact_info">Contact Info</li>
                  <li id="confirm_account">Confirm Account</li>
                </ul>
                <!-- fieldsets -->
                <fieldset>
                  <div class="form-card">
                    <div class="form_top">
                      <p>
                        Transparency is a key part of our business and we imploy
                        all new sellers to read through our Buyer Guidelines for
                        an indepth view of what we offer and rules to operate on
                        the website.
                      </p>
                      <a href="">Read our Buyer guidlines</a>
                    </div>
                    <div class="form_bottom">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="fb_box">
                            <p class="fb_title">Your Account</p>
                            <div class="fb_img">
                              <img src="assets/img/avatar.png" alt="" />
                              <div class="form-group">
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  disabled
                                  placeholder="img"
                                />
                                <input
                                  class="file_input"
                                  type="file"
                                  id="file"
                                />
                                <label class="btn_green" for="file"
                                  >Browse</label
                                >
                                <!-- <label id="file-name"></label> -->
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="fb_box">
                            <p class="fb_title">
                              How did you hear about Terre54
                            </p>
                            <div class="form-group">
                              <div class="fb_img">
                                <select
                                  class="list-dt"
                                  id="month"
                                  name="expmonth"
                                >
                                  <option selected>Month</option>
                                  <option>January</option>
                                  <option>February</option>
                                  <option>March</option>
                                  <option>April</option>
                                  <option>May</option>
                                  <option>June</option>
                                  <option>July</option>
                                  <option>August</option>
                                  <option>September</option>
                                  <option>October</option>
                                  <option>November</option>
                                  <option>December</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="fb_box">
                            <p class="fb_title">Email</p>
                            <div class="fb_img">
                              <input type="text" name="" id="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="next"
                    class="next action-button"
                    value="Next"
                  />
                </fieldset>
                <fieldset>
                  <div class="form-card">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="fb_box">
                          <p class="fb_sub_title">Business Name</p>
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <div class="fb_img">
                            <select class="list-dt" id="month" name="expmonth">
                              <option selected>Month</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <div class="fb_img">
                            <select class="list-dt" id="month" name="expmonth">
                              <option selected>Month</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <div class="fb_img">
                            <select class="list-dt" id="month" name="expmonth">
                              <option selected>Month</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="fb_box">
                          <p class="fb_sub_title">Business Identity type</p>
                          <div class="fb_img">
                            <select class="list-dt" id="month" name="expmonth">
                              <option selected>Month</option>
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="fb_box">
                          <p class="fb_sub_title">
                            Business ID Number (Optional)
                          </p>
                          <div class="fb_img">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="eg. 3768908765"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="previous"
                    class="previous action-button-previous"
                    value="Go Back"
                  />
                  <input
                    type="button"
                    name="next"
                    class="next action-button"
                    value="Next"
                  />
                </fieldset>
                <fieldset>
                  <div class="form-card">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="fb_box">
                          <p class="fb_sub_title">
                            <i class="fab fa-facebook-f"></i>Facebook
                          </p>
                          <div class="fb_img">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="paste url here"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fb_box">
                          <p class="fb_sub_title">
                            <i class="fab fa-twitter"></i>Twitter
                          </p>
                          <div class="fb_img">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="paste url here"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fb_box">
                          <p class="fb_sub_title">
                            <i class="fab fa-instagram"></i>Instagram
                          </p>
                          <div class="fb_img">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="paste url here"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <p>Note: Provide at least one social account</p>
                      </div>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="previous"
                    class="previous action-button-previous"
                    value="Go Back"
                  />
                  <input
                    type="button"
                    name="make_payment"
                    class="next action-button"
                    value="Next"
                  />
                </fieldset>
                <fieldset>
                  <div class="form-card">
                    <div class="row">
                      <div class="col-lg-12">
                        <p class="fb_sub_title">Name</p>
                      </div>
                      <div class="col-lg-3">
                        <div class="fb_box">
                          <div class="fb_img">
                            <select class="list-dt" id="month" name="expmonth">
                              <option selected>Mr.</option>
                              <option selected>Mrs.</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="fb_box">
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="fb_box">
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="fb_box">
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <p class="fb_sub_title">Name</p>
                      </div>
                      <div class="col-lg-12">
                        <div class="fb_box">
                          <div class="fb_img">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="eg. CEO, Owner, Manager, Designer, Merchandiser"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <p class="fb_title">BUSINESS MAILING ADDRESS</p>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <p class="fb_sub_title">Street Address</p>
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <p class="fb_sub_title">Apt / Suit / Other</p>
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <p class="fb_sub_title">City</p>
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <p class="fb_sub_title">Zip / Postal Code</p>
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <p class="fb_sub_title">Country</p>
                          <div class="fb_img">
                            <select class="list-dt" id="month" name="expmonth">
                              <option selected>Select Country</option>
                              <option>Saudia</option>
                              <option>Dubai</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="fb_box">
                          <p class="fb_sub_title">Phone Number</p>
                          <div class="fb_img">
                            <input type="text" name="" id="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="previous"
                    class="previous action-button-previous"
                    value="Go Back"
                  />
                  <p class="submit_note">
                    By Submitting this application, you agree to the
                    <a href="">Buyer guidelines</a>
                  </p>
                  <input
                    type="button"
                    name="next"
                    class="next action-button"
                    value="Next"
                  />
                </fieldset>
                <fieldset>
                  <div class="form-card">
                    <p class="text-center" style="color: black">
                      Thank you for submitting Seller Application. Your
                      application is being reviewed, withing 48 hours. <br />
                      You will receive and email about the status of your
                      application.
                    </p>
                  </div>
                  <button class="action-button">LETS GO SHOPPING</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CreateAccount",
};
</script>
