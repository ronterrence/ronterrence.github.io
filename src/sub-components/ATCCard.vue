<template>
  <div :class="columns">
    <div class="atc_box" v-for="item in itemss" :key="item">
      <div class="atc_box_img">
        <img :src="img_src" />
        <span class="heart"><i class="far fa-heart"></i></span>
      </div>
      <div class="atc_box_content">
        <h5>{{ item.f_title }}</h5>
        <p class="atc_price">{{ item.f_price }}</p>
        <div class="atc_box_content_bottom">
          <router-link :to="link">
            <img src="static/assets/img/Group 226.png" alt="" />
          </router-link>
          <router-link to="cart">
            <img src="static/assets/img/Group 10834.png" alt="" />Add to Cart
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ATCCard",
  props: ["itemss", "columns","img_src", "link"],
};
</script>
