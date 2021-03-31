import api from 'api'

import { SINGUP } from './types.js'
export default {
	async [SINGUP]({ commit }, data){
		var result = await api.singUp(data)
		console.log(result)
		commit(SINGUP)
	}
}