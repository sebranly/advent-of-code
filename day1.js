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
	Math.abs(coord.x) + Math.abs(coord.y)

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

const day1Input = 'R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3';

const data = [
	// Day 1
	{
		part1: [
			{ input: 'R2, L3', output: 5 },
			{ input: 'R2, R2, R2', output: 2 },
			{ input: 'R5, L5, R5, R3', output: 12 },
			{
				input: day1Input,
				output: 161
			}
		],
		part2: [
			{ input: 'R8, R4, R4, R8', output: 4 },
			{
				input: day1Input,
				output: 110
			}
		]
	}
];

const solvers = [
	day1
];

runTests(data);

const dayResult = day1(day1Input);
console.log(dayResult);