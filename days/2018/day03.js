const utils = require('../../utils');

const day3 = (input) => {
	const a = utils.create2DArray(1000, 1000, '.');
	const collapsed = {};
	const solution = {};
	const lastId = parseInt(input[input.length - 1].match(/#(\d+) @/)[1], 10);
	input.forEach((line) => {
		const match = line.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
		const id = parseInt(match[1], 10);
		const xd1 = parseInt(match[2], 10);
		const yd1 = parseInt(match[3], 10);
		const xd2 = parseInt(match[4], 10);
		const yd2 = parseInt(match[5], 10);

		for (let y = yd1 ; y < yd1 + yd2 ; y++) {
			for (let x = xd1 ; x < xd1 + xd2 ; x++) {
				if (a[y][x] === '.') {
					a[y][x] = id;
				} else if (a[y][x] === '#') {
					collapsed[id] = true;
				} else {
					collapsed[a[y][x]] = true;
					collapsed[id] = true;
					a[y][x] = '#';
				}
			}
		}
	});
	for (let i = 1 ; i <= lastId ; i++) {
		if (!collapsed[i]) solution.part2 = i;
	}
	solution.part1 = utils.countCharacterIn2DArray(a, '#');
	return solution;
};

exports.day = day3;