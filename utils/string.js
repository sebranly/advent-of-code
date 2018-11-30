const { valueBetween } = require('./math');

const ABAMatches = (string) => {
	const matches = [];
	for (let i = 0 ; i < string.length - 2 ; i++) {
		if (string[i] !== string[i + 1] && string[i] === string[i + 2]) {
			matches.push(string.substring(i, i + 3));
		}
	}
	return matches.length
		? matches
		: null;
};

const BABMatches = (string, aba) => {
	for (let i = 0 ; i < string.length - 2 ; i++) {
		if (string[i] !== string[i + 1] && string[i] === string[i + 2] && string[i] === aba[1] && string[i + 1] === aba[0]) {
			return true;
		}
	}
	return false;
};

const containsABBA = (string) => {
	for (let i = 0 ; i < string.length - 3 ; i++) {
		if (string[i] !== string[i + 1] && string[i] === string[i + 3] && string[i + 1] === string[i + 2]) {
			return true;
		}
	}
	return false;
};

const countOccurrenceOfCharInString = (character, string) => {
	let counter = 0;
	for (let i = 0 ; i < string.length ; i++) {
		if (string[i] === character)
			counter++;
	}
	return counter;
};

const getAllPermutations = (string) => {
	const results = [];

	if (string.length === 1) {
			results.push(string);
			return results;
	}

	for (let i = 0; i < string.length; i++) {
			const firstChar = string[i];
			const charsLeft = string.substring(0, i) + string.substring(i + 1);
			const innerPermutations = getAllPermutations(charsLeft);
			for (let j = 0; j < innerPermutations.length; j++) {
					results.push(firstChar + innerPermutations[j]);
			}
	}
	return results;
};

const isLetter = (character) =>
	isLowerCaseLetter(character) || isUpperCaseLetter(character);

const isLowerCaseLetter = (character) =>
	valueBetween(character, 'a', 'z');

const isUpperCaseLetter = (character) =>
	valueBetween(character, 'A', 'Z');

const replaceAt = (string, index, character) =>
	`${string.substring(0, index)}${character}${string.substring(index + 1)}`;

module.exports = {
	ABAMatches,
	BABMatches,
	containsABBA,
	countOccurrenceOfCharInString,
	getAllPermutations,
	isLetter,
	isLowerCaseLetter,
	isUpperCaseLetter,
	replaceAt
};
