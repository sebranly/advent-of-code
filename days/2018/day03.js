const {
	cloneDeep,
	flatten,
	flattenDeep,
	orderBy,
	reverse,
	sortBy,
	uniq
} = require('lodash');
const utils = require('../../utils');

const day3 = (input, partNumber) => {
	const solution = { part1: `${input[0]}${input[1]}`, part2: `${input[1]}${input[0]}` };
	return solution;
};

exports.day = day3;