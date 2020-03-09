const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('Finding records', () => {
	it('saving a document', (done) => {
		let first = new MarioChar({
			name: 'easyOne=))'
		});
		first.save().then(() => {
			assert(first.isNew === false);
			done();
		});
	});
});













