const { difference, sortBy, uniq } = require('lodash');
const { UPPERCASE_A_VALUE } = require('../../utils/constants');

const delayForLetter = (letter, delay, isBeginning = false) => {
	const d = letter.charCodeAt(0) - UPPERCASE_A_VALUE + delay;
	return isBeginning ? d - 1 : d;
} 

const day7 = ({ steps, workersCount, delay }) => {
	const solution = {};
	const formattedSteps = {};
	const lettersThatConstraint = [];
	const lettersUnderConstraints = [];

	steps.forEach((line, index) => {
		const m = line.match(/Step ([A-Z]) must be finished before step ([A-Z]) can begin./);
		if (!formattedSteps[m[1]]) formattedSteps[m[1]] = { key: m[1] };
		const formattedStep = formattedSteps[m[1]];
		if (!formattedStep.other) formattedStep.other = [m[2]];
		else formattedStep.other.push(m[2]);
		formattedStep.completedStep = false;
		if (!lettersThatConstraint.includes(m[1])) lettersThatConstraint.push(m[1]);
		if (!lettersUnderConstraints.includes(m[2])) lettersUnderConstraints.push(m[2])
	});

	// There could be several initial steps
	const initialSteps = difference(lettersThatConstraint, lettersUnderConstraints);

	// There is always only one final step
	const finalStep = difference(lettersUnderConstraints, lettersThatConstraint)[0];
	Object.values(formattedSteps).forEach((formattedStep) => {
		if (!formattedStep.other.includes(finalStep)) {
			formattedStep.other.push(finalStep);
		}
	});

	formattedSteps[finalStep] = { completedStep: false, other: [], key: finalStep };

	const stringSolution = [];
	let availableSteps = sortBy(initialSteps);

	const workers = new Array(workersCount);
	for (let i = 0 ; i < workersCount ; i++) {
		workers[i] = null;
	}
	justCompletedSteps = [];

	for (let i = 0 ; i < workersCount ; i++) {
		if (availableSteps.length > 0) {
			const letter = availableSteps[0];
			availableSteps = availableSteps.slice(1);
			workers[i] = { key: letter, remainingTime: delayForLetter(letter, delay, true) };
		}
	}

	let seconds = 0;
	const numberOfSteps = Object.keys(formattedSteps).length;

	while (stringSolution.length < numberOfSteps) {
		for (let i = 0 ; i < workersCount ; i++) {
			if (workers[i] && workers[i].remainingTime === 0) {
				const letter = workers[i].key;
				stringSolution.push(letter);
				formattedSteps[letter].completedStep = true;
				justCompletedSteps.push(letter);
				workers[i] = null;
			}
		}

		const justCompletedStepsLength = justCompletedSteps.length;

		if (justCompletedStepsLength) {
			justCompletedSteps.forEach((justCompletedStep) => {
				const step = formattedSteps[justCompletedStep];
				const potentiallyAvailableSteps = uniq([...availableSteps, ...step.other]);
				const reallyAvailableSteps = potentiallyAvailableSteps.filter((potentiallyAvailableStep) => {
					let isReallyAvailable = true;
					Object.values(formattedSteps).forEach((formattedStep) => {
						if (formattedStep.other.includes(potentiallyAvailableStep) && formattedStep.completedStep === false) {
							isReallyAvailable = false;
						}
					});
					return isReallyAvailable;
				});
				availableSteps = sortBy(uniq([...availableSteps, ...reallyAvailableSteps]));
			});

			if (availableSteps.length > 0) {
				for (let i = 0 ; i < workersCount ; i++) {
					if (!workers[i] && availableSteps.length > 0) {
						const letter = availableSteps[0];
						availableSteps = availableSteps.slice(1);
						workers[i] = { key: letter, remainingTime: delayForLetter(letter, delay) };
					}
				}
			}
			justCompletedSteps = justCompletedSteps.splice(justCompletedStepsLength);
		}

		seconds++;

		for (let i = 0 ; i < workersCount ; i++) {
			if (workers[i]) {
				workers[i].remainingTime--;
			}
		}
	}

	solution.part1 = stringSolution.join('');
	solution.part2 = seconds;
	return solution;
};

exports.day = day7;
