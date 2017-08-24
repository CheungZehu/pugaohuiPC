import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		pageNumber: 0,
		pageTotal: 0,
	},
	mutations: {
		updatePageNumber (state, payload) {
			state.pageNumber = payload.page
			window.localStorage.setItem('pageNumber', payload.page)
		},
		updatePageTotal (state, payload) {
			state.pageTotal = payload.total
			window.localStorage.setItem('pageTotal', payload.total)
		},
	},
	actions: {
		updatePageNumber ({commit}, page) {
			commit({type: 'updatePageNumber', page: page})
		},
		updatePageTotal ({commit}, total) {
			commit({type: 'updatePageTotal', total: total})
		},
	}
})