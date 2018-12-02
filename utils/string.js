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

// With `size = 2` it would return all pairs for instance
const allGroups = (arrayStrings) => {
	const groups = [];
	arrayStrings.forEach((string1, index1) => {
		arrayStrings.forEach((string2, index2) => {
			if (index2 > index1) groups.push([string1, string2]);
		});
	});
	return groups;
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

const stringOccurrences = (string) => {
	const occ = {};
	for (let i = 0 ; i < string.length ; i++) {
		const character = string[i];
		if (occ[character]) occ[character]++;
		else occ[character] = 1;
	}
	return occ;
};

const stringsDifferences = (string1, string2) => {
	let count = 0;
	const indexes = [];

	const endIndex = Math.min(string1.length, string2.length);
	for (let i = 0 ; i < endIndex ; i++) {
		if (string1[i] !== string2[i]) {
			indexes.push(i);
			count++;
		}
	}
	const lengthDiff = Math.abs(string1.length - string2.length);
	if (lengthDiff) {
		count += lengthDiff;
		for (let j = 0 ; j < lengthDiff ; j++) {
			indexes.push(endIndex + j);
		}
	}
	
	return {
		indexes,
		count
	};
};

const twoDigits = (number) =>
	('0' + number).slice(-2);

module.exports = {
	ABAMatches,
	allGroups,
	BABMatches,
	containsABBA,
	countOccurrenceOfCharInString,
	getAllPermutations,
	isLetter,
	isLowerCaseLetter,
	isUpperCaseLetter,
	replaceAt,
	stringOccurrences,
	stringsDifferences,
	twoDigits
};
