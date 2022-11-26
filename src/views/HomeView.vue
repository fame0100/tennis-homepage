<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HeaderHome />
    <AccesoriesHomeVue />
    <NuestrasRaquetasHome />
    <HeroFooterHome /> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderHome from "@/components/HomePage/HeaderHome.vue";
import AccesoriesHomeVue from "@/components/HomePage/AccesoriesHome.vue";
import NuestrasRaquetasHome from "@/components/HomePage/NuestrasRaquetasHome.vue";
import HeroFooterHome from "@/components/HomePage/HeroFooterHome.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    HeaderHome,
    AccesoriesHomeVue,
    NuestrasRaquetasHome,
    HeroFooterHome,
  },
};
</script>