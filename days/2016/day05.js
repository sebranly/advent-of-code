const md5 = require('js-md5');
const utils = require('../../utils');

const day5 = (input, partNumber = null) => {
	const code = [];
	let code2 = '12345678';
	const prefix = '00000';

	if (!partNumber || partNumber === 1) {
		let id = 0;
		while (code.length < 8) {
			const hash = md5(`${input}${id}`);
			if (hash.startsWith(prefix)) {
				code.push(hash[5]);
			}
			id++;
		}
	}

	if (!partNumber || partNumber === 2) {
		let id = 0;
		const completedPositions = [];

		while (!(completedPositions.length === 8)) {
			const hash = md5(`${input}${id}`);
			const pos = parseInt(hash[5], 10);
			if (hash.startsWith(prefix) && utils.valueBetween(pos, 0, 7) && !completedPositions.find((cPos) => cPos === pos)) {
				completedPositions.push(pos);
				code2 = utils.replaceAt(code2, pos, hash[6]);
			}
			id++;
		}
	}

	return {
		part1: code.join(''),
		part2: code2
	}
};

exports.day = day5;
