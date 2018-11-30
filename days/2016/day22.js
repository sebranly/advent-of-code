const utils = require('../../utils');

const day22 = (input) => {
	const last = input[input.length - 1];
	const matcher = last.match(/\/dev\/grid\/node-x(\d+)-y(\d+)/);
	const width = parseInt(matcher[1], 10) + 1;
	const height = parseInt(matcher[2], 10) + 1;

	const array = utils.create2DArray(width, height);

	input.forEach((node, index) => {
		if (index > 1) {
			const fullMatcher = node.match(/\/dev\/grid\/node-x(\d+)-y(\d+) +\d+T +(\d+)T +(\d+)T/);
			const x = parseInt(fullMatcher[1], 10);
			const y = parseInt(fullMatcher[2], 10);
			const used = parseInt(fullMatcher[3], 10);
			const available = parseInt(fullMatcher[4], 10);
			array[y][x] = { available, used };
		}
	});
	let count = 0;

	for (let i = 0 ; i < width ; i++) {
		for (let j = 0 ; j < height ; j++) {
			const value = array[j][i];
			for (let l = 0 ; l < width ; l++) {
				for (let m = 0 ; m < height ; m++) {
					if (i !== l || j !== m) {
						const value2 = array[m][l];
						if (value.used !== 0 && value.used <= value2.available) {
							count++;
						}
					}
				}
			}
		}
	}

	// TODO: the solution was manually found but I should find a way to program it
	// const shortArray = width < 10 && height < 10;
	// for (let j = 0 ; j < height ; j++) {
	//  const chars = [];
	//  for (let i = 0 ; i < width ; i++) {
	//   const value = array[j][i];

	//   let character;
	//   if ((shortArray && value.used > 20) || (!shortArray && value.used > 400)) {
	//    character = '#';
	//   } else if (i === width - 1 && j === 0) {
	//    character = 'G';
	//   } else if (value.used === 0) {
	//    character = '_';
	//   } else {
	//    character = '.';
	//   }

	//   chars.push(character);
	//  }
	//  console.log(chars.join(''));
	// }

	return {
		part1: count,
		part2: 0
	};
};

exports.day = day22;
