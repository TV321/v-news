<template>
    <div id="caro1-wrapper">
        <h1>{{ titles[+lang]}}</h1>
        <div id="caro1">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide 
                    v-for="(article, index) in countryNews" 
                    :key="index"
                    :style="{ backgroundImage: `
                        linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(0,212,255,0) 79%),
                        url(${ article.urlToImage })` }"
                >
                        <h2>{{ article.title }}</h2>
                        <button class="read" >
                            <router-link 
                                
                                :to="{name: 'Single'}"
                                @click.native="updateSingleNews(article)">
                                    {{ buttonText[+lang]}}
                            </router-link>
                        </button>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>

                <div class="swiper-button-prev" slot="button-prev">
                    <img src="@/assets/prev.png" alt="">
                </div>
                <div class="swiper-button-next" slot="button-next">
                    <img src="@/assets/next.png" alt="">
                </div>

            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'Caro1',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                loop: true,
                autoplay: {
                    delay: 5000
                }
            },
            titles: [
                'Country News',
                'Land Nachrichten'
            ],
            buttonText: [
                'Read Article',
                'Lesen Artikel'
            ]
        }
    },
    methods: {
        ...mapActions([
            'updateCountryNews'
        ]),
        ...mapMutations([
            'updateSingleNews'
        ])
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
        ...mapState([
            'countryNews',
            'lang'
        ]),

    },
    mounted() {
        this.swiper.slideTo(1, 1000, false)
        this.updateCountryNews()
    },
    watch: {
        lang() {
            this.updateCountryNews()
        }
    }

}
</script>

<style lang="sass">
    #caro1-wrapper
        border: 2px solid #42b983
        background-color: #42b983
        width: 700px
        margin: 0 auto
        h1
            margin: 10px 0
        #caro1
            height: 300px
            .swiper-container
                height: 300px
                text-align: left
                img
                    width: 100%
                h2
                    color: #ffffff
                    margin: 10px
                    width: 70%
                button
                    a
                        text-decoration: none
                        color: inherit
                    &.read
                        background-color: #2c3e50
                        color: #ffffff
                        font-size: 1.2em
                        padding: 10px
                        margin: 10px
                        width: 20%
                        border: 1px solid #ffffff
                        transition: all .2s linear
                        &:hover
                            cursor: pointer
                            background-color: lighten(#2c3e50, 5%)

                .swiper-pagination-bullet-active
                    background: #42b983
                .swiper-button-prev,
                .swiper-button-next
                    color: #42b983
                .swiper-slide
                    background-position: center
                    background-size: cover
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                .swiper-button-next:after,
                .swiper-button-prev:after
                    content: ''
                .swiper-pagination-bullet
                    opacity: 0.5
                .swiper-pagination-bullet-active
                    opacity: 1
        .swiper-container-horizontal > .swiper-pagination-bullets
            padding: 1px 5px
            left: 44.3%
            width: auto
            background-color: #2c3e50
            border: 1px solid #42b983
</style>