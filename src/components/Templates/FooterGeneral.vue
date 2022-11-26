<template>
    <div class="container">
        <div class="container-items">

            <div class="container-left">

                <div class="nav-ctn">
                    <nav class="nav-links">
                        <router-link to="/">Inicio</router-link>
                        <router-link to="/about">Acerca de nosostros</router-link>
                        <router-link to="/history">Historia</router-link>
                        <router-link to="/contact">Contacto</router-link>
                    </nav>
                </div>
                
                <div class="icons-ctn" >
                    <ul class="icons-links">
                        <li
                            class="icons"
                            v-for="(icon, index) in icons"
                            :key="index"
                        >
                            <img :src="`${icon.src}`" :alt="`${icon.alt}`">
                        </li>
                    </ul>
                </div>

            </div>

            <div class="container-right">

                <div class="tennis-ball-ctn">
                    <img src="https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/8D0E9C59-62B8-4DD6-A5EB-2B4C9B3F3BDD.svg" alt="tennis-ball-icon">
                </div>

            </div>

        </div>
    </div>    
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const icons = ref([
            {
                alt: "linkedin-icon",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/850BD302-3FE5-4906-9965-554B2BADEE95.svg",
            },
            {
                alt: "vimeo-icon",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/5A58C5E0-5DD7-4090-8ED2-D45151FC82C5.svg",
            },
            {
                alt: "instagram-icon",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/F2C6101A-3954-46FD-8967-4CD880F86853.svg",
            },
            {
                alt: "twitter-icon",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/5370B88F-175D-44D7-B9E0-90E376714FC6.svg",
            },
            {
                alt: "facebook-icon",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/12B2072B-5F51-4294-84E5-6F0A485E734D.svg",
            },
        ]);       

        return {
            icons,
        }
    
    }
}
</script>

<style lang="scss" scoped>
    @import './scss/FooterGeneral.scss';
</style>