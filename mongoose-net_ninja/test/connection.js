const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

before(done => {
	mongoose.connect('mongodb://localhost/testarr', { useNewUrlParser: true });
	mongoose.connection
		.once('open', () => {
			console.log('You have connected to mongodb with mongoose');
			done();
		})
		.on('error', err => {
			console.log(`Damn no way=)) ${err}`);
		});
});

beforeEach(done => {
	mongoose.connection.collections.mariochars.drop(() => {
		done();
	});
});


