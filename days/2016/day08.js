const utils = require('../../utils');

const day8 = (input) => {
	const { instructions, height, width } = input;
	let array = utils.create2DArray(width, height, '.');

	instructions.forEach((instruction) => {
		const rect = instruction.match(/^rect (\d+)x(\d+)$/);
		const rotateC = instruction.match(/^rotate column x=(\d+) by (\d+)$/);
		const rotateR = instruction.match(/^rotate row y=(\d+) by (\d+)$/);

		if (rect) {
			utils.fill2DArray(array, '#', parseInt(rect[1], 10), parseInt(rect[2], 10));
		} else if (rotateC) {
			array = utils.rotateColumn(array, parseInt(rotateC[1], 10), parseInt(rotateC[2], 10));
		} else if (rotateR) {
			array = utils.rotateRow(array, parseInt(rotateR[1], 10), parseInt(rotateR[2], 10));
		}
	});

	array.forEach((row) => console.log(row.map((v) => v === '.' ? ' ' : v).join(' ')));

	return {
		part1: utils.countCharacterIn2DArray(array, '#'),
		part2: 0
	}
};

exports.day = day8;
