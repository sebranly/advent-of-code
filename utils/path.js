const { sortBy } = require('lodash');
const { valueBetween } = require('./math');

const fillShortestPath = (array, currentX, currentY, canWalkOn, width, height = width, steps = 0) => {
	const correctValues = valueBetween(currentX, 0, width - 1) && valueBetween(currentY, 0, height - 1);
	const canWalkOnCell = correctValues && (array[currentY][currentX] === canWalkOn || Number.isInteger(array[currentY][currentX]));
	if (!canWalkOnCell) {
		return;
	} else {
		if (array[currentY][currentX] === canWalkOn || array[currentY][currentX] > steps) {
			array[currentY][currentX] = steps;
		} else {
			return;
		}
	}

	const possibleMoves = [[0, 1], [0, -1], [-1, 0], [1, 0]];

	for (let i = 0 ; i < possibleMoves.length ; i++) {
		const move = possibleMoves[i];
		fillShortestPath(array, currentX + move[0], currentY + move[1], canWalkOn, width, height, steps + 1);
	}
};

// TBD: merge with fillShortestPath
const shortestPath = (array, currentX, currentY, goalX, goalY, canNotWalkOn, width, height, steps = 0) => {
	const correctValues = valueBetween(currentX, 0, width - 1) && valueBetween(currentY, 0, height - 1);
	const canWalkOnCell = correctValues && (array[currentY][currentX].value !== canNotWalkOn);
	if (!canWalkOnCell || steps >= array[currentY][currentX].stepsToReach) {
		// Maximum number of steps
		return width * height;
	} else if (currentX === goalX && currentY === goalY) {
		return steps;
	}
	array[currentY][currentX].stepsToReach = steps;
	const possibleMoves = [[0, 1], [0, -1], [-1, 0], [1, 0]];
	const results = [];

	for (let i = 0 ; i < possibleMoves.length ; i++) {
		const move = possibleMoves[i];
		results.push(shortestPath(array, currentX + move[0], currentY + move[1], goalX, goalY, canNotWalkOn, width, height, steps + 1));
	}
	return sortBy(results)[0];
};

module.exports = {
	fillShortestPath,
	shortestPath
};