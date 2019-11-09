// Import Dependencies
const mongoose = require('mongoose');

// Activity Objects Factory
const ActivitySchema = new mongoose.Schema({
	action: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	count: {
		type: Number,
		required: true
	},
	timestamp: {
		type: Date,
		default: Date.now
	}
});

// Export ActivitySchema as Activity Model
module.exports = mongoose.model('Activity', ActivitySchema);
