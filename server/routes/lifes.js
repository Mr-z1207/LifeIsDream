var express = require('express');
var router = express.Router();
var LifeModel = require('../models/lifes.js');

// 获取lifes
router.get("/", async (req, res) => {
	// var { password, phone, username } = req.body
	try{
		LifeModel.find({  }, "-__v").sort('timestamp')
		.then((Lifes)=>{
			if(Lifes){
				res.json({
					code: 0,
					data: Lifes
				})
			}else{
				res.json({
					code: 1,
					message: '网络错误，请稍后再试'
				})
			}
		})
	}
	catch (e) {
		console.log(e)
		res.json({
			code: 1,
			message: '网络错误，请稍后再试'
		})
	}
})

// 新增lifes
router.post("/add", async (req, res) => {
	var { title, content, timestamp } = req.body
	try{
		new LifeModel({
			title,
			content,
			timestamp
		}).save((err, newLife)=>{
			if(err){
				res.json({
					code: 1,
					message: '网络错误，请稍后再试'
				})
				return
			}else{
				res.json({
					code: 0,
					message: '添加成功'
				})
			}
		})
	}
	catch (e) {
		console.log(e)
		res.json({
			code: 1,
			message: '网络错误，请稍后再试'
		})
	}
})

// 删除lifes
router.post("/rm", async (req, res) => {
	var {id} = req.body
	try{
		LifeModel.findById(id)
		.then((Life)=>{
			if(Life){
				Life.remove((err, doc)=>{
					if(err){
						res.json({
							code: 1,
							message: '网络错误，请稍后再试'
						})
					}else{
						res.json({
							code: 0,
							message: '删除成功',
							data: doc._id
						})
					}
				})
			}else{
				res.json({
					code: 1,
					message: '网络错误，请稍后再试'
				})
			}
		})
	}
	catch (e) {
		console.log(e)
		res.json({
			code: 1,
			message: '网络错误，请稍后再试'
		})
	}
})

module.exports = router;