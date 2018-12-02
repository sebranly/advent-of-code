const utils = require('../../utils');
const { find } = require('lodash');

const day2 = (input) => {
	const solution = {};
	let count2 = 0, count3 = 0;

	input.forEach((line) => {
		const occ = utils.occurrences(line);
		if (Object.values(occ).includes(2)) count2++;
		if (Object.values(occ).includes(3)) count3++;
	});
	solution.part1 = count2 * count3;

	for (let index1 = 0 ; index1 < input.length ; index1++) {
		for (let index2 = 0 ; index2 < input.length ; index2++) {
			if (index1 !== index2) {
				const line1 = input[index1];
				const line2 = input[index2];

				for (let i = 0 ; i < line1.length ; i++) {
					const l1 = utils.replaceAt(line1, i, '');
					const l2 = utils.replaceAt(line2, i, '');
					if (l1 === l2) {
						solution.part2 = l1;
						return solution;
					}
				}
			}
		}
	}
	return solution;
};

exports.day = day2;
