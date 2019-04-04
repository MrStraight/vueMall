import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		city:'石家庄'
	},
/* 	actions:{
		ChangeCity(ctx,e){
			ctx.commit('changcity',e)
		}
	}, */
	mutations:{
		ChangeCity(state,e){
			this.state.city = e
		}
	}
})

