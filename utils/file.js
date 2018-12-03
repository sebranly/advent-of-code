const fs = require('fs');
const { twoDigits } = require('./string');

const buildFullPath = (year, dayNumber) => `./data/${year}/days/day${twoDigits(dayNumber)}.txt`;

const readFile = (year, dayNumber, convertToInt = false, format = 'utf8') => {
	const filepath = buildFullPath(year, dayNumber);
	const file = fs.readFileSync(filepath, format);
	const lines = file.split(/\r?\n/);
	return convertToInt
		? lines.map((line) => parseInt(line, 10))
		: lines;
};

module.exports = {
	readFile
};