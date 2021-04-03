import moment from 'moment'
import { GET_LIFEs, ADD_LIFEs, RM_LIFEs } from './types.js'

function deleteLifeById(lifes, id) {
	var index = -1
	lifes.forEach((item, key)=>{
		if(item._id == id){
			index = key
		}
	})
	return index
}
function formatTimestamp(lifes) {
	lifes.forEach((item)=>{
		item.timestamp = moment(item.timestamp).format('YYYY年 M月 D日')
	})
}

export default {
	[GET_LIFEs](state, payload){
		formatTimestamp(payload)
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