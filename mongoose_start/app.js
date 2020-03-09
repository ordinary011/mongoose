const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', err => {
	console.log(err);
}).once('open', () => {
	console.log('we have connected');
	let kittySchema = new mongoose.Schema({
		name: String
	});
	kittySchema.methods.speak = function() {
		let greeting = this.name ? `Meow this name is ${this.name}` : "I don't have a name";
	};
	let kittyModel = mongoose.model('kittyModel', kittySchema);
	let silence = new kittyModel({ name: 'Silence' });
	let fluffy = new kittyModel({ name: 'fluffy' });
	// silence.save((err, silence) => {
	// 	if (err) return console.error(err);

	//     silence.speak();
	// });
	// fluffy.save((err, fluffy) => {
	// 	if (err) return console.error(err);
	//     fluffy.speak();

	// });
	kittyModel.find(function(err, kittymodels) {
		if (err) return console.error(err);
		console.log(kittymodels);
	});
	kittyModel.find({ name: 'fluffy' }, (err, fluffy) => {
		if (err) return console.error(err);
		console.log(fluffy);
	});
});
