const { clone, sortBy } = require('lodash');
const { DIFFERENCE_LOWERCASE_UPPERCASE, NUMBER_OF_LETTERS, UPPERCASE_A_VALUE } = require('../../utils/constants');

const day5 = (input, partNumber) => {
	let index = 0;
	let shouldContinue = true;

	const polymeres = {};
	const array = input.split('');

	let firstRound;
	for (let upperCaseCode = UPPERCASE_A_VALUE ; upperCaseCode < UPPERCASE_A_VALUE + NUMBER_OF_LETTERS ; upperCaseCode++) {
		firstRound = partNumber === 2 ? true : false;
		const arrayClone = clone(array);
		const lowerCaseCode = upperCaseCode + DIFFERENCE_LOWERCASE_UPPERCASE;
		shouldContinue = true;

		while (shouldContinue) {
			index = 0;
			shouldContinue = false;

			while ((firstRound && index <= arrayClone.length - 1) || (!firstRound && index < arrayClone.length - 1)) {
				const isExpectedLetter = [lowerCaseCode, upperCaseCode].includes(arrayClone[index].charCodeAt(0));
				if (firstRound) {
					if (isExpectedLetter) {
						arrayClone.splice(index, 1);
					} else { 
						index++;
					}
					shouldContinue = true;
				} else {
					const additionalCondition = partNumber === 2
						? !(isExpectedLetter)
						: true
					if (additionalCondition && Math.abs(arrayClone[index].charCodeAt(0) - arrayClone[index + 1].charCodeAt(0)) === DIFFERENCE_LOWERCASE_UPPERCASE) {
						arrayClone.splice(index, 2);
						shouldContinue = true;
					} else {
						index++;
					}
				}
			}
			firstRound = false;
		}

		if (partNumber !== 2) return { part1: arrayClone.length };
		polymeres[upperCaseCode] = arrayClone.length;
	}
	return { part2: sortBy(Object.values(polymeres))[0] };
};

exports.day = day5;