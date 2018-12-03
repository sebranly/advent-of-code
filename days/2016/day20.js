const { sortBy } = require('lodash');

const day20 = ({ bannedIPs, max }) => {
	const ranges = bannedIPs.map((pair) => {
		return { min: pair[0], max: pair[1] };
	});
	const sortedRanges = sortBy(ranges, 'min');
	let i = 0;
	while (i < sortedRanges.length - 1) {
		const current = sortedRanges[i];
		const next = sortedRanges[i + 1];
		if (current.max >= next.min || current.max + 1 === next.min) {
			current.max = Math.max(current.max, next.max);
			sortedRanges.splice(i + 1, 1);
		} else {
			i++;
		}
	}

	let validCount = sortedRanges[0].min + (max - sortedRanges[sortedRanges.length - 1].max);
	for (let i = 0 ; i < sortedRanges.length - 1 ; i++) {
		validCount += sortedRanges[i + 1].min - (sortedRanges[i].max + 1);
	}

	return {
		part1: sortedRanges[0].max + 1,
		part2: validCount
	}
};

exports.day = day20;
