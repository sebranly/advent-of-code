const { sortBy } = require('lodash');
const utils = require('../utils');

const day3 = (input) => {
	const tuples = input.split(',');
	let validTuples = 0;
	tuples.forEach((tuple) => {
		const values = utils.sanitizeTupleDay3(tuple);
		const sortedValues = sortBy(values);
		if (sortedValues[0] + sortedValues[1] > sortedValues[2])
			validTuples++;
	});

	let validVerticalTuples = 0;
	for (let i = 0 ; i < tuples.length ; i += 3) {
		[0, 1, 2].forEach((column) => {
			const values = [
				utils.sanitizeTupleDay3(tuples[i])[column],
				utils.sanitizeTupleDay3(tuples[i + 1])[column],
				utils.sanitizeTupleDay3(tuples[i + 2])[column],
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
