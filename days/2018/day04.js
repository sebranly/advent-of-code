const { sortBy, isEqual } = require('lodash');
const utils = require('../../utils');

const day4 = (input) => {
	const sortedInput = sortBy(input);
	const guards = {};
	const days = {};
	let maxIdGuard = 0;
	const solution = {};

	sortedInput.forEach((line, index) => {
		const regex = line.match(/\[\d+-(\d+)-(\d+) \d+:(\d+)\] (Guard #\d+ begins shift|wakes (up)|falls (asleep))/);
		const m = parseInt(regex[1], 10);
		const d = parseInt(regex[2], 10);
		const minutes = parseInt(regex[3], 10);
		const dayKey = `${m}-${d}`;
		const sentence = regex[4];
		days[dayKey] = true;

		const splitSentence = sentence.split('#');
		let idGuard = -1;
		if (splitSentence.length > 1) {
			idGuard = parseInt(splitSentence[1], 10);
			if (idGuard > maxIdGuard) {
				maxIdGuard = idGuard;
			}
			guards[idGuard] = true;
		}
		sortedInput[index] = { dayKey, idGuard, minutes, sentence };
	});

	let table = utils.create2DArray(60, maxIdGuard + 1);
	for (let y = 0 ; y < maxIdGuard + 1 ; y++) {
		for (let x = 0 ; x < 60 ; x++) {
			table[y][x] = {};
		}
	}

	let currentGuard = 0;
	let fellAsleepAt = 0;
	sortedInput.forEach(({ dayKey, idGuard, minutes, sentence }) => {
		if (idGuard !== -1) {
			currentGuard = idGuard;
		} else if (sentence === 'falls asleep') {
			table[currentGuard][minutes][dayKey] = '#';
			fellAsleepAt = minutes;
		} else if (sentence === 'wakes up') {
			for (let min = fellAsleepAt ; min < minutes ; min++) {
				table[currentGuard][min][dayKey] = '#';
			}
		}
	});

	let highscore = 0;
	let countMinutes = 0;
	let mostMinAsleep;
	let factor = 0;

	Object.keys(guards).forEach((guardId) => {
		countMinutes = 0;
		mostMinAsleep = {};
		Object.keys(days).forEach((dayKey) => {
			for (let min = 0 ; min < 60 ; min++) {
				if (table[guardId][min][dayKey] === '#') {
					if (!mostMinAsleep[min]) {
						mostMinAsleep[min] = 1;
					} else {
						mostMinAsleep[min]++;
					}
					countMinutes++;
				}
			}
		});
		let mostMinOneGuard = 0;
		let minId;
		for (let min = 0 ; min < 60 ; min++) {
			if (mostMinAsleep[min] > mostMinOneGuard) {
				mostMinOneGuard = mostMinAsleep[min];
				minId = min;
			}
		}
		if (countMinutes > highscore) {
			highscore = countMinutes;
			factor = guardId * minId;
		}
	});
	solution.part1 = factor;

	let countMinutes2 = 0;
	let part2Highscore = 0;
	let idWorstGuard;
	let idWorstMin;
	Object.keys(guards).forEach((guardId) => {
		for (let min = 0 ; min < 60 ; min++) {
			countMinutes2 = 0;
			Object.keys(days).forEach((dayKey) => {
				if (table[guardId][min][dayKey] === '#') {
					countMinutes2++;
				}
			});
			if (countMinutes2 > part2Highscore) {
				part2Highscore = countMinutes2;
				idWorstMin = min;
				idWorstGuard = guardId;
			}
		}
	});

	solution.part2 = idWorstGuard * idWorstMin;
	return solution;
};

exports.day = day4;