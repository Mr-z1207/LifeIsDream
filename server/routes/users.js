var express = require('express');
var router = express.Router();
var UserModel = require('../models/users.js');

// 注册
router.post("/singUp", async (req, res) => {
	console.log('1:::', req.body)
	// console.log('2:::', req.data)
	// console.log('3:::', req.params)
	res.send("ok")
})

module.exports = router;