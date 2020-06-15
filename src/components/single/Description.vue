<template>
    <div id="description">
        <p>{{ singleNews.content }}</p>
        <hr>
        <button class="back" @click="goBack">{{ buttonText[+lang] }}</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Description',
    data: () => ({
        buttonText: [
            'Back', 'Zurück'
        ]
    }),
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapState([
            'singleNews',
            'lang'
        ])
    }
}
</script>

<style lang="sass">
    #description
        border: 1px solid #42b983
        width: 700px
        margin: 0 auto
        box-sizing: border-box
        margin-top: 15px
        padding: 10px
        display: flex
        flex-direction: column
        align-items: flex-start
        background-color: #f3f5f2
        text-align: left
        hr
            background-color: lighten(#42b983, 10%)
            height: 1px
            width: 100%
            border: 0
        p
            margin: 10px 0
        button
            &.back
                margin-top: 10px
                border-radius: 0
                border: 2px solid #42b983
                color: inherit
                padding: 5px 15px
                font-size: .9em
                font-weight: 600
                text-transform: uppercase
                transition: all .2s linear
                &:hover
                    cursor: pointer
                    color: #42b983
                &:focus
                    outline: none
</style>