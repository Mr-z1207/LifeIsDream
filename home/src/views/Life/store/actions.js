import api from 'api'

import { GET_LIFEs, ADD_LIFEs } from './types.js'
export default {
	async [GET_LIFEs]({ commit }){
		var result = await api.getLifes()
		console.log(result)
		commit(GET_LIFEs)
	},
	async [ADD_LIFEs]({ commit }, data){
		var result = await api.addLife(data)
		console.log(result)
		commit(ADD_LIFEs, data)
	}
}