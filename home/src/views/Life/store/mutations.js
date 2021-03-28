import { GET_LIFEs } from './types.js'
export default {
	[GET_LIFEs](state, payload){
		state.lifes = payload.lifes
	}
}