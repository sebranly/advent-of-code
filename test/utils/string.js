const assert = require('assert');
const utils = require('../../utils/string');

describe('string', function () {
	describe('allGroups', () => {
		it('handles an empty list', () => {
			assert.deepEqual(utils.allGroups(['']), []);
		});

		it('handles a list of one element', () => {
			assert.deepEqual(utils.allGroups(['abc']), []);
		});

		it('handles a list of two elements', () => {
			assert.deepEqual(utils.allGroups(['abc', 'def']), [
				['abc', 'def']
			]);
		});

		it('handles a list of two elements that are equal', () => {
			assert.deepEqual(utils.allGroups(['abc', 'abc']), [
				['abc', 'abc']
			]);
		});

		it('handles a list of three elements that are equal', () => {
			assert.deepEqual(utils.allGroups(['abc', 'def', 'ghe']), [
				['abc', 'def'],
				['abc', 'ghe'],
				['def', 'ghe']
			]);
		});
	});

	describe('stringOccurrences', () => {
		it('handles an empty string', () => {
			assert.deepEqual(utils.stringOccurrences(''), {});
		});

		it('handles a string', () => {
			assert.deepEqual(utils.stringOccurrences('bonjour$'), {
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

	describe('stringsDifferences', () => {
		it('handles empty strings', () => {
			assert.deepEqual(utils.stringsDifferences('', ''), {
				count: 0,
				indexes: []
			});
		});

		it('handles it when the first string is empty', () => {
			assert.deepEqual(utils.stringsDifferences('', 'abc'), {
				count: 3,
				indexes: [0, 1, 2]
			});
		});

		it('handles it when the last string is empty', () => {
			assert.deepEqual(utils.stringsDifferences('ab', ''), {
				count: 2,
				indexes: [0, 1]
			});
		});

		it('handles it when the first string is shorter', () => {
			assert.deepEqual(utils.stringsDifferences('ab', 'azbc'), {
				count: 3,
				indexes: [1, 2, 3]
			});
		});

		it('handles it when the last string is shorter', () => {
			assert.deepEqual(utils.stringsDifferences('abcdef', 'zscdr'), {
				count: 4,
				indexes: [0, 1, 4, 5]
			});
		});

		it('detects differences on strings of the same length', () => {
			assert.deepEqual(utils.stringsDifferences('abcdef', 'azcdwf'), {
				count: 2,
				indexes: [1, 4]
			});
		});

		it('returns an empty result when both strings are equal', () => {
			assert.deepEqual(utils.stringsDifferences('abcdef', 'abcdef'), {
				count: 0,
				indexes: []
			});
		});
	});
});