const { twoDigits } = require('../utils/string');

const NUMBER_OF_DAYS = { 2016: 25, 2018: 1 };

const solvers = {};

[2016, 2018].forEach((year) => {
	const array = new Array(NUMBER_OF_DAYS[year]);
	for (let i = 0 ; i < array.length ; i++)
		array[i] = i + 1;
	solvers[year] = array.map((v) => require(`./${year}/day${twoDigits(v)}`).day);
});

module.exports = {
	solvers2016: solvers[2016],
	solvers2018: solvers[2018]
};
