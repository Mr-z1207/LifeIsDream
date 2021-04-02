import api from 'api'

import { GET_LIFEs, ADD_LIFEs, RM_LIFEs } from './types.js'
export default {
	async [GET_LIFEs]({ commit }){
		var result = await api.getLifes()
		if(result.code == 0){
			commit(GET_LIFEs, result.data)
		}
	},
	async [ADD_LIFEs]({ commit }, data){
		var result = await api.addLife(data)
		if(result.code == 0){
			commit(ADD_LIFEs, result.data)
		}
	},
	async [RM_LIFEs]({ commit }, id){
		var result = await api.rmLife({id})
		if(result.code == 0){
			commit(RM_LIFEs, result.data)
		}
	}
}