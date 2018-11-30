const day12 = require('./day12').day;

const day23 = (input, partNumber) => {
	return day12(input, partNumber, true); 
};

exports.day = day23;
