const utils = require('../utils');

const day2 = (input) => {
	const pads = [
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		],
		[
			[null, null, 1, null, null],
			[null, 2, 3, 4, null],
			[5, 6, 7, 8, 9],
			[null, 'A', 'B', 'C', null],
			[null, null, 'D', null, null]
		]
	];
	const codes = [[], []];
	let coords = [
		{ x: 1, y: 1 },
		{ x: 0, y: 2 }
	];
	const steps = input.split(',');
	steps.forEach((step) => {
		for (let i = 0; i < step.length; i++) {
			const letter = step.charAt(i);
			copyCoord = { ...coords[1] };

			[0, 1].forEach((index) =>
				utils.coordMove(coords[index], letter)
			);

			['x', 'y'].forEach((axis) =>
				coords[0][axis] = utils.makeValueCorrect(coords[0][axis], 0, 2)
			);

			if (!utils.coordBetween(coords[1], 0, 4, 0, 4) || !pads[1][coords[1].y][coords[1].x]) {
				coords[1] = { ...copyCoord };
			}
		}
		[0, 1].forEach((index) => {
			codes[index].push(pads[index][coords[index].y][coords[index].x]);
		});
	});

	return {
		part1: parseInt(codes[0].join(''), 10),
		part2: codes[1].join('')
	};
};

exports.day = day2;