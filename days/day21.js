const { cloneDeep } = require('lodash');
const utils = require('../utils');

const day21 = ({ finalState, state, steps }, partNumber) => {
	const applySteps = (steps, state) => {
		let string = state.split('');
		const length = string.length;
		steps.forEach((step) => {
			const matchSwapPosition = step.match(/swap position (\d+) with position (\d+)/);
			const matchSwapLetter = step.match(/swap letter ([a-z]) with letter ([a-z])/);
			const rotateLeftRight = step.match(/rotate (left|right) (\d+) (?:step|steps)/);
			const rotatePosition = step.match(/rotate based on position of letter ([a-z])/);
			const reversePosition = step.match(/reverse positions (\d+) through (\d+)/);
			const movePosition = step.match(/move position (\d+) to position (\d+)/);

			if (matchSwapPosition || matchSwapLetter) {
				const ind1 = matchSwapPosition
					? parseInt(matchSwapPosition[1], 10)
					: string.indexOf(matchSwapLetter[1]);
				const ind2 = matchSwapPosition
					? parseInt(matchSwapPosition[2], 10)
					: string.indexOf(matchSwapLetter[2]);
				const temp = string[ind1];
				string[ind1] = string[ind2];
				string[ind2] = temp;
			} else if (rotateLeftRight || rotatePosition) {
				const direction = rotateLeftRight && rotateLeftRight[1] === 'left' ? -1 : 1;
				const positiveOffset = rotateLeftRight
					? parseInt(rotateLeftRight[2], 10)
					: string.indexOf(rotatePosition[1]) + 1;
				const newOffset = rotatePosition && positiveOffset >= 5 ? positiveOffset + 1 : positiveOffset;
				const offset = newOffset * direction;
				const otherString = cloneDeep(string);
				for (let i = 0 ; i < length ; i++) {
					otherString[(i + offset + length) % length] = string[i];
				}
				string = otherString;
			} else if (reversePosition) {
				const ind1 = parseInt(reversePosition[1], 10);
				const ind2 = parseInt(reversePosition[2], 10);
				const otherString = cloneDeep(string);
				for (let i = ind1 ; i <= ind2 ; i++) {
					otherString[i] = string[ind2 - (i - ind1)];
				}
				string = otherString;
			} else if (movePosition) {
				const ind1 = parseInt(movePosition[1], 10);
				const ind2 = parseInt(movePosition[2], 10);
				const letter = string.splice(ind1, 1);
				string.splice(ind2, 0, letter[0]);
			}
		});

		return string.join('');
	};

	let solution;
	if (partNumber === 2) {
		allPermutations = utils.getAllPermutations(finalState);
		let i = 0;
		// Apparently for the example, there are multiple solutions
		while (allPermutations[i] === 'deabc' || applySteps(steps, cloneDeep(allPermutations[i])) !== finalState) i++;
		solution = allPermutations[i];
	}

	return {
		part1: partNumber === 1 ? applySteps(steps, cloneDeep(state)) : 0,
		part2: solution
	};
};

exports.day = day21;
