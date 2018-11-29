const utils = require('../utils');

const day1 = (input) => {
	// Clockwise
	const directions = ['N', 'E', 'S', 'W'];

	let coord = { x: 0, y: 0 };
	let currentDirectionIndex = 0;
	let vect;

	let firstLocationVisitedTwice = null;
	const history = [{ x: 0, y: 0 }];

	const steps = input.split(',').map((step) => step.trim());
	steps.map((step) => {
		const letter = step[0];
		const number = parseInt(step.substring(1), 10);
		const directionChange = letter === 'L' ? -1 : 1;
		currentDirectionIndex += directionChange;
		currentDirectionIndex = (currentDirectionIndex + directions.length) % directions.length;

		switch (directions[currentDirectionIndex]) {
			case 'N':
				vect = { x: 0, y: -1 };
				break;
			case 'E':
				vect = { x: 1, y: 0 };
				break;
			case 'S':
				vect = { x: 0, y: 1 };
				break;
			case 'W':
			default:
				vect = { x: -1, y: 0 };
				break;
		}

		for (i = 0 ; i < number ; i++) {
			coord.x += vect.x;
			coord.y += vect.y;

			if (!firstLocationVisitedTwice) {
				history.map((historyLine) => {
					if (historyLine.x === coord.x && historyLine.y === coord.y) {
						firstLocationVisitedTwice = { ...coord };
					}
				});
			}

			history.push({ ...coord });
		}
	});

	const part2 = firstLocationVisitedTwice
		? utils.distanceFromOrigin(firstLocationVisitedTwice)
		: 0;

	return {
		part1: utils.distanceFromOrigin(coord),
		part2
	};
};

exports.day = day1;
