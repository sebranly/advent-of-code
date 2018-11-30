const backToPositive = (value, increment) => {
	let safeValue = value;
	while (safeValue < 0)
		safeValue += increment;
	return safeValue;
};

const coordBetween = (coord, xMin, xMax, yMin, yMax) =>
	valueBetween(coord.x, xMin, xMax) && valueBetween(coord.y, yMin, yMax);

const coordMove = (coord, change) => {
	switch (change) {
		case 'U':
			coord.y--;
			break;
		case 'R':
			coord.x++;
			break;
		case 'D':
			coord.y++;
			break;
		case 'L':
		default:
			coord.x--;
			break;
	}
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
