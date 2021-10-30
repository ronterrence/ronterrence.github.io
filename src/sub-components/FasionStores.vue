<template>
  <section class="fashion_container">
    <div class="container">
      <h3>{{ title }}</h3>
      <div class="row">
        <div class="col-lg-3 p-0">
          <div class="s6l_box">
            <img :src="left_img" alt="" />
          </div>
        </div>
        <div class="col-lg-9">
          <div class="s6_right">
            <div class="row">
              <div class="col-lg-3 col-md-6"  v-for="item in items" :key="item">
                <div class="fashion_card">
                  <a href="#!">
                    <p>{{ item.category }}</p>
                    <img :src="item.src" alt="" />
                  </a>
                </div>
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
  name: "FasionStores",
  props: ["title", "left_img", "items"],
};
</script> 
