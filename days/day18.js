const day18 = ({ rows1, rows2, state }) => {
	const states = [state];
	for (let i = 0 ; i < rows2 - 1 ; i++) {
		const previous = states[i];
		const current = [];
		for (let j = 0 ; j < previous.length ; j++) {
			const leftIsTrap = j - 1 >= 0 && previous[j - 1] === '^';
			const centerIsTrap = previous[j] === '^';
			const rightIsTrap = j + 1 < previous.length && previous[j + 1] === '^';
			const isTrap = (!leftIsTrap && rightIsTrap) || (leftIsTrap && !rightIsTrap);
			current.push(isTrap ? '^' : '.');
		}
		states.push(current.join(''));
	}

	let count1 = 0, count2 = 0;
	states.forEach((state, index) => {
		state.split('').forEach((character) => {
			if (character === '.') {
				if (index < rows1) count1++;
				count2++;
			}
		})
	});

	return {
		part1: count1,
		part2: count2
	};
};

exports.day = day18;
