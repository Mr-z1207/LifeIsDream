var express = require('express');
var router = express.Router();
var LifeModel = require('../models/lifes.js');

// 获取lifes
router.get("/", async (req, res) => {
	// var { password, phone, username } = req.body
	try{
		LifeModel.find()
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