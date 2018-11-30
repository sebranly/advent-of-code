const assert = require('assert');
const utils = require('../../utils/math');

describe('math', function () {
	describe('backToPositive', () => {
		it('goes back to 0 if it goes 1 by 1', () => {
			assert.equal(utils.backToPositive(-5, 1), 0);
		});

		it('goes back to the first positive value', () => {
			assert.equal(utils.backToPositive(-105, 51), 48);
		});
	});

	describe('coordBetween', () => {
		it('returns true if it is within the ranges', () => {
			assert.equal(utils.coordBetween(
				{ x: 5, y: 6 },
				{ x: 0, y: 1 },
				{ x: 6, y: 7},
			), true);
		});

		it('returns true if it is on the first point', () => {
			assert.equal(utils.coordBetween(
				{ x: 0, y: 1 },
				{ x: 0, y: 1 },
				{ x: 6, y: 7},
			), true);
		});

		it('returns true if it is on the last point', () => {
			assert.equal(utils.coordBetween(
				{ x: 6, y: 7 },
				{ x: 0, y: 1 },
				{ x: 6, y: 7},
			), true);
		});

		it('returns false if it is beyond the first point', () => {
			assert.equal(utils.coordBetween(
				{ x: 0, y: 0 },
				{ x: 0, y: 1 },
				{ x: 6, y: 7},
			), false);
		});

		it('returns false if it is beyond the last point', () => {
			assert.equal(utils.coordBetween(
				{ x: 7, y: 7 },
				{ x: 0, y: 1 },
				{ x: 6, y: 7},
			), false);
		});
	});

	describe('coordMove', () => {
		it('goes up', () => {
			assert.deepEqual(utils.coordMove({ x: 5, y: 6 }, 'U'), { x: 5, y: 5 });
		});

		it('goes down', () => {
			assert.deepEqual(utils.coordMove({ x: 5, y: 6 }, 'D'), { x: 5, y: 7 });
		});

		it('goes left', () => {
			assert.deepEqual(utils.coordMove({ x: 5, y: 6 }, 'L'), { x: 4, y: 6 });
		});

		it('goes right', () => {
			assert.deepEqual(utils.coordMove({ x: 5, y: 6 }, 'R'), { x: 6, y: 6 });
		});
	});

	describe('distanceFromOrigin', () => {
		it('handles positive values', () => {
			assert.equal(utils.distanceFromOrigin({ x: 5, y: 6 }), 11);
		});

		it('handles negative values', () => {
			assert.equal(utils.distanceFromOrigin({ x: -5, y: -6 }), 11);
		});
	});

	describe('makeValueCorrect', () => {
		it('returns the lowest extremity if the value is below', () => {
			assert.equal(utils.makeValueCorrect(-1, 0, 5), 0);
		});

		it('returns the highest extremity if the value is above', () => {
			assert.equal(utils.makeValueCorrect(6, 0, 5), 5);
		});

		it('returns the same value if the value is between the extremities', () => {
			assert.equal(utils.makeValueCorrect(3, 0, 5), 3);
		});
	});

	describe('minMax', () => {
		it('returns the same array if it is already sorted', () => {
			assert.deepEqual(utils.minMax([0, 1]), [0, 1]);
		});

		it('returns the same array if both values are the same', () => {
			assert.deepEqual(utils.minMax([2, 2]), [2, 2]);
		});

		it('returns the reversed array if the two values are switched', () => {
			assert.deepEqual(utils.minMax([2, 1]), [1, 2]);
		});
	});

	describe('valueBetween', () => {
		it('returns true if it is between two values', () => {
			assert.equal(utils.valueBetween(-3, -5, -1), true);
		});

		it('returns true if it is at the lowest extremity', () => {
			assert.equal(utils.valueBetween(-5, -5, -1), true);
		});

		it('returns true if it is at the highest extremity', () => {
			assert.equal(utils.valueBetween(-1, -5, -1), true);
		});

		it('returns false if it is lower than the lowest extremity', () => {
			assert.equal(utils.valueBetween(-6, -5, -1), false);
		});

		it('returns false if it is greater than the highest extremity', () => {
			assert.equal(utils.valueBetween(0, -5, -1), false);
		});
	});
});