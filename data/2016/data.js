const utils = require('../../utils');

const YEAR = 2016;

const daysInput2016 = [
	utils.readFile(YEAR, 1, { delimiter: ',' }),
	utils.readFile(YEAR, 2),
	utils.readFile(YEAR, 3, { convertToArraysOfInts: true }),
	utils.readFile(YEAR, 4),
	utils.readFile(YEAR, 5, { uniqueString: true }),
	utils.readFile(YEAR, 6),
	utils.readFile(YEAR, 7),
	{ width: 50, height: 6, instructions: utils.readFile(YEAR, 8) },
	utils.readFile(YEAR, 9, { uniqueString: true }),
	{ microchip1: 17, microchip2: 61, instructions: utils.readFile(YEAR, 10) },
	'',
	{ processor: 'a', instructions: utils.readFile(YEAR, 12) },
	{ favoriteNumber: utils.readFile(YEAR, 13, { uniqueInt: true }), goalX: 31, goalY: 39, startPointX: 1, startPointY: 1 },
	utils.readFile(YEAR, 14, { uniqueString: true }),
	utils.readFile(YEAR, 15),
	{ length1: 272, length2: 35651584, state: utils.readFile(YEAR, 16, { uniqueString: true }) },
	utils.readFile(YEAR, 17, { uniqueString: true }),
	{ rows1: 40, rows2: 400000, state: utils.readFile(YEAR, 18, { uniqueString: true }) },
	utils.readFile(YEAR, 19, { uniqueInt: true }),
	{ bannedIPs: utils.readFile(YEAR, 20, { convertToArraysOfInts: true, innerDelimiter: '-' }), max: 4294967295 },
	{ finalState: 'fbgdceah', state: 'abcdefgh', steps: utils.readFile(YEAR, 21) },
	utils.readFile(YEAR, 22),
	{ processor: 'a', instructions: utils.readFile(YEAR, 23), eggs1: 7, eggs2: 12 },
	utils.readFile(YEAR, 24),
	{ processor: 'a', instructions: utils.readFile(YEAR, 25) }
];

module.exports = {
	daysInput2016
};
