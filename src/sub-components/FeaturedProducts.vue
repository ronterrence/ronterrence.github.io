<template>
<section class="sec_3">
    <div class="container">
        <h3>Featured Products</h3>
        <div class="row">
            <ATCCard :itemss="items" link="/product2" img_src="static/assets/img/Rectangle 363.jpg" columns="col-lg-3 col-md-6" />
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6"/>
            <ATCCard :itemss="items" link="/product2" img_src="static/assets/img/Rectangle 363.jpg" columns="col-lg-3 col-md-6"/>
            <ATCCard :itemss="items" link="/product" img_src="static/assets/img/Group 10803.jpg" columns="col-lg-3 col-md-6"/>
            <!-- {{ console.log(items) }} -->
        </div>
    </div>
</section>
</template>

<script>
import ATCCard from "../sub-components/ATCCard";

export default {
    name: 'FeaturedProducts',
    components: {
        ATCCard
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
}
</script>
