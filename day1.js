const runTests = (data) => {
	data.map((dataDay, dayIndex) => {
		console.log(`DAY ${dayIndex + 1}:`);
		console.log('');
		['1', '2'].map((partNumber) => {
			console.log(`Part ${partNumber}`);
			let errorCount = 0;
			const partKey = `part${partNumber}`;
			dataDay[partKey].map((dataLine, lineIndex) => {
				const result = solvers[dayIndex](dataLine.input)[partKey];
				if (result !== dataLine.output) {
					console.log(`Expected ${dataLine.output} but got ${result}`);
					errorCount++;
				}
			});
			if (errorCount !== 0) {
				console.log(`Failure: ${errorCount} error(s)`);
			}
			else {
				console.log(`Success! (${dataDay[partKey].length} test(s))`);
			}
			console.log('');
		});
	});
};

// Clockwise
const directions = ['N', 'E', 'S', 'W'];

const distanceFromOrigin = (coord) =>
	Math.abs(coord.x) + Math.abs(coord.y);

const valueBetween = (value, min, max) =>
	value >= min && value <= max;

const coordBetween = (coord, xMin, xMax, yMin, yMax) =>
	valueBetween(coord.x, xMin, xMax) && valueBetween(coord.y, yMin, yMax);

const coordMove = (coord, change) => {
	switch (change) {
		case 'U':
			coord.y--;
			break;
		case 'R':
			coord.x++;
			break;
		case 'D':
			coord.y++;
			break;
		case 'L':
		default:
			coord.x--;
			break;
	}
};

const makeValueCorrect = (value, min, max) => {
	if (value < min)
		value = min;
	else if (value > max)
		value = max;
	return value;
};

const day1 = (input) => {
	let coord = { x: 0, y: 0 };
	let currentDirectionIndex = 0;
	let vect;

	let firstLocationVisitedTwice = null;
	const history = [{ x: 0, y: 0 }];

	const steps = input.split(',').map((step) => step.trim());
	steps.map((step) => {
		const letter = step[0];
		const number = parseInt(step.substring(1), 10);
		const directionChange = letter === 'L' ? -1 : 1;
		currentDirectionIndex += directionChange;
		currentDirectionIndex = (currentDirectionIndex + directions.length) % directions.length;

		switch (directions[currentDirectionIndex]) {
			case 'N':
				vect = { x: 0, y: -1 };
				break;
			case 'E':
				vect = { x: 1, y: 0 };
				break;
			case 'S':
				vect = { x: 0, y: 1 };
				break;
			case 'W':
			default:
				vect = { x: -1, y: 0 };
				break;
		}

		for (i = 0 ; i < number ; i++) {
			coord.x += vect.x;
			coord.y += vect.y;

			if (!firstLocationVisitedTwice) {
				history.map((historyLine) => {
					if (historyLine.x === coord.x && historyLine.y === coord.y) {
						firstLocationVisitedTwice = { ...coord };
					}
				});
			}

			history.push({ ...coord });
		}
	});

	const part2 = firstLocationVisitedTwice
		? distanceFromOrigin(firstLocationVisitedTwice)
		: 0;

	return {
		part1: distanceFromOrigin(coord),
		part2
	};
};

const day2 = (input) => {
	const pads = [
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		],
		[
			[null, null, 1, null, null],
			[null, 2, 3, 4, null],
			[5, 6, 7, 8, 9],
			[null, 'A', 'B', 'C', null],
			[null, null, 'D', null, null]
		]
	];
	const codes = [[], []];
	let coords = [
		{ x: 1, y: 1 },
		{ x: 0, y: 2 }
	];
	const steps = input.split(',');
	steps.forEach((step) => {
		for (let i = 0; i < step.length; i++) {
			const letter = step.charAt(i);
			copyCoord = { ...coords[1] };

			[0, 1].forEach((index) =>
				coordMove(coords[index], letter)
			);

			['x', 'y'].forEach((axis) =>
				coords[0][axis] = makeValueCorrect(coords[0][axis], 0, 2)
			);

			if (!coordBetween(coords[1], 0, 4, 0, 4) || !pads[1][coords[1].y][coords[1].x]) {
				coords[1] = { ...copyCoord };
			}
		}
		[0, 1].forEach((index) => {
			codes[index].push(pads[index][coords[index].y][coords[index].x]);
		});
	});

	return {
		part1: parseInt(codes[0].join(''), 10),
		part2: codes[1].join('')
	};
};

