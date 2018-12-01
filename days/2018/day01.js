const day1 = (input, partNumber) => {
	let freq = 0;
	const solution = { part1: 0, part2: 0 };
	const allFreq = { [freq]: true };

	let shouldContinue = true;
	while (shouldContinue) {
		for (let i = 0 ; i < input.length ; i++) {
			const line = input[i];
			freq += line;
			if (partNumber === 2) {
				if (allFreq[freq]) {
					solution.part2 = freq;
					return solution;
				}
				else {
					allFreq[freq] = true;
				}
			}
		}
		if (partNumber !== 2) shouldContinue = false;
	}

	solution.part1 = freq;
	return solution;
};

exports.day = day1;
