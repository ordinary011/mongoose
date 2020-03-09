const mongoose = require('mongoose');

const path = require('path');

let PersonSchema = new mongoose.Schema({
	name: {
		// enum: ['Bob', 'Rob']
		type: String,
		validate: {
			validator: n => {
				return n === 'xxx' ? false : true;
			},
			message: `Name can't be "xxx"`
		}
	},
	age: {
		type: Number,
		min: 18,
		max: 100,
		required: true
	},
	skills: [String],
	hair: Boolean
});

PersonSchema.query.OlderThan = function(a) {
	return this.find({
		age: { $gt: a }
	});
};

let PersonModel = mongoose.model('personn', PersonSchema);

module.exports = PersonModel;
