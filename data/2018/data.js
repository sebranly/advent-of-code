const utils = require('../../utils');

const YEAR = 2018;

const daysInput2018 = [
	utils.readFile(YEAR, 1, { convertToInt: true }),
	utils.readFile(YEAR, 2),
	utils.readFile(YEAR, 3)
];

module.exports = {
	daysInput2018
};
