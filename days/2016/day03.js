const { sortBy } = require('lodash');
const utils = require('../../utils');

const day3 = (input) => {
	let validTuples = 0;
	input.forEach((tuple) => {
		const sortedValues = sortBy(tuple);
		if (sortedValues[0] + sortedValues[1] > sortedValues[2])
			validTuples++;
	});

	let validVerticalTuples = 0;
	for (let i = 0 ; i < input.length ; i += 3) {
		[0, 1, 2].forEach((column) => {
			const values = [
				input[i][column],
				input[i + 1][column],
				input[i + 2][column],
			];
			const sortedValues = sortBy(values);
			if (sortedValues[0] + sortedValues[1] > sortedValues[2])
				validVerticalTuples++;
		});
	}

	return {
		part1: validTuples,
		part2: validVerticalTuples
	};
};

exports.day = day3;
