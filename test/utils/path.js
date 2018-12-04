const assert = require('assert');
const utils = require('../../utils/path');

describe('path', function () {
	describe('fillShortestPath', () => {
		it('fills the maze with the shortest number of steps from a reference for an imperfect maze', () => {
			const array = [
				['#', '#', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.'],
				['.', '#', '.', '#', '.', '.'],
				['.', '.', '.', '.', '.', '.'],
				['.', '.', '#', '#', '.', '.'],
				['#', '.', '.', '.', '#', '.'],
				['#', '#', '.', '.', '.', '.']
			];
			utils.fillShortestPath(array, 3, 5, '.', 6, 7);
			const vd = '#';
			const solution = [
				[vd, vd, 08, 09, 10, 09],
				[07, 08, 07, 08, 09, 08],
				[06, vd, 06, vd, 08, 07],
				[05, 04, 05, 06, 07, 06],
				[04, 03, vd, vd, 06, 05],
				[vd, 02, 01, 00, vd, 04],
				[vd, vd, 02, 01, 02, 03]
			];
			assert.deepEqual(array, solution);
		});
	});

	describe('shortestPath', () => {
		it('returns the shortest path between two points in an imperfect maze', () => {
			const array = [
				[{ value: '.', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }],
				[{ value: '.', stepsToReach: 20 }, { value: '#', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }, { value: '#', stepsToReach: 20 }],
				[{ value: '.', stepsToReach: 20 }, { value: '#', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }],
				[{ value: '.', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }, { value: '#', stepsToReach: 20 }],
				[{ value: '.', stepsToReach: 20 }, { value: '#', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }, { value: '.', stepsToReach: 20 }],
			];
			assert.equal(utils.shortestPath(array, 3, 0, 1, 3, '#', 4, 5), 5);
		});
	});
});