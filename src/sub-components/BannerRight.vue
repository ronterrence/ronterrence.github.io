<template>
  <div class="col-lg-3">
    <div class="banner_right">
      <div class="br_box" v-for="item in items" :key="item">
        <div class="br_b_left">
          <img :src="item.src" alt="" />
        </div>
        <div class="br_b_right">
          <p class="brb_title_top">{{ item.brb_title_top }}</p>
          <p class="brb_title_bold"><strong>AND MORE</strong></p>
          <a href="#!" class="brb_title_bottom"
            >Shop now<i class="fas fa-arrow-right"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerRight",
  data() {
    return {
      items: [
        {
          brb_title_top: "Sneakers & Formal Shoes",
          src: "static/assets/img/shoes.png",
        },
        {
          brb_title_top: "Sneakers & Formal Shoes",
          src: "static/assets/img/ingredients.png",
        },
      ],
    };
  },
};
</script> 
