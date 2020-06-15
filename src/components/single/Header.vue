<template>
    <div id="header"
        :style="{ backgroundImage: `
            linear-gradient(0deg, rgba(28,28,28,1) 0%, rgba(0,212,255,0) 79%),
            url(${ singleNews.urlToImage })`}"
    >
        <h2>{{ singleNews.title }}</h2>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState([
            'singleNews'
        ])
    }
}
</script>

<style lang="sass">
    #header
        color: #fff
        border: 1px solid #42b983
        margin: 0 auto
        width: 700px
        height: 300px
        display: flex
        align-items: flex-end
        text-align: left
        margin-top: 15px
        box-sizing: border-box
        h2
            font-size: 1.5em
            font-weight: 400
            margin: 10px



</style>