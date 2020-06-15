<template>
    <div id="navbar">
        <div id="nav-content">
            <div id="nav-logo">
                V News
            </div>
            <ul>
                <li v-for="(link, index) in navLinks[+lang]" :key="index">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
            <select name="" id="langSelect" :value="lang" @change="onChange">
                <option value="0">en</option>
                <option value="1">de</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Navbar',
    data: () => ({
        navLinks: [
            [
                { name: 'Home', path: '/'}, 
                { name: 'About', path: '/about'}
            ], 
            [
                { name: 'Zuhause', path: '/'}, 
                { name: 'Über', path: '/about'}
            ]

        ]
    }),
    computed: {
        ...mapState([
            'lang'
        ])
    },
    methods: {
        ...mapMutations([
            'updateLang'
        ]),
        onChange(e) {
            this.updateLang(e)
            if(this.$route.path !== '/') {
                this.$router.push({ name: 'Home'})
            } else {
                null
            }
        }
    }
    
}
</script>

<style lang="sass" scoped>
    #navbar
        background-color: #2c3e50
        #nav-content
            background-color: #42b983
            width: 700px
            margin: 0 auto
            text-align: left
            color: #2c3e50
            display: flex
            align-items: center
            ul
                list-style-type: none
                padding: 0
                margin: 0
                display: inline-block
                li
                    display: inline-block
                    font-weight: bold
                    transition: all .3s linear 
                    a
                        text-decoration: none
                        color: inherit
                        padding: 15px
                        display: inline-block
                        transition: all .3s linear
                        &.router-link-exact-active
                            background-color: darken(#42b983, 10%)
                            color: lighten(#2c3e50, 70%)  
                    &:hover
                        cursor: pointer
                        background-color: darken(#42b983, 10%)
                        color: lighten(#2c3e50, 70%)
            #nav-logo
                display: inline-block
                font-size: 20px
                font-weigth: bold
                padding: 0 5px
                background-color: #2c3e50
                color: #42b983
            #langSelect
                border: 1px solid #2c3e50
                margin-left: auto
                outline: none
</style>