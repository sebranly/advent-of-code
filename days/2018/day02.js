const utils = require('../../utils');

const day2 = (input) => {
	const solution = {};
	let count2 = 0, count3 = 0;

	input.forEach((line) => {
		const occ = utils.stringOccurrences(line);
		if (Object.values(occ).includes(2)) count2++;
		if (Object.values(occ).includes(3)) count3++;
	});
	solution.part1 = count2 * count3;

	const pairs = utils.allCombinations(input);
	pairs.forEach((pair) => {
		const diff = utils.stringsDifferences(pair[0], pair[1]);
		if (diff.count === 1) {
			solution.part2 = utils.replaceAt(pair[0], diff.indexes[0], '');
			return solution;
		}
	});

	return solution;
};

exports.day = day2;
