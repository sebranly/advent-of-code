const assert = require('assert');
const utils = require('../../utils/string');

describe('string', function () {
	describe('allCombinations', () => {
		it('handles an empty list', () => {
			assert.deepEqual(utils.allCombinations(['']), []);
		});

		it('handles a list of one element', () => {
			assert.deepEqual(utils.allCombinations(['abc']), []);
		});

		it('handles a list of two elements', () => {
			assert.deepEqual(utils.allCombinations(['abc', 'def']), [
				['abc', 'def']
			]);
		});

		it('handles a list of two elements that are equal', () => {
			assert.deepEqual(utils.allCombinations(['abc', 'abc']), [
				['abc', 'abc']
			]);
		});

		it('handles a list of three elements', () => {
			assert.deepEqual(utils.allCombinations(['abc', 'def', 'ghe']), [
				['abc', 'def'],
				['abc', 'ghe'],
				['def', 'ghe']
			]);
		});

		it('handles a list of two elements (triplets)', () => {
			assert.deepEqual(utils.allCombinations(['abc', 'def'], 3), []);
		});

		it('handles a list of three elements (triplets)', () => {
			assert.deepEqual(utils.allCombinations(['abc', 'def', 'ghe'], 3), [
				['abc', 'def', 'ghe']
			]);
		});

		it('handles a list of four elements (triplets)', () => {
			assert.deepEqual(utils.allCombinations([1, 2, 3, 4], 3), [
				[1, 2, 3],
				[1, 2, 4],
				[1, 3, 4],
				[2, 3, 4]
			]);
		});

		it('handles a list of five elements (triplets)', () => {
			assert.deepEqual(utils.allCombinations([1, 2, 3, 4, 5], 3), [
				[1, 2, 3],
				[1, 2, 4],
				[1, 2, 5],
				[1, 3, 4],
				[1, 3, 5],
				[1, 4, 5],
				[2, 3, 4],
				[2, 3, 5],
				[2, 4, 5],
				[3, 4, 5]
			]);
		});

		it('handles a list of six elements (5-element group)', () => {
			assert.deepEqual(utils.allCombinations([1, 2, 3, 4, 5, 6], 5), [
				[1, 2, 3, 4, 5],
				[1, 2, 3, 4, 6],
				[1, 2, 3, 5, 6],
				[1, 2, 4, 5, 6],
				[1, 3, 4, 5, 6],
				[2, 3, 4, 5, 6]
			]);
		});
	});

	describe('allCombinationsAllSizes', () => {
		it('handles an empty list', () => {
			assert.deepEqual(utils.allCombinationsAllSizes([]), []);
		});

		it('handles a list of one element', () => {
			assert.deepEqual(utils.allCombinationsAllSizes([1]), [
				[1]
			]);
		});

		it('handles a list of two elements', () => {
			assert.deepEqual(utils.allCombinationsAllSizes([1, 2]), [
				[1],
				[2],
				[1, 2]
			]);
		});

		it('handles a list of three elements', () => {
			assert.deepEqual(utils.allCombinationsAllSizes([1, 2, 3]), [
				[1],
				[2],
				[3],
				[1, 2],
				[1, 3],
				[2, 3],
				[1, 2, 3]
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