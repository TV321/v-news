<template>
    <div id="caro2-wrapper">
        <h1>BBC News</h1>
        <div id="caro2">
            <swiper ref="mySwiper2" :options="swiperOptions">
                <swiper-slide 
                    v-for="(article, index) in bbcNews" 
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
                                    Read Article
                            </router-link>
                        </button>
                </swiper-slide>
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
    name: 'Caro2',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOptions: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                loop: true,
                autoplay: {
                    delay: 5000
                }
            }
        }
    },
    methods: {
        ...mapActions([
            'updateBbcNews'
        ]),
        ...mapMutations([
            'updateSingleNews'
        ])
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper2.$swiper
        },
        ...mapState([
            'bbcNews'
        ]),

    },
    mounted() {
        this.swiper.slideTo(1, 1000, false)
        this.updateBbcNews()
    }

}
</script>

<style lang="sass">
    #caro2-wrapper
        border: 2px solid #42b983
        background-color: #42b983
        width: 700px
        margin: 0 auto
        margin-top: 15px
        h1
            margin: 10px 0
        #caro2
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


</style>