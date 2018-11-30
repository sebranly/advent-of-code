const day12 = require('./day12').day;

const day25 = (input, partNumber) => {
	return day12(input, partNumber, false, true);
};

exports.day = day25;
