var express = require('express');
var router = express.Router();
var UserModel = require('../models/users.js');

// 注册
router.post("/singUp", async (req, res) => {
	var { password, phone, username } = req.body
	try{
		var user = await UserModel.findOne({ phone: phone })
		if(user){
			res.json({
				code: 1,
				message: '用户已存在'
			})
			return
		}else{
			await new UserModel({
				username,
				password,
				phone
			}).save((err, newUser)=>{
				if(err){
					res.json({
						code: 1,
						message: '网络错误，请稍后再试'
					})
					return
				}else{
					res.json({
						code: 0,
						message: '注册成功',
						data: {
							username: newUser.username
						}
					})
				}
			})
		}
	}
	catch (e) {
		console.log(e)
		res.json({
			code: 1,
			message: '注册失败'
		})
	}
})

module.exports = router;