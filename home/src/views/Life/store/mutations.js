import { GET_LIFEs, ADD_LIFEs } from './types.js'
export default {
	[GET_LIFEs](state, payload){
		state.lifes = payload
	},
	[ADD_LIFEs](state, payload){
		state.lifes.push(payload.newLife)
	}
}