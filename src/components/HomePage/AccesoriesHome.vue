<template>
    <div class="container">
        <div class="container-items">

            <div class="tennis-ctn">
                <span class="tennis-span">Tennis</span>
            </div>
            
            <div class="title-ctn">
                <span class="title-span">
                    Raquetas.Accesorios.
                    <br>
                    Pelotas.
                </span>
                <p class="title-p">Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</p>
            </div>

            <div class="button-ctn">
                <button
                    @click="goHistory"
                >
                    <span class="button-span_text"> Historia </span>
                    <img
                        class="button-img_arrow"
                        src="https://cdn.zeplin.io/5d9e460c4e8b1d239dd32237/assets/EABF40B6-1E8B-48D7-B95D-1793516CE802.svg" alt="arrow-icon"
                    >
                </button>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    name: 'AccesoriesHome',
    setup () {

        return {}
    },
    methods: {
        goHistory() {
            this.$router.push("/history");
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './scss/AccesoriesHome.scss';
</style>