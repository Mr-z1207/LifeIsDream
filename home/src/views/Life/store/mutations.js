import { GET_LIFEs, ADD_LIFEs, RM_LIFEs } from './types.js'
export default {
	[GET_LIFEs](state, payload){
		state.lifes = payload
	},
	[ADD_LIFEs](state, payload){
		state.lifes.push(payload)
	},
	[RM_LIFEs](state, payload){
		var index = deleteLifeById(state.lifes, payload)
		state.lifes.splice(index, 1)
	}
}


function deleteLifeById(lifes, id) {
	var index = -1
	lifes.forEach((item, key)=>{
		if(item._id == id){
			index = key
		}
	})
	return index
}