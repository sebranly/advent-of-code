const md5 = require('js-md5');
const utils = require('../utils');

const day14 = (input, partNumber) => {
	const correctKeyIndexes = [];
	const CORRECT_KEY_INDEXES_LIMIT = 64;

	const LIMIT = 25000;
	const md5Hashes = [];
	for (let i = 0 ; i < LIMIT ; i++) {
		let newHash;
		if (partNumber === 2) {
			const originalHash = md5(`${input}${i}`);
			newHash = utils.md5Recursive(originalHash);
		} else {
			newHash = md5(`${input}${i}`);
		}
		md5Hashes.push(newHash);
		// if (i % 1000 === 0) {
		//  console.log(i);
		// }
	}

	let indexCounter = 0;
	while (correctKeyIndexes.length < CORRECT_KEY_INDEXES_LIMIT) {
		const md5Hash = md5Hashes[indexCounter];
		const threeCharsInARow = md5Hash.match(/(\d|[a-f])\1{2,}/);
		if (threeCharsInARow) {
			const character = threeCharsInARow[1];
			const regex = new RegExp(`${character}{5,}`)
			let offsetIndexCounter = 1;
			let foundFiveInARow = false;
			while (!foundFiveInARow && offsetIndexCounter <= 1000) {
				const otherMd5Hash = md5Hashes[indexCounter + offsetIndexCounter];
				foundFiveInARow = regex.test(otherMd5Hash);
				offsetIndexCounter++;
			}
			if (foundFiveInARow) {
				correctKeyIndexes.push(indexCounter);
			}
		}

		indexCounter++;
	}

	const lastIndex = correctKeyIndexes[CORRECT_KEY_INDEXES_LIMIT - 1];

	return {
		part1: lastIndex,
		part2: lastIndex
	}
};

exports.day = day14;
