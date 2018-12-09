const { orderBy } = require('lodash');
const utils = require('../../utils');

const day6 = ({ inputCoord, maxiDistance }) => {
	const solution = {};
	const min = [0, 1].map((i) => orderBy(inputCoord.map((v) => v[i]), [])[0]);
	const max = [0, 1].map((i) => orderBy(inputCoord.map((v) => v[i]), [], ['desc'])[0]);

	const coord = inputCoord.map((line) => {
		const x = line[0];
		const y = line[1];

		return {x, y, innerCoord: true, occurrences: 0 };
	});

	let withinMaxiDistance = 0;
	for (let x = min[0] ; x <= max[0] ; x++) {
		for (let y = min[1] ; y <= max[1] ; y++) {
			let closestIndex = -1;
			let closestDistance = 0;
			let duplicate = false;
			let cumulativeDistance = 0;

			coord.forEach((c, index) => {
				const distance = Math.abs(c.x - x) + Math.abs(c.y - y);
				cumulativeDistance += distance;

				if (closestIndex !== -1 && distance === closestDistance) {
					duplicate = true;
				}

				if (distance < closestDistance || closestIndex === -1) {
					closestIndex = index;
					closestDistance = distance;
					duplicate = false;
				}
			});

			if (cumulativeDistance < maxiDistance) {
				withinMaxiDistance += 1;
			}

			if (!duplicate) {
				coord[closestIndex].occurrences += 1;
				// Rule found on reddit once I refactored, only one I was missing for this nicer solution
				if ([min[0], max[0]].includes(x) || [min[1], max[1]].includes(y)) {
					coord[closestIndex].innerCoord = false;
				}
			}
		}
	}
	solution.part1 = orderBy(coord.filter((c) => c.innerCoord === true).map((c) => c.occurrences), [], ['desc'])[0];
	solution.part2 = withinMaxiDistance;
	return solution;
};

exports.day = day6;