<template>
    <div class="container">

        <div class="container-left">

            <div class="tennis-ball-ctn">
                <img src="https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/8D0E9C59-62B8-4DD6-A5EB-2B4C9B3F3BDD.svg" alt="tennis-ball-icon">
            </div>

        </div>

        <div class="container-right">

            <div class="nav-ctn">
                <nav class="nav-links">
                    <router-link to="/">Inicio</router-link>
                    <router-link to="/about">Acerca de nosotros</router-link>
                    <router-link to="/history">Historia</router-link>
                    <router-link to="/contact">Contacto</router-link>
                </nav>

                <div class="nav-lenguage">
                    <a href="#">ES</a>
                    <a href="#">EN</a>
                </div>
            </div>

            <div class="hero-ctn">

                <span class="hero-span-play">
                    Las mejores raquetas para
                    <br>
                    jugar
                    <span class="hero-span-tennis">Tennis</span>                
                </span>

                <div class="button-ctn">
                    <button
                        @click="goAbout"
                    >
                        <span class="button-span_text"> Acerca de nosotros </span>
                        <img
                            class="button-img_arrow"
                            src="https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/EABF40B6-1E8B-48D7-B95D-1793516CE802.svg" alt="arrow-icon"
                        >
                    </button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'HeaderHome',
    setup () {       

        return {}
    },
    methods: {
        goAbout() {
            this.$router.push("/about");
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './scss/HeaderHome.scss';
</style>