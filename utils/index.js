const md5 = require('js-md5');
const { cloneDeep, sortBy } = require('lodash');

const ABAMatches = (string) => {
	const matches = [];
	for (let i = 0 ; i < string.length - 2 ; i++) {
		if (string[i] !== string[i + 1] && string[i] === string[i + 2]) {
			matches.push(string.substring(i, i + 3));
		}
	}
	return matches.length
		? matches
		: null;
};

const b = (a) => {
	let count = 0;
	const matches = a.match(/^\((\d+)x\d+\)/);
	let number = matches ? matches[1] : 0;
	const c = [];
	let ch = [];
	let sawLetter = false;
	let sawInitialClose = false;
	for (let i = 0 ; i < a.length ; i++) {
		if (a[i] >= 'A' && a[i] <= 'Z') {
			sawLetter = true;
			count += 1;
			ch.push(a[i]);
		} else if (a[i] === '(' && sawLetter && count >= number) {
			portion = a.substring(i);
			const goals = portion.match(/^\((\d+)x\d+\)/);
			number = goals ? goals[1] : 0;
			c.push(ch.join(''));
			ch = [a[i]];
			sawLetter = false;
			sawInitialClose = false;
			count = 0;
		} else {
			if (!sawInitialClose && a[i] === ')') {
				sawInitialClose = true;
			} else if (sawInitialClose) {
				count += 1;
			}
			ch.push(a[i]);
		}
	}
	c.push(ch.join(''));
	return c;
};

const BABMatches = (string, aba) => {
	for (let i = 0 ; i < string.length - 2 ; i++) {
		if (string[i] !== string[i + 1] && string[i] === string[i + 2] && string[i] === aba[1] && string[i + 1] === aba[0]) {
			return true;
		}
	}
	return false;
};

const backToPositive = (value, increment) => {
	let safeValue = value;
	while (safeValue < 0)
		safeValue += increment;
	return safeValue;
};

const containsABBA = (string) => {
	for (let i = 0 ; i < string.length - 3 ; i++) {
		if (string[i] !== string[i + 1] && string[i] === string[i + 3] && string[i + 1] === string[i + 2]) {
			return true;
		}
	}
	return false;
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

const countOccurrenceOfCharInString = (character, string) => {
	let counter = 0;
	for (let i = 0 ; i < string.length ; i++) {
		if (string[i] === character)
			counter++;
	}
	return counter;
};

const create2DArray = (width, height, defaultValue = null) => {
	let a = new Array(height);

	for (let i = 0; i < a.length; i++) {
			a[i] = new Array(width);
	}

	return fill2DArray(a, defaultValue);
};

const distanceFromOrigin = (coord) =>
	Math.abs(coord.x) + Math.abs(coord.y);

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

const fillShortestPath = (array, currentX, currentY, canWalkOn, limitSize, steps = 0) => {
	const correctValues = valueBetween(currentX, 0, limitSize - 1) && valueBetween(currentY, 0, limitSize - 1);
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
		fillShortestPath(array, currentX + move[0], currentY + move[1], canWalkOn, limitSize, steps + 1);
	}
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

const getCesarMapping = (checksum) => {
	const letters = [];
	for (let i = 0 ; i < 26 ; i++) {
		const asciiCode = i + 97;
		const letter = String.fromCharCode(asciiCode);
		const destination = String.fromCharCode(protectCesar(asciiCode + checksum));

		letters.push({
			source: letter,
			destination
		});
	}
	return letters;
};

const getAllPermutations = (string) => {
		const results = [];

		if (string.length === 1) {
				results.push(string);
				return results;
		}

		for (let i = 0; i < string.length; i++) {
				const firstChar = string[i];
				const charsLeft = string.substring(0, i) + string.substring(i + 1);
				const innerPermutations = getAllPermutations(charsLeft);
				for (let j = 0; j < innerPermutations.length; j++) {
						results.push(firstChar + innerPermutations[j]);
				}
		}
		return results;
};

const getSize2DArray = (array) => {
	return {
		height: array.length,
		width: array[0].length
	};
};

const indexDay4 = (array, character) => {
	for (let i = 0 ; i < array.length ; i++) {
		if (array[i].character === character)
			return i;
	}
	return undefined;
};

const isLowerCaseLetter = (character) =>
	character >= 'a' && character <= 'z';

const makeValueCorrect = (value, min, max) => {
	if (value < min)
		value = min;
	else if (value > max)
		value = max;
	return value;
};

const md5Recursive = (originalHash, level = 0) => {
	if (level === 2016)
		return originalHash;
	return md5Recursive(md5(originalHash), level + 1);
};

const minMax = (array) => {
	if (array[0] < array[1])
		return array;
	else
		return [array[1], array[0]];
};

const protectCesar = (charCode) => {
	const max = 97 + 26 - 1;
	let safeCharCode = charCode;
	if (safeCharCode <= max)
		return safeCharCode;
	while (safeCharCode > max)
		safeCharCode -= 26;
	return safeCharCode;
};

const replaceAt = (string, index, character) =>
	`${string.substr(0, index)}${character}${string.substr(index + 1)}`;

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

const sanitizeTupleDay3 = (tuple) =>
	tuple.split(' ').map((v) => parseInt(v, 10));

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

const translateWithMapping = (mapping, letter) =>
	mapping[letter.charCodeAt(0) - 97].destination;

const valueBetween = (value, min, max) =>
	value >= min && value <= max;

module.exports = {
	ABAMatches,
	b,
	BABMatches,
	containsABBA,
	coordBetween,
	coordMove,
	countCharacterIn2DArray,
	countOccurrenceOfCharInString,
	create2DArray,
	distanceFromOrigin,
	fill2DArray,
	fillShortestPath,
	findIndexIn2DArray,
	getAllPermutations,
	getCesarMapping,
	indexDay4,
	isLowerCaseLetter,
	makeValueCorrect,
	md5Recursive,
	minMax,
	replaceAt,
	rotateColumn,
	rotateRow,
	sanitizeTupleDay3,
	shortestPath,
	translateWithMapping,
	valueBetween
};
