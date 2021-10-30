<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./common/Header";
import Footer from "./common/Footer";

export default {
  name: 'app',
  components: {
    Header,
    Footer,
}}
</script>
