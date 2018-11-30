const { clone } = require('lodash');

const backToPositive = (value, increment) => {
	let safeValue = value;
	while (safeValue < 0)
		safeValue += increment;
	return safeValue;
};

const coordBetween = (coord, minCoord, maxCoord) =>
	valueBetween(coord.x, minCoord.x, maxCoord.x) && valueBetween(coord.y, minCoord.y, maxCoord.y);

const coordMove = (coord, change) => {
	const copyCoord = clone(coord);
	switch (change) {
		case 'U':
			copyCoord.y--;
			break;
		case 'R':
			copyCoord.x++;
			break;
		case 'D':
			copyCoord.y++;
			break;
		case 'L':
		default:
			copyCoord.x--;
			break;
	}
	return copyCoord;
};

const distanceFromOrigin = (coord) =>
	Math.abs(coord.x) + Math.abs(coord.y);

const makeValueCorrect = (value, min, max) => {
	if (value < min)
		value = min;
	else if (value > max)
		value = max;
	return value;
};

const minMax = (array) => {
	if (array[0] < array[1])
		return array;
	else
		return [array[1], array[0]];
};

const valueBetween = (value, min, max) =>
	value >= min && value <= max;

module.exports = {
	backToPositive,
	coordBetween,
	coordMove,
	distanceFromOrigin,
	makeValueCorrect,
	minMax,
	valueBetween
};
