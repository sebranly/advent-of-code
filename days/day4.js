const { orderBy } = require('lodash');
const utils = require('../utils');

const day4 = (input) => {
	let sum = 0;
	let part2;
	let checkSumPart2 = -1;
	input.forEach((line) => {
		const openingBracket = line.indexOf('[');
		const closingBracket = line.indexOf(']');
		const checksum = line.substring(openingBracket + 1, closingBracket);
		const name = line.substring(0, openingBracket);
		const lastDash = line.lastIndexOf('-');
		const shortName = line.substring(0, lastDash);
		const id = openingBracket !== -1
			? parseInt(line.substring(lastDash + 1, openingBracket), 10)
			: parseInt(line.substring(lastDash + 1), 10);
		const mapping = utils.getCesarMapping(id);

		const informationLetters = [];
		for (let i = 0; i < name.length ; i++) {
			const character = name[i];

			if (utils.isLowerCaseLetter(character)) {
				const indexInArray = utils.indexDay4(informationLetters, character);
				if (indexInArray === undefined) {
					informationLetters.push({
						character,
						occurrences: 1,
						order: informationLetters.length + 1
					});
				} else {
					informationLetters[indexInArray].occurrences++;
				}
			}
		}
		const correctInfo = orderBy(informationLetters, ['occurrences', 'character'], ['desc', 'asc']);
		let correct = true;
		for (let i = 0; i < checksum.length ; i++) {
			const character = checksum[i];
			if (correctInfo[i].character !== character)
				correct = false;
		}
		if (correct) sum += id;

		// Part 2
		const tempName = shortName.replace(/-/g, ' ');
		part2 = [];
		for (let i = 0; i < tempName.length ; i++) {
			const character = tempName[i];
			if (utils.isLowerCaseLetter(character)) {
				part2[i] = utils.translateWithMapping(mapping, character);
			} else {
				part2[i] = tempName[i];
			}
		}
		if (part2.join('').toLowerCase().includes('north'))
			checkSumPart2 = id;
	});

	return {
		part1: sum,
		part2: checkSumPart2 !== -1 ? checkSumPart2 : part2.join('')
	}
};

exports.day = day4;
