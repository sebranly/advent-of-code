const md5 = require('js-md5');

const getCesarMapping = (checksum) => {
	const letters = [];
	for (let i = 0 ; i < 26 ; i++) {
		const asciiCode = i + 97;
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
	const max = 97 + 26 - 1;
	let safeCharCode = charCode;
	if (safeCharCode <= max)
		return safeCharCode;
	while (safeCharCode > max)
		safeCharCode -= 26;
	return safeCharCode;
};

const translateWithMapping = (mapping, letter) =>
	mapping[letter.charCodeAt(0) - 97].destination;

module.exports = {
	getCesarMapping,
	md5Recursive,
	protectCesar,
	translateWithMapping
};
