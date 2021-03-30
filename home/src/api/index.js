import axios from 'axios'
import { SERVER, API_CONFIG } from './config.js'

/*
* 返回一个对象，其对象的属性是方法名,对象的值是方法
* {
* 	key: (data)=>{ ... }
* }
*/
function getApiObj(apiConfig){
	var apiObj = {}

	for (var key in apiConfig){
		apiObj[key] = (data) => {
			var url = apiConfig[key][0] || ''
			url = SERVER + url
			var method = apiConfig[key][1] || 'get'
			return request(url,method,data)
		}
	}

	return apiObj
}

function request(url,method,data){
	return new Promise((resolve,reject)=>{
		var options = {
			url,
			method,
			// 跨域请求是否提供凭据信息（cookie）
			withCredentials: true,
		}
		switch(options.method.toUpperCase()){
			case 'GET':
			case 'DELETE':
				options.params = data
				break
			default:
				options.data = data
		}

		axios(options)
		.then(result => {
			var data = result.data
			if(data.code == 10){
				resolve('code==10')
			}else{
				resolve(data)
			}
		})
		.catch(err => {
			reject(err)
		})
	})
}

export default getApiObj(API_CONFIG)