<template>
<div>
<Carousels />
<NewArrivals />
<FeaturedProducts />
<FoodAgricultureStores />
<FasionStores title="Fashion Stores" :left_img="left_img" :items="items" />
<Offers />
<FasionStores title="Others" :left_img="left_img2" :items="items2" />
</div>
</template>

<script>
import Carousels from "../sub-components/Carousels";
import NewArrivals from "../sub-components/NewArrivals";
import FeaturedProducts from "../sub-components/FeaturedProducts";
import FoodAgricultureStores from "../sub-components/FoodAgricultureStores";
import FasionStores from "../sub-components/FasionStores";
import Offers from "../sub-components/Offers";
export default {
    name: "Main",
    components: {
        Carousels,
        NewArrivals,
        FeaturedProducts,
        Offers,
        FoodAgricultureStores,
        FasionStores,
    },
    data() {
        return {
            left_img: ["static/assets/img/Group 10823.jpg"],
            items: [{
                    category: "Men's Clothing",
                    src: "static/assets/img/Group 10824.jpg",
                },
                {
                    category: "Womens's Clothing",
                    src: "static/assets/img/Group 10825.jpg",
                },
                {
                    category: "Boys",
                    src: "static/assets/img/Group 10826.jpg",
                },
                {
                    category: "Girls",
                    src: "static/assets/img/Rectangle 509.jpg",
                },
            ],
            left_img2: ["static/assets/img/Group 10805.jpg"],
            items2: [{
                    category: "Charcoal",
                    src: "static/assets/img/Group 10829.jpg",
                },
                {
                    category: "Leathercrafts",
                    src: "static/assets/img/Group 10830.jpg",
                },
                {
                    category: "Paintings",
                    src: "static/assets/img/Group 10831.jpg",
                },
                {
                    category: "Metal works",
                    src: "static/assets/img/Group 10832.jpg",
                },
            ],
        };
    },
};
</script>
