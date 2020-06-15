import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		apiKey: '76503ead29cf4d4da7b86b7947954b54',
		countryNews: [],
		bbcNews: [],
		singleNews: null,
		lang: "0",
		countries: ['us', 'de']
  	},
  	mutations: {
		updateCountryNews(state, payload) {
			state.countryNews = payload
		},
		updateBbcNews(state, payload) {
			state.bbcNews = payload
		},
		updateSingleNews(state, payload) {
			state.singleNews = payload
		},
		updateLang(state, payload) {
			state.lang = payload.target.value
		}
  	},
  	actions: {
		async updateCountryNews({ commit, state }) {
			const url = `https://newsapi.org/v2/`
			const query = `top-headlines?country=${ state.countries[+state.lang] }&pageSize=5&apiKey=${ state.apiKey }`
			const response = await fetch(url + query)
			const data = await response.json()
			commit('updateCountryNews', data.articles)
		},
		async updateBbcNews({ commit, state }) {
			const url = `https://newsapi.org/v2/`
			const query = `top-headlines?sources=bbc-news&apiKey=${ state.apiKey }`
			const response = await fetch(url + query)
			const data = await response.json()
			commit('updateBbcNews', data.articles)
		}
  	},
  	modules: {
  	}
})
