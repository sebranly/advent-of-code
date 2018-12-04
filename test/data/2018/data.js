const daysInput = require('../../../data').daysInput2018;

const exampleDay2 = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];
const exampleDay3 = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
const exampleDay4 = ['[1518-11-01 00:00] Guard #10 begins shift', '[1518-11-01 00:05] falls asleep', '[1518-11-01 00:25] wakes up', '[1518-11-01 00:30] falls asleep', '[1518-11-01 00:55] wakes up', '[1518-11-01 23:58] Guard #99 begins shift', '[1518-11-02 00:40] falls asleep', '[1518-11-02 00:50] wakes up', '[1518-11-03 00:05] Guard #10 begins shift', '[1518-11-03 00:24] falls asleep', '[1518-11-03 00:29] wakes up', '[1518-11-04 00:02] Guard #99 begins shift', '[1518-11-04 00:36] falls asleep', '[1518-11-04 00:46] wakes up', '[1518-11-05 00:03] Guard #99 begins shift', '[1518-11-05 00:45] falls asleep', '[1518-11-05 00:55] wakes up'];

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
			{ input: exampleDay3, output: 4 },
			{ input: daysInput[2], output: 104126 }
		],
		part2: [
			{ input: exampleDay3, output: 3 },
			{ input: daysInput[2], output: 695 }
		]
	},
	// Day 4
	{
		part1: [
			{ input: exampleDay4, output: 240 },
			{ input: daysInput[3], output: 36898 }
		],
		part2: [
			{ input: exampleDay4, output: 4455 },
			{ input: daysInput[3], output: 80711 }
		]
	}
];

module.exports = {
	testData2018
};