const daysInput = [
	'R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3',
	'UULLULLUULLLURDLDUURRDRRLDURDULLRURDUDULLLUULURURLRDRRRRULDRUULLLLUUDURDULDRRDRUDLRRLDLUDLDDRURURUURRRDDDLLRUDURDULUULLRRULLRULDUDRDRLDLURURUDDUDLURUDUDURLURURRURLUDDRURRDLUURLLRURRDUDLULULUDULDLLRRRDLRDLDUDRDDDRRUURRRRRUURRDRRDLURDRRURDLLUULULLRURDLDDDRRLLRRUURULURUUDDLRRUDDRURUUDLRLRDLRURRRDULLDLRUDDUULRDULURUURDULUDLLRRLDDLRDLRUDRLDDRLRRRDURDULLRRRDRRLUURURDRRDRRLDLUDURURLDUURDRUDRDDRLDRRLDLURURULLUURUDUUDLRLL,LLLULLULDDULRLLURLLLRUUDDLRUULRLULLDLLRRDRLRLRLLDRUUURULDRDDLUDLLDUDULLLRLULLLRULDRDRUDLLRLRLLUDULRRRLDRUULDDULLDULULLUDUDLDRDURDLDLLDUDRRRDLUURRUURULLURLDURLRRLLDDUUULDRLUUDUDLURLULUDURRDRLLDDDDDRRULLRLDULULDDRUURRDLUDDDUDURDDRDRULULLLLUURDURUUUULUDLRURRULRDDRURURLLRLUUDUUURDLLDDLUDRLLLUDLLLLULRLURDRRRDUUDLLDLDDDURRDDRURUURDDRURRLDDDURDLLUURUUULRLUURRUDRLLDLURDUDRLULDLRLULULUDDLRDUDRUDLUULUULDURDRRRRLRULLUDRDDRDLDUDRDRRLDLLLLUDDLRULDLLDDUULDDRRULRRUURUDRDURLLLDDUUDRUUDLULLDR,UDUUULLDDDDLUDLDULRLRDLULLDDRULDURRLURRUDLRRUDURRDUDRRRUULRLLRLUDLDRRDUURDDRDRDUUUDUDLDLLRRLUURLUUUDDDUURLULURRLURRRDRDURURUDRLRUURUDRUDDDRDRDLDRDURDLDRRDUUDLLURLDDURRRLULDRDRLLRLLLRURLDURDRLDRUURRLDLDRLDDDRLDLRLDURURLLLLDDRDUDLRULULLRDDLLUDRDRRLUUULDRLDURURDUDURLLDRRDUULDUUDLLDDRUUULRRULDDUDRDRLRULUUDUURULLDLLURLRRLDDDLLDRRDDRLDDLURRUDURULUDLLLDUDDLDLDLRUDUDRDUDDLDDLDULURDDUDRRUUURLDUURULLRLULUURLLLLDUUDURUUDUULULDRULRLRDULDLLURDLRUUUDDURLLLLDUDRLUUDUDRRURURRDRDDRULDLRLURDLLRRDRUUUURLDRURDUUDLDURUDDLRDDDDURRLRLUDRRDDURDDRLDDLLRR,ULDRUDURUDULLUDUDURLDLLRRULRRULRUDLULLLDRULLDURUULDDURDUUDLRDRUDUDDLDRDLUULRRDLRUULULUUUDUUDDRDRLLULLRRDLRRLUDRLULLUUUUURRDURLLRURRULLLRLURRULRDUURRLDDRRDRLULDDRRDRLULLRDLRRURUDURULRLUDRUDLUDDDUDUDDUDLLRDLLDRURULUDRLRRULRDDDDDRLDLRRLUUDLUURRDURRDLDLDUDRLULLULRLDRDUDLRULLULLRLDDRURLLLRLDDDLLLRURDDDLLUDLDLRLUULLLRULDRRDUDLRRDDULRLLDUURLLLLLDRULDRLLLUURDURRULURLDDLRRUDULUURRLULRDRDDLULULRRURLDLRRRUDURURDURDULURULLRLDD,DURLRRRDRULDLULUDULUURURRLULUDLURURDDURULLRRUUDLRURLDLRUDULDLLRRULLLLRRLRUULDLDLLRDUDLLRLULRLLUUULULRDLDLRRURLUDDRRLUUDDRRUDDRRURLRRULLDDULLLURRULUDLRRRURRULRLLLRULLRRURDRLURULLDULRLLLULLRLRLLLDRRRRDDDDDDULUUDUDULRURDRUDRLUULURDURLURRDRRRRDRRLLLLUDLRRDURURLLULUDDLRLRLRRUURLLURLDUULLRRDURRULRULURLLLRLUURRULLLURDDDRURDUDDULLRULUUUDDRURUUDUURURRDRURDUDRLLRRULURUDLDURLDLRRRRLLUURRLULDDDUUUURUULDLDRLDUDULDRRULDRDULURRUURDU'
];

const exampleDay2 = 'ULL,RRDDD,LURDL,UUUUD';
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
];

const solvers = [
	day1,
	day2
];

runTests(data);

const dayResult = day2(daysInput[1]);
console.log(dayResult);