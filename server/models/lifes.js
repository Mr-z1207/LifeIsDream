var mongoose = require('mongoose');

var LifeSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
	},
	timestamp: {
		type: String,
	}
})

var LifeModel = mongoose.model('Life', LifeSchema);

module.exports = LifeModel;