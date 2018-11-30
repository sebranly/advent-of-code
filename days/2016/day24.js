const { cloneDeep } = require('lodash');
const utils = require('../../utils');

const day24 = (input, partNumber) => {
	const width = input[0].length;
	const height = input.length;
	const array = utils.create2DArray(width, height);
	for (let y = 0 ; y < height ; y++) {
		const values = [];
		for (let x = 0 ; x < width ; x++) {
			array[y][x] = { value: input[y].split('')[x], stepsToReach: width * height };
			values.push(array[y][x].value);
		}
	}

	const findSeven = utils.findIndexIn2DArray(array, '7');
	const bigArray = findSeven.x !== -1;
	const maxNumber = bigArray ? 7 : 4;
	const arrayNumbers = new Array(maxNumber);
	for (let i = 0 ; i < maxNumber ; i++) {
		arrayNumbers[i] = i + 1;
	}
	const extraSuffix = partNumber === 2 ? '0' : '';
	const allCombinations = utils.getAllPermutations(arrayNumbers.join('')).map((v) => `0${v}${extraSuffix}`);

	let solution = height * width;
	const cache = {};

	allCombinations.forEach((combination) => {
		let steps = 0;
		for (i = 0 ; i < combination.length - 1 ; i++) {
			const firstNumber = combination.charAt(i);
			const secondNumber = combination.charAt(i + 1);
			const source = utils.findIndexIn2DArray(array, firstNumber);
			const destination = utils.findIndexIn2DArray(array, secondNumber);
			const minMaxValues = utils.minMax([parseInt(firstNumber, 10), parseInt(secondNumber, 10)]);
			const key = `${minMaxValues[0]}-${minMaxValues[1]}`;
			if (cache[key]) {
				steps += cache[key];
			} else {
				const shortest = utils.shortestPath(cloneDeep(array), source.x, source.y, destination.x, destination.y, '#', width, height);
				steps += shortest;
				cache[key] = shortest;
			}
		}
		if (steps < solution) {
			solution = steps;
		}
	});

	return {
		part1: solution,
		part2: solution
	}
};

exports.day = day24;
