const assert = require('assert');
const utils = require('../../utils/string');

describe('string', function () {
	describe('occurrences', () => {
		it('handles an empty string', () => {
			assert.deepEqual(utils.occurrences(''), {});
		});

		it('handles a string', () => {
			assert.deepEqual(utils.occurrences('bonjour$'), {
				'b': 1,
				'o': 2,
				'n': 1,
				'j': 1,
				'u': 1,
				'r': 1,
				'$': 1
			});
		});
	});
});