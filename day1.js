const runTests = (data) => {
	data.map((dataDay, dayIndex) => {
		console.log(`DAY ${dayIndex + 1}:`);
		console.log('');
		['1', '2'].map((partNumber) => {
			console.log(`Part ${partNumber}`);
			let errorCount = 0;
			const partKey = `part${partNumber}`;
			dataDay[partKey].map((dataLine, lineIndex) => {
				const result = solvers[0](dataLine.input);
				if (result !== dataLine.output) {
					console.log(`Expected ${dataLine.output} but got ${result}`);
					errorCount++;
				}
			});
			if (errorCount !== 0) {
				console.log(`Failure: ${errorCount} error(s)`);
			}
			else {
				console.log(`Success! (${dataDay[partKey].length} tests)`);
			}
			console.log('');
		});
	});
};

const day1 = (input) => {
	let coord = { x: 0, y: 0 };
	let vector = { x: 0, y: -1 };
	const steps = input.split(',').map((step) => step.trim());
	steps.map((step) => {
		const letter = step[0];
		const number = parseInt(step.substring(1), 10);
		const sign = letter === 'L' ? 1 : -1;
		if (vector.x === 0 && vector.y === -1) {
			vector.x = -sign;
			vector.y = 0;
		}
		else if (vector.x === 1 && vector.y === 0) {
			vector.x = 0;
			vector.y = -sign;
		}
		else if (vector.x === 0 && vector.y === 1) {
			vector.x = sign;
			vector.y = 0;
		}
		else if (vector.x === -1 && vector.y === 0) {
			vector.x = 0;
			vector.y = sign;
		}
		coord.x += number * vector.x;
		coord.y += number * vector.y;
	});
	return Math.abs(coord.x) + Math.abs(coord.y);
};

const data = [
	// Day 1
	{
		part1: [
			{ input: 'R2, L3', output: 5 },
			{ input: 'R2, R2, R2', output: 2 },
			{ input: 'R5, L5, R5, R3', output: 12 },
			{
				input: 'R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3',
				output: 161
			}
		],
		part2: [
			{ input: 'R8, R4, R4, R8', output: 4 }
		]
	}
];

const solvers = [
	day1
];

runTests(data);

const dataDay1 = 'R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3';
const r = day1(dataDay1);
console.log(r);