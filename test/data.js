const daysInputData = require('../data');
const daysInput = daysInputData.daysInput;

const exampleDay2 = 'ULL,RRDDD,LURDL,UUUUD';
const exampleDay6 = ['eedadn', 'drvtee', 'eandsr', 'raavrd', 'atevrs', 'tsrnev', 'sdttsa', 'rasrtv', 'nssdts', 'ntnada', 'svetve', 'tesnvt', 'vntsnd', 'vrdear', 'dvrsen', 'enarar'];

const data = [
	// Day 1
	{
		part1: [
			{ input: 'R2, L3', output: 5 },
			{ input: 'R2, R2, R2', output: 2 },
			{ input: 'R5, L5, R5, R3', output: 12 },
			{ input: daysInput[0], output: 161 }
		],
		part2: [
			{ input: 'R8, R4, R4, R8', output: 4 },
			{ input: daysInput[0], output: 110 }
		]
	},
	// Day 2
	{
		part1: [
			{ input: exampleDay2, output: 1985 },
			{ input: daysInput[1], output: 45973 }
		],
		part2: [
			{ input: exampleDay2, output: '5DB3' },
			{ input: daysInput[1], output: '27CA4' }
		]
	},
	// Day 3
	{
		part1: [
			{ input: '5 10 25,11 12 13,6 57 28', output: 1 },
			{ input: daysInput[2], output: 1050 }
		],
		part2: [
			{ input: '5 10 25,11 12 13,6 57 28,8 10 25,11 12 13,6 20 28', output: 4 },
			{ input: daysInput[2], output: 1921 }
		]
	},
	// Day 4
	{
		part1: [
			{
				input: [
					'aaaaa-bbb-z-y-x-123[abxyz]',
					'a-b-c-d-e-f-g-h-987[abcde]',
					'not-a-real-room-404[oarel]',
					'totally-real-room-200[decoy]'
				],
				output: 1514
			},
			{ input: daysInput[3], output: 245102 }
		],
		part2: [
			{ input: ['qzmt-zixmtkozy-ivhz-343'], output: 'very encrypted name' },
			{ input: daysInput[3], output: 324 }
		]
	},
	// Day 5
	{
		part1: [
			{ input: 'abc', output: '18f47a30' },
			{ input: daysInput[4], output: '801b56a7' }
		],
		part2: [
			{ input: 'abc', output: '05ace8e3' },
			{ input: daysInput[4], output: '424a0197' }
		]
	},
	// Day 6
	{
		part1: [
			{ input: exampleDay6, output: 'easter' },
			{ input: daysInput[5], output: 'qzedlxso' }
		],
		part2: [
			{ input: exampleDay6, output: 'advent' },
			{ input: daysInput[5], output: 'ucmifjae' }
		]
	},
	// Day 7
	{
		part1: [
			{ input: ['abba[mnop]qrst'], output: 1 },
			{ input: ['abcd[bddb]xyyx'], output: 0 },
			{ input: ['aaaa[qwer]tyui'], output: 0 },
			{ input: ['ioxxoj[asdfgh]zxcvbn'], output: 1 },
			{ input: ['abba[mnop]qrstioxxoj[asdfgh]zxcvbn'], output: 1 },
			{ input: daysInput[6], output: 118 }
		],
		part2: [
			{ input: ['aba[bab]xyz'], output: 1 },
			{ input: ['xyx[xyx]xyx'], output: 0 },
			{ input: ['aaa[kek]eke'], output: 1 },
			{ input: ['zazbz[bzb]cdb'], output: 1 },
			{ input: daysInput[6], output: 260 }
		]
	},
	// Day 8
	{
		part1: [
			{ input: { width: 7, height: 3, instructions: ['rect 3x2', 'rotate column x=1 by 1', 'rotate row y=0 by 4', 'rotate column x=1 by 1'] }, output: 6 }
		],
		part2: [
			// TODO: find a way to have it. Solution is 'ZJHRKCPLYJ'
		]
	},
	// Day 9
	{
		part1: [
			// TODO: find a way to check on the string itself because stricter
			{ input: 'ADVENT', output: 'ADVENT'.length },
			{ input: 'A(1x5)BC', output: 'ABBBBBC'.length },
			{ input: '(3x3)XYZ', output: 'XYZXYZXYZ'.length },
			{ input: 'A(2x2)BCD(2x2)EFG', output: 'ABCBCDEFEFG'.length },
			{ input: '(6x1)(1x3)A', output: '(1x3)A'.length },
			{ input: 'X(8x2)(3x3)ABCY', output: 'X(3x3)ABC(3x3)ABCY'.length },
			{ input: daysInput[8], output: 112830 }
		],
		part2: [
			{ input: '(3x3)XYZ', output: 'XYZXYZXYZ'.length },
			{ input: 'X(8x2)(3x3)ABCY', output: 'XABCABCABCABCABCABCY'.length },
			{ input: '(27x12)(20x12)(13x14)(7x10)(1x12)A', output: 241920 },
			{ input: '(25x3)(3x3)ABC(2x3)XY(5x2)PQRSTX(18x9)(3x2)TWO(5x7)SEVEN', output: 445 },
			{ input: daysInput[8], output: 10931789799 }
		]
	},
	// Day 10
	{
		part1: [
			{ input: { microchip1: 2, microchip2: 5, instructions: ['value 5 goes to bot 2', 'bot 2 gives low to bot 1 and high to bot 0', 'value 3 goes to bot 1', 'bot 1 gives low to output 1 and high to bot 0', 'bot 0 gives low to output 2 and high to output 0', 'value 2 goes to bot 2'] }, output: 2 },
			{ input: daysInput[9], output: 147 }
		],
		part2: [
			{ input: daysInput[9], output: 55637 }
		]
	},
	// Day 11
	{ part1: [], part2: [] },
	// Day 12
	{
		part1: [
			{ input: { processor: 'a', instructions: ['cpy 41 a', 'inc a', 'inc a', 'dec a', 'jnz a 2', 'dec a'] }, output: 42 },
			{ input: daysInput[11], output: 318003 }
		],
		part2: [
			{ input: daysInput[11], output: 9227657 }
		]
	},
	// Day 13
	{
		part1: [
			{ input: { favoriteNumber: 10, goalX: 7, goalY: 4, startPointX: 1, startPointY: 1 }, output: 11 },
			{ input: daysInput[12], output: 86 }
		],
		part2: [
			{ input: daysInput[12], output: 127 }
		]
	},
	// Day 14
	{
		part1: [
			{ input: 'abc', output: 22728 },
			{ input: daysInput[13], output: 23890 }
		],
		part2: [
			{ input: 'abc', output: 22551 },
			{ input: daysInput[13], output: 22696 }
		]
	},
	// Day 15
	{
		part1: [
			{ input: ['Disc #1 has 5 positions; at time=0, it is at position 4.', 'Disc #2 has 2 positions; at time=0, it is at position 1.'], output: 5 },
			{ input: daysInput[14], output: 203660 }
		],
		part2: [
			{ input: daysInput[14], output: 2408135 }
		]
	},
	// Day 16
	{
		part1: [
			{ input: { length1: 20, state: '10000' }, output: '01100' },
			{ input: daysInput[15], output: '00100111000101111' }
		],
		part2: [
			{ input: daysInput[15], output: '11101110011100110' }
		]
	},
	// Day 17
	{
		part1: [
			{ input: 'ihgpwlah', output: 'DDRRRD' },
			{ input: 'kglvqrro', output: 'DDUDRLRRUDRD' },
			{ input: 'ulqzkmiv', output: 'DRURDRUDDLLDLUURRDULRLDUUDDDRR' },
			{ input: daysInput[16], output: 'DDRUDLRRRD' }
		],
		part2: [
			{ input: 'ihgpwlah', output: 370 },
			{ input: 'kglvqrro', output: 492 },
			{ input: 'ulqzkmiv', output: 830 },
			{ input: daysInput[16], output: 398 }
		]
	},
	// Day 18
	{
		part1: [
			{ input: { rows1: 10, rows2: 10, state: '.^^.^.^^^^' }, output: 38 },
			{ input: daysInput[17], output: 2016 }
		],
		part2: [
			{ input: daysInput[17], output: 19998750 }
		]
	},
	// Day 19
	{
		part1: [
			{ input: 4, output: 1 },
			{ input: 5, output: 3 },
			{ input: daysInput[18], output: 1816277 }
		],
		part2: [
			{ input: 1, output: 1 },
			{ input: 2, output: 1 },
			{ input: 3, output: 3 },
			{ input: 4, output: 1 },
			{ input: 5, output: 2 },
			{ input: 6, output: 3 },
			{ input: 7, output: 5 },
			{ input: 8, output: 7 },
			{ input: 9, output: 9 },
			{ input: 12, output: 3 },
			{ input: 27, output: 27 },
			{ input: 500, output: 271 },
			{ input: 1000, output: 271 },
			{ input: 10000, output: 3439 },
			{ input: daysInput[18], output: 1410967 }
		]
	},
	// Day 20
	{
		part1: [
			{ input: { bannedIPs: ['5-8', '0-2', '4-7'], max: 9 }, output: 3 },
			{ input: daysInput[19], output: 23923783 }
		],
		part2: [
			{ input: { bannedIPs: ['5-8', '0-2', '4-7'], max: 9 }, output: 2 },
			{ input: daysInput[19], output: 125 }
		]
	},
	// Day 21
	{
		part1: [
			{ input: { state: 'abcde', steps: ['swap position 4 with position 0', 'swap letter d with letter b', 'reverse positions 0 through 4', 'rotate left 1 step', 'move position 1 to position 4', 'move position 3 to position 0', 'rotate based on position of letter b', 'rotate based on position of letter d'] }, output: 'decab' },
			{ input: daysInput[20], output: 'cbeghdaf' }
		],
		part2: [
			{ input: { finalState: 'decab', steps: ['swap position 4 with position 0', 'swap letter d with letter b', 'reverse positions 0 through 4', 'rotate left 1 step', 'move position 1 to position 4', 'move position 3 to position 0', 'rotate based on position of letter b', 'rotate based on position of letter d'] }, output: 'abcde' },
			{ input: daysInput[20], output: 'bacdefgh' }
		]
	},
	// Day 22
	{
		part1: [
			{ input: daysInput[21], output: 950 }
		],
		part2: [
			// { input: ['stuff', 'Filesystem            Size  Used  Avail  Use%', '/dev/grid/node-x0-y0   10T    8T     2T   80%', '/dev/grid/node-x0-y1   11T    6T     5T   54%', '/dev/grid/node-x0-y2   32T   28T     4T   87%', '/dev/grid/node-x1-y0    9T    7T     2T   77%', '/dev/grid/node-x1-y1    8T    0T     8T    0%', '/dev/grid/node-x1-y2   11T    7T     4T   63%', '/dev/grid/node-x2-y0   10T    6T     4T   60%', '/dev/grid/node-x2-y1    9T    8T     1T   88%', '/dev/grid/node-x2-y2    9T    6T     3T   66%'], output: 7 }
		]
	},
	// Day 23
	{
		part1: [
			{ input: { processor: 'a', instructions: ['cpy 2 a', 'tgl a', 'tgl a', 'tgl a', 'cpy 1 a', 'dec a', 'dec a'], eggs: 0 }, output: 3 },
			{ input: daysInput[22], output: 11514 }
		],
		part2: [
			{ input: daysInput[22], output: 479008074 }
		]
	},
	// Day 24
	{
		part1: [
			{ input: ['###########', '#0.1.....2#', '#.#######.#', '#4.......3#', '###########'], output: 14 },
			{ input: daysInput[23], output: 430 }
		],
		part2: [
			{ input: daysInput[23], output: 700 }
		]
	},
	// Day 25
	{
		part1: [
			{ input: daysInput[24], output: 198 }
		],
		part2: []
	}
];

exports.testData = data;
