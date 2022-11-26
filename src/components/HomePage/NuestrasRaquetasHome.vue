<template>
    <div class="container">
        <div class="container-items">

            <div class="tennis-ball-ctn">

                <div class="tennis-ball_items">
                    <span
                        class="tennis-ball_nuestras"
                    >
                        Nuestras
                        <br>
                        <span class="tennis-ball_raquetas">Raquetas</span>
                    </span>                    
                    
                    <div class="tennis-ball_info">
                        <span>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</span>
                    </div>

                    <ul class="tennis-ball_ul">
                        <li
                            class="tennis-ball_dots"
                            v-for="(dot, index) in 4"
                            :key="index"
                        >
                        </li>
                    </ul>
                </div>

                <div class="tennis-ball_controls">

                    <button class="tennis-ball_back">
                        <img src="../../../public/icons/back-icon.svg" alt="back-icon">
                    </button>

                    <button class="tennis-ball_next">
                        <img src="../../../public/icons/back-icon.svg" alt="back-icon">
                    </button>

                </div>

            </div>

            <div class="rackets-ctn">
                <ul class="rackets-links">
                    <li
                        v-for="(card, index) in cards"
                        :key="index"
                    >
                        <div class="rackets-links_number">
                            <span class="rackets-links_span">{{index + 1 }}</span>
                        </div>
                        <img :src="`${card.src}`" :alt="`${card.alt}`"/>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'NuestrasRaquetasHome',
    setup() {
        const cards = ref([
            {
                alt: "racket-1-img",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/74522C1A-7AD5-4C1B-B3F6-A010331683FE.png",
            },
            {
                alt: "racket-2-img",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/74522C1A-7AD5-4C1B-B3F6-A010331683FE.png",
            },
            {
                alt: "racket-3-img",
                src: "https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/F4E160A0-6EA6-4BA1-A8A9-C33F5FA81B5B.png",
            },
        ]);   
        
        return {
            cards,
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './scss/NuestrasRaquetasHome.scss';
</style>