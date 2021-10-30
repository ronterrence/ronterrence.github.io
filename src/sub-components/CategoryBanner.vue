<template>
    <div class="category_banner">
        <img :src="imgsrc" alt="">
        <div class="cb_content">
            <h3>{{title}}</h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CategoryBanner',
    props:["title","imgsrc"]
}
</script>
