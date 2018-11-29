const { flatten, uniq } = require('lodash');
const utils = require('../utils');

const day7 = (input) => {
	let part1 = 0, part2 = 0;
	input.forEach((line) => {
		const outsideBrackets = [];
		const insideBrackets = [];
		let currentWord = [];
		for (let i = 0; i < line.length ; i++) {
			const character = line[i];
			if (utils.isLowerCaseLetter(character)) {
				currentWord.push(character);
			} else if (character === '[') {
				outsideBrackets.push(currentWord.join(''));
				currentWord = [];
			} else if (character === ']') {
				insideBrackets.push(currentWord.join(''));
				currentWord = [];
			}
		}
		outsideBrackets.push(currentWord.join(''));
		let stillValid = true;
		let foundOneValid = false;

		insideBrackets.forEach((word) => {
			if (utils.containsABBA(word))
				stillValid = false;
		});

		if (stillValid) {
			outsideBrackets.forEach((word) => {
				if (utils.containsABBA(word))
					foundOneValid = true;
			});
		}

		if (foundOneValid) {
			part1 += 1;
		}

		const allABA = [];
		outsideBrackets.forEach((word) => {
			const aba = utils.ABAMatches(word);
			if (aba) {
				allABA.push(aba);
			}
		});

		let foundABAAndBAB = false;
		const uniqueABA = uniq(flatten(allABA));
		insideBrackets.forEach((word) => {
			uniqueABA.forEach((aba) => {
				if (utils.BABMatches(word, aba)) {
					foundABAAndBAB = true;
				}
			})
		});

		if (foundABAAndBAB) {
			part2 += 1;
		}
	});

	return {
		part1,
		part2
	};
};

exports.day = day7;
