const day6 = (input) => {
	const numberOfCharacters = input[0].length;
	const occurrences = new Array(numberOfCharacters);
	input.forEach((line) => {
		for (let i = 0 ; i < numberOfCharacters ; i++) {
			const character = line[i];
			if (!occurrences[i]) {
				occurrences[i] = {};
			}
			if (occurrences[i][character]) {
				occurrences[i][character] += 1;
			} else {
				occurrences[i][character] = 1;
			}
		}
	});
	const string = new Array(numberOfCharacters);
	const string2 = new Array(numberOfCharacters);
	occurrences.forEach((line, index) => {
		Object.keys(line).forEach((letter) => {
			if (!string[index] || occurrences[index][letter] > string[index].occurrence) {
				string[index] = { letter, occurrence: occurrences[index][letter] };
			}
			if (!string2[index] || occurrences[index][letter] < string2[index].occurrence) {
				string2[index] = { letter, occurrence: occurrences[index][letter] };
			}
		});
	}); 
	return {
		part1: string.map((e) => e.letter).join(''),
		part2: string2.map((e) => e.letter).join('')
	}
};

exports.day = day6;
