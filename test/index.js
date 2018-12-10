const { testData2016 } = require('./data/2016/data');
const { testData2018 } = require('./data/2018/data');

const allSolvers = require('../days');
const solvers = {};
solvers[2016] = allSolvers.solvers2016;
solvers[2018] = allSolvers.solvers2018;

const CONSTANTS = require('./constants');

const runTests = (testData, year, skipLongUnitTests = false, safelist = []) => {
	console.log(`> YEAR ${year}:`);
	console.log('');

	const generalTimer = 'Test suite duration';
	console.time(generalTimer);

	let generalErrorCount = 0;
	let generalTestCount = 0;

	testData.map((dataDay, dayIndex) => {
		const humanDayNumber = dayIndex + 1;
		if (safelist.length && !safelist.includes(humanDayNumber)) return;
		if (skipLongUnitTests && CONSTANTS.LONG_UNIT_TESTS[year].includes(humanDayNumber)) return;

		console.log(`>> DAY ${humanDayNumber}:`);
		console.log('');

		[1, 2].map((partNumber) => {
			console.log(`Part ${partNumber}`);
			let errorCount = 0;
			const partKey = `part${partNumber}`;
			dataDay[partKey].map((dataLine, lineIndex) => {
				const start = new Date();
				const result = solvers[year][dayIndex](dataLine.input, partNumber)[partKey];
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
				generalErrorCount += errorCount;
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
	console.log('');
	if (generalErrorCount > 0) process.exit(1);
};

// runTests(testData2016, 2016);
runTests(testData2018, 2018, false, [9]);
