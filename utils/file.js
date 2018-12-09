const fs = require('fs');
const { twoDigits } = require('./string');

const buildFullPath = (year, dayNumber) => `./data/${year}/days/day${twoDigits(dayNumber)}.txt`;

const readFile = (year, dayNumber, options = {}, format = 'utf8') => {
	const {
		convertToArraysOfInts,
		convertToInt,
		convertToUniqueArrayOfInts,
		delimiter,
		innerDelimiter,
		uniqueInt,
		uniqueString
	} = options;

	const filepath = buildFullPath(year, dayNumber);
	const file = fs.readFileSync(filepath, format);
	const correctDelimiter = delimiter || /\r?\n/;
	const correctInnerDelimiter = innerDelimiter || ' ';

	const lines = file.split(correctDelimiter).map((line) => line.trim().replace(/  +/g, ' '));
	if (uniqueString) return lines[0];
	if (uniqueInt) return parseInt(lines[0], 10);
	if (convertToUniqueArrayOfInts) return lines[0].split(correctInnerDelimiter).map((line) => parseInt(line, 10));

	const rightFormatLines = convertToInt
		? lines.map((line) => parseInt(line, 10))
		: lines;
	if (convertToArraysOfInts) {
		return rightFormatLines.map((line) => line.split(correctInnerDelimiter).map((e) => parseInt(e, 10)))
	}
	return rightFormatLines;
};

module.exports = {
	readFile
};