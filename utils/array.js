const { cloneDeep } = require('lodash');
const { backToPositive } = require('./math');

const countCharacterIn2DArray = (array, value) => {
	let count = 0;
	for (let i = 0; i < array.length ; i++) {
		for (let j = 0; j < array[i].length ; j++) {
			if (array[i][j] === value) {
				count++;
			}
		}
	}
	return count;
};

const create2DArray = (width, height, defaultValue = null) => {
	let a = new Array(height);

	for (let i = 0; i < a.length; i++) {
			a[i] = new Array(width);
	}

	return fill2DArray(a, defaultValue);
};

const fill2DArray = (array, value, limitX = null, limitY = null) => {
	const limitHeight = limitY
		? limitY
		: array.length;
	for (let i = 0; i < limitHeight ; i++) {
		const limitWidth = limitX
			? limitX
			: array[i].length;
		for (let j = 0; j < limitWidth ; j++) {
			array[i][j] = value;
		}
	}
	return array;
};

const findIndexIn2DArray = (array, value) => {
	const dimensions = getSize2DArray(array);
	for (let y = 0; y < dimensions.height ; y++) {
		for (let x = 0; x < dimensions.width ; x++) {
			if (array[y][x].value === value) {
				return { x, y };
			}
		}
	}
	return { x: -1, y: -1 };
};

const getSize2DArray = (array) => {
	return {
		height: array.length,
		width: array[0].length
	};
};

const rotateColumn = (array, column, offset) => {
	const newArray = cloneDeep(array);
	const size = getSize2DArray(array);
	for (let y = 0 ; y < size.height ; y++) {
		newArray[y][column] = array[backToPositive(y - offset, size.height)][column];
	}
	return newArray;
};

const rotateRow = (array, row, offset) => {
	const newArray = cloneDeep(array);
	const size = getSize2DArray(array);
	for (let x = 0 ; x < size.width ; x++) {
		newArray[row][x] = array[row][backToPositive(x - offset, size.width)];
	}
	return newArray;
};

module.exports = {
	countCharacterIn2DArray,
	create2DArray,
	fill2DArray,
	findIndexIn2DArray,
	getSize2DArray,
	rotateColumn,
	rotateRow
};
