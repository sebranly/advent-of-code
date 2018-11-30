const { cloneDeep } = require('lodash');
const utils = require('../../utils');

const day12 = ({ eggs1, eggs2, instructions, processor }, partNumber, isDay23 = false, isDay25 = false, valueA = 0) => {
	const copyInstructions = cloneDeep(instructions);
	const day23A = partNumber === 2 ? eggs2 : eggs1;
	const registers = {
		'a': isDay23 ? day23A : valueA,
		'b': 0,
		'c': partNumber === 2 && !isDay23 ? 1 : 0,
		'd': 0
	};

	let currentIndex = 0;

	const getValueOfRegisterOrValue = (matchedValue) =>
		utils.isLowerCaseLetter(matchedValue)
			? registers[matchedValue]
			: parseInt(matchedValue, 10);

	const signal = [];

	while (utils.valueBetween(currentIndex, 0, copyInstructions.length - 1)) {
		const instruction = copyInstructions[currentIndex];

		const match1 = instruction.match(/inc ([a-d])/);
		const match2 = instruction.match(/dec ([a-d])/);
		const match3 = instruction.match(/cpy (-?\d+|[a-d]) ([a-d])/);
		const match4 = instruction.match(/jnz (-?\d+|[a-d]) (-?\d+|[a-d])/);
		const match5 = isDay23 && instruction.match(/tgl (-?\d+|[a-d])/);
		const match6 = isDay25 && instruction.match(/out (-?\d+|[a-d])/);

		// TBD: improve this hardcoded part
		if (instruction === 'jnz d -5' && currentIndex - 5 >= 0 && copyInstructions[currentIndex - 5] === 'cpy b c' && copyInstructions[currentIndex - 4] === 'inc a' && copyInstructions[currentIndex - 3] === 'dec c' && copyInstructions[currentIndex - 2] === 'jnz c -2' && copyInstructions[currentIndex - 1] === 'dec d') {
			// { a: 18, b: 9, c: 0, d: 1318 }
			// After two steps
			// { a: 36, b: 9, c: 0, d: 1316 }
			registers['a'] += registers['d'] * registers['b'];
			registers['d'] = 0;
			currentIndex++;
		} else if (match1) {
			registers[match1[1]] += 1;
			currentIndex++;
		} else if (match2) {
			registers[match2[1]] -= 1;
			currentIndex++;
		} else if (match3) {
			const firstMatchedValue = match3[1];
			const value = getValueOfRegisterOrValue(firstMatchedValue);
			registers[match3[2]] = value;
			currentIndex++;
		} else if (match4) {
			if (getValueOfRegisterOrValue(match4[1]) !== 0) {
				const valueJump = getValueOfRegisterOrValue(match4[2]);
				currentIndex += valueJump;
			} else {
				currentIndex++;
			}
		} else if (match5) {
			const value = getValueOfRegisterOrValue(match5[1]) + currentIndex;
			if (utils.valueBetween(value, 0, copyInstructions.length - 1)) {
				if (copyInstructions[value].startsWith('inc')) {
					copyInstructions[value] = copyInstructions[value].replace('inc', 'dec');
				} else if (copyInstructions[value].startsWith('dec')) {
					copyInstructions[value] = copyInstructions[value].replace('dec', 'inc');
				} else if (copyInstructions[value].startsWith('jnz')) {
					copyInstructions[value] = copyInstructions[value].replace('jnz', 'cpy');
				} else if (copyInstructions[value].startsWith('cpy')) {
					copyInstructions[value] = copyInstructions[value].replace('cpy', 'jnz');
				} else if (copyInstructions[value].startsWith('tgl')) {
					copyInstructions[value] = copyInstructions[value].replace('tgl', 'inc');
				}
			}
			currentIndex++;
		} else if (match6) {
			const value = getValueOfRegisterOrValue(match6[1]);
			if (signal.length > 0 && value !== 1 - signal[signal.length - 1]) {
				return day12({ instructions, processor }, partNumber, false, true, valueA + 1);
			}
			signal.push(value);
			if (signal.length === 10000) {
				return {
					part1: valueA,
					part2: 0
				}
			}
			currentIndex++;
		}
	}

	return {
		part1: registers[processor],
		part2: registers[processor]
	}
};

exports.day = day12;
