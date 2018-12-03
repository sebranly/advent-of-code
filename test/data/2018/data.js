const daysInput = require('../../../data').daysInput2018;

const exampleDay2 = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

const testData2018 = [
	// Day 1
	{
		part1: [
			{ input: [+1, +1, +1], output: 3 },
			{ input: [+1, +1, -2], output: 0 },
			{ input: [-1, -2, -3], output: -6 },
			{ input: daysInput[0], output: 569 }
		],
		part2: [
			{ input: [+1, -1], output: 0 },
			{ input: [+3, +3, +4, -2, -4], output: 10 },
			{ input: [-6, +3, +8, +5, -6], output: 5 },
			{ input: [+7, +7, -2, -7, -4], output: 14 },
			{ input: daysInput[0], output: 77666 }
		]
	},
	// Day 2
	{
		part1: [
			{ input: exampleDay2, output: 12 },
			{ input: daysInput[1], output: 4940 }
		],
		part2: [
			{ input: exampleDay2, output: 'abcde' },
			{ input: ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'], output: 'fgij' },
			{ input: daysInput[1], output: 'wrziyfdmlumeqvaatbiosngkc' }
		]
	},
	// Day 3
	{
		part1: [
			{ input: daysInput[2], output: 'abcdef' }
		],
		part2: [
			{ input: daysInput[2], output: 'defabc' }
		]
	}
];

module.exports = {
	testData2018
};
