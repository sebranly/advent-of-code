const md5 = require('js-md5');
const CONSTANTS = require('./constants');

const getCesarMapping = (checksum) => {
	const letters = [];
	for (let i = 0 ; i < CONSTANTS.NUMBER_OF_LETTERS ; i++) {
		const asciiCode = i + CONSTANTS.LOWERCASE_A_VALUE;
		const letter = String.fromCharCode(asciiCode);
		const destination = String.fromCharCode(protectCesar(asciiCode + checksum));

		letters.push({
			source: letter,
			destination
		});
	}
	return letters;
};

const md5Recursive = (originalHash, level = 0) => {
	if (level === 2016)
		return originalHash;
	return md5Recursive(md5(originalHash), level + 1);
};

const protectCesar = (charCode) => {
	const max = CONSTANTS.LOWERCASE_A_VALUE + CONSTANTS.NUMBER_OF_LETTERS - 1;
	let safeCharCode = charCode;
	if (safeCharCode <= max)
		return safeCharCode;
	while (safeCharCode > max)
		safeCharCode -= CONSTANTS.NUMBER_OF_LETTERS;
	return safeCharCode;
};

const translateWithMapping = (mapping, letter) =>
	mapping[letter.charCodeAt(0) - CONSTANTS.LOWERCASE_A_VALUE].destination;

module.exports = {
	getCesarMapping,
	md5Recursive,
	protectCesar,
	translateWithMapping
};
