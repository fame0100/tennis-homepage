<template>
  <!-- <nav>
    <router-link to="/">Inicio</router-link> |
    <router-link to="/about">Acerca de nosostros</router-link> |
    <router-link to="/history">Historia</router-link> |
    <router-link to="/contact">Contacto</router-link>
  </nav> -->
  <router-view />
  <FooterGeneral />
</template>

<script>
  import FooterGeneral from "@/components/Templates/FooterGeneral.vue";

export default {
  name: "HomeView",
  components: {
    FooterGeneral,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
