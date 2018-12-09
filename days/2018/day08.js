const day8 = (numbers) => {
	const solution = {};
	const nodes = [];

	const allMetaDataEntries = [];
	let i = 0;

	const simulateOneNode = (numbers, i) => {
		const childrenCount = numbers[i];
		i++;
		const metaDataEntriesCount = numbers[i];
		i++;

		const childrenScores = [];
		if (childrenCount > 0) {
			let j = 0;
			while (j < childrenCount) {
				const result = simulateOneNode(numbers, i);
				i = result.i;
				childrenScores.push(result.score);
				j++;
			}
		}

		let k = 0;
		let values = [];
		while (k < metaDataEntriesCount) {
			allMetaDataEntries.push(numbers[i]);
			values.push(numbers[i]);
			k++;
			i++;
		}

		const score = childrenCount === 0
			? values.reduce((acc, v) => acc + v, 0)
			: values.reduce((acc, index) => {
				const newIndex = index - 1;
				const additionalValue = newIndex >= childrenCount
					? 0
					: childrenScores[newIndex];
				return acc + additionalValue; 
			}, 0);
		return { i, score };
	}

	const result = simulateOneNode(numbers, i);
	solution.part1 = allMetaDataEntries.reduce((acc, v) => acc + v, 0);
	solution.part2 = result.score;

	return solution;
};

exports.day = day8;