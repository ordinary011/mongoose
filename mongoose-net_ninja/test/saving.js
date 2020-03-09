const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe('saving to the db', () => {
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
