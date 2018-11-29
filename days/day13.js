const utils = require('../utils');

const day13 = ({ favoriteNumber, goalX, goalY, startPointX, startPointY }) => {
	const arbitrarySize = 100;
	const array = utils.create2DArray(arbitrarySize, arbitrarySize);
	const EMPTY_SYMBOL = '.';

	for (let x = 0 ; x < arbitrarySize ; x++) {
		for (let y = 0 ; y < arbitrarySize ; y++) {
			const value = x*x + 3*x + 2*x*y + y + y*y + favoriteNumber;
			// Note: it has some limitations but works here
			const binary = Number(value).toString(2);
			const numberOfOne = utils.countOccurrenceOfCharInString('1', binary);
			const arrayValue = numberOfOne % 2 === 0
				? EMPTY_SYMBOL
				: '#';
			array[y][x] = arrayValue;
		}
	}

	utils.fillShortestPath(array, startPointX, startPointY, EMPTY_SYMBOL, arbitrarySize);

	const displayArray = false;
	if (displayArray) {
		for (let y = 0 ; y < 10 ; y++) {
			console.log('');
			const line = [];
			for (let x = 0 ; x < arbitrarySize ; x++) {
				const value = array[y][x];
				const displayedValue = Number.isInteger(parseInt(value, 10))
					? ('0' + value).slice(-2)
					: `${value}${value}`;
				line.push(displayedValue);
			}
			console.log(line.join(' '));
		}
	}

	let count = 0;
	for (let x = 0 ; x < arbitrarySize ; x++) {
		for (let y = 0 ; y < arbitrarySize ; y++) {
			const value = parseInt(array[y][x], 10);
			if (Number.isInteger(value) && value <= 50) {
				count++;
			}
		}
	}

	return {
		part1: array[goalY][goalX],
		part2: count
	};
};

exports.day = day13;
