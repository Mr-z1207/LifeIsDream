// import api from 'api'

import { GET_LIFEs } from './types.js'
export default {
	[GET_LIFEs]({ commit }){
		commit(GET_LIFEs, {
			lifes: [
			{
				title: "出生",
				timestamp: "1998/6/5",
				content: "第一眼见到这个世界，会是什么养的心情呢？"
			},
			{
				title: "上小学",
				timestamp: "2006/9/1",
				content: "开学啦，不知道会不会交到好朋友？"
			}
			]
		})
	}
}