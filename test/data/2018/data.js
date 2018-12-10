const daysInput = require('../../../data').daysInput2018;

const exampleDay2 = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];
const exampleDay3 = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
const exampleDay4 = ['[1518-11-01 00:00] Guard #10 begins shift', '[1518-11-01 00:05] falls asleep', '[1518-11-01 00:25] wakes up', '[1518-11-01 00:30] falls asleep', '[1518-11-01 00:55] wakes up', '[1518-11-01 23:58] Guard #99 begins shift', '[1518-11-02 00:40] falls asleep', '[1518-11-02 00:50] wakes up', '[1518-11-03 00:05] Guard #10 begins shift', '[1518-11-03 00:24] falls asleep', '[1518-11-03 00:29] wakes up', '[1518-11-04 00:02] Guard #99 begins shift', '[1518-11-04 00:36] falls asleep', '[1518-11-04 00:46] wakes up', '[1518-11-05 00:03] Guard #99 begins shift', '[1518-11-05 00:45] falls asleep', '[1518-11-05 00:55] wakes up'];
const exampleDay5 = 'dabAcCaCBAcCcaDA';
const exampleDay6 = [[1, 1], [1, 6], [8, 3], [3, 4], [5, 5], [8, 9]];
const exampleDay7 = [
	'Step C must be finished before step A can begin.',
	'Step C must be finished before step F can begin.',
	'Step A must be finished before step B can begin.',
	'Step A must be finished before step D can begin.',
	'Step B must be finished before step E can begin.',
	'Step D must be finished before step E can begin.',
	'Step F must be finished before step E can begin.'
];
const exampleDay8 = [2, 3, 0, 3, 10, 11, 12, 1, 1, 0, 1, 99, 2, 1, 1, 2];

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
	},
	// Day 5
	{
		part1: [
			{ input: exampleDay5, output: 10 },
			{ input: daysInput[4], output: 9822 }
		],
		part2: [
			{ input: exampleDay5, output: 4 },
			{ input: daysInput[4], output: 5726 }
		]
	},
	// Day 6
	{
		part1: [
			{ input: { inputCoord: exampleDay6, maxiDistance: 32 }, output: 17 },
			{ input: { inputCoord: daysInput[5], maxiDistance: 10000 }, output: 4976 }
		],
		part2: [
			{ input: { inputCoord: exampleDay6, maxiDistance: 32 }, output: 16 },
			{ input: { inputCoord: daysInput[5], maxiDistance: 10000 }, output: 46462 }
		]
	},
	// Day 7
	{
		part1: [
			{ input: { steps: exampleDay7, workersCount: 1, delay: 1 }, output: 'CABDFE' },
			{ input: { steps: daysInput[6], workersCount: 1, delay: 1 }, output: 'HPDTNXYLOCGEQSIMABZKRUWVFJ' }
		],
		part2: [
			{ input: { steps: exampleDay7, workersCount: 2, delay: 1 }, output: 15 },
			{ input: { steps: daysInput[6], workersCount: 5, delay: 61 }, output: 908 }
		]
	},
	// Day 8
	{
		part1: [
			{ input: exampleDay8, output: 138 },
			{ input: daysInput[7], output: 35911 }
		],
		part2: [
			{ input: exampleDay8, output: 66 },
			{ input: daysInput[7], output: 17206 }
		]
	},
	// Day 9
	{
		part1: [
			{ input: '10 players; last marble is worth 1618 points', output: 8317 },
			{ input: '13 players; last marble is worth 7999 points', output: 146373 },
			{ input: '17 players; last marble is worth 1104 points', output: 2764 },
			{ input: '21 players; last marble is worth 6111 points', output: 54718 },
			{ input: '30 players; last marble is worth 5807 points', output: 37305 },
			{ input: daysInput[8], output: 371284 }
		],
		part2: [
			{ input: daysInput[8], output: 3038972494 }
		]
	}
];

module.exports = {
	testData2018
};
