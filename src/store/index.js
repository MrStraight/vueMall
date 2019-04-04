import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let DefaultCity = '石家庄'
try{								//兼容性
	if(localStorage.city){
		DefaultCity = localStorage.city
	}
}catch(e){}
export default new Vuex.Store({
	state:{
		city:DefaultCity
	},
/* 	actions:{
		ChangeCity(ctx,e){
			ctx.commit('changcity',e)
		}
	}, */
	mutations:{
		ChangeCity(state,e){
			state.city = e
			try{				//兼容性
				localStorage.city = e
			}catch(e){}
		}
	}
})

