var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username:{
		type: String,
	},
	password:{
		type: String,
	},
	isAdmin:{
		type: Boolean,
		default:false,             //默认是普通用户
	},
	phone:{
		type: String,
	}
})

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;