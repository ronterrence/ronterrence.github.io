<template>
    <footer>
        <div class="container">
            <div class="foot_top">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="foot_left">
                            <a href="#!">
                                <img src="assets/img/logo.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3"></div>
                    <div class="col-lg-5">
                        <div class="foot_right">
                            <h5>JOIN OUR MAILING LIST</h5>
                            <p>Exclusive Sales, Offers and Events Delivered Right To Your Inbox</p>
                            <div class="foot_input">
                                <input type="email" placeholder="Enter email here...">
                                <button> <i class="fas fa-arrow-right"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="foot_bottom">
                <h5>FOLLOW US ON</h5>
                <p>Join our commutnity! Stay on top of all the latest news, sales and events</p>
                <ul class="foot_social_links">
                    <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#!"><i class="fab fa-pinterest-p"></i></a></li>
                    <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}


</script> 


<style>

</style>
