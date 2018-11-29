const data = require('./data').testData;

const allSolvers = require('../days');
const solvers = allSolvers.solvers;

const CONSTANTS = require('./constants');

const runTests = (data, skipLongUnitTests = false, safelist = []) => {
	const generalTimer = 'Test suite duration';
	console.time(generalTimer);

	let generalErrorCount = 0;
	let generalTestCount = 0;

	data.map((dataDay, dayIndex) => {
		const humanDayNumber = dayIndex + 1;
		if (safelist.length && !safelist.includes(humanDayNumber)) return;
		if (skipLongUnitTests && CONSTANTS.LONG_UNIT_TESTS.includes(humanDayNumber)) return;

		console.log(`> DAY ${humanDayNumber}:`);
		console.log('');

		[1, 2].map((partNumber) => {
			console.log(`Part ${partNumber}`);
			let errorCount = 0;
			const partKey = `part${partNumber}`;
			dataDay[partKey].map((dataLine, lineIndex) => {
				const start = new Date();
				const result = solvers[dayIndex](dataLine.input, partNumber)[partKey];
				const duration = new Date() - start;

				const optionalMessage = duration > CONSTANTS.LIMIT_UNIT_TEST_DURATION
					? ` [too long (took ${duration / 1000} seconds)]`
					: '';

				generalTestCount++;
				if (result !== dataLine.output) {
					const message = typeof dataLine.output === 'string'
						? `'${dataLine.output}'`
						: dataLine.output;
					const resultMessage = typeof result === 'string'
						? `'${result}'`
						: result;
					console.log(`Expected ${message} but got ${resultMessage}${optionalMessage}`);
					errorCount++;
				} else {
					console.log(`OK${optionalMessage}`);
				}
			});
			if (errorCount !== 0) {
				console.log(`Failure: ${errorCount} error(s)`);
				generalErrorCount++;
			}
			else {
				console.log(`Success! (${dataDay[partKey].length} test(s))`);
			}
			console.log('');
		});
	});

	const successfulTestCount = generalTestCount - generalErrorCount;
	const optionalReward = generalErrorCount === 0 ? ' 🎉' : '';
	console.log(`Total: ${successfulTestCount}/${generalTestCount}${optionalReward}`);
	console.timeEnd(generalTimer);
	if (generalErrorCount > 0) process.exit(1);
};

runTests(data);
