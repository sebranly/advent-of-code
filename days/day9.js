const utils = require('../utils');

const day9bis = (input, partNumber, cache = {}) => {
	const output = { part1: [], part2: [] };

	let cursor = 0;
	while (cursor < input.length) {
		if (input[cursor] === '(') {
			const portion = input.substring(cursor);
			const matches = portion.match(/(\d+)x(\d+)/);
			const numberOfCharacters = parseInt(matches[1], 10);
			const repetition = parseInt(matches[2], 10);
			const offset = matches[1].length + matches[2].length + 3;
			const toBeDuplicated = portion.substring(offset, offset + numberOfCharacters);
			for (let i = 0 ; i < repetition ; i++)
				output[`part${partNumber}`].push(...toBeDuplicated.split(''));

			cursor = cursor + offset + numberOfCharacters;
		} else {
			output[`part${partNumber}`].push(input[cursor]);
			cursor += 1;
		}
	}

	const solution2 = output.part2.join('');

	const part2 = solution2.includes('(')
		? utils.b(solution2).map((decompo) => {
			const cacher = cache[decompo];
			if (cacher !== undefined) {
				return cache[decompo];
			}
			return day9bis(decompo, 2, cache).part2;
		}).reduce((v, acc) => v + acc)
		: solution2.length;
	cache[input] = part2;

	return {
		part1: output.part1.join('').length,
		part2
	};
};

const day9 = (input, partNumber) => {
	if (partNumber === 1)
		return day9bis(input, partNumber);
	else {
		return {
			part2: utils.b(input).map((decompo) => day9bis(decompo, 2).part2).reduce((v, acc) => acc + v)
		};
	}
};

exports.day = day9;
