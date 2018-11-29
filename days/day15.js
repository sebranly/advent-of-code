const day15 = (input, partNumber) => {
	const discs = [];
	input.forEach((discText) => {
		const indications = discText.match(/Disc #\d+ has (\d+) positions; at time=0, it is at position (\d+)./);
		const numberPositions = parseInt(indications[1], 10);
		const initialPosition = parseInt(indications[2], 10);
		discs.push({ initialPosition, numberPositions });
	});
	if (partNumber === 2) {
		discs.push({ initialPosition: 0, numberPositions: 11 });
	}

	let timeNotFound = true;
	let time = 0;
	while (timeNotFound) {
		let atLeastAWrongDisc = false;

		discs.forEach((disc, index) => {
			if ((disc.initialPosition + time + 1 + index) % disc.numberPositions !== 0) {
				atLeastAWrongDisc = true;
			}
		});

		if (!atLeastAWrongDisc) {
			timeNotFound = false;
		} else {
			time++;
		}
	}

	return {
		part1: time,
		part2: time
	};
};

exports.day = day15;
