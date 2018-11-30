const day19 = (input) => {
	let elfs = [];
	for (let i = 0 ; i < input ; i++)
		elfs.push({ i: i + 1, p: 1 });

	while (elfs.length > 1) {
		const otherElfs = [];
		elfs.forEach((elf, index) => {
			if (index % 2 === 0 && !(index === 0 && elfs.length % 2 === 1)) {
				otherElfs.push(elfs[index]);
			}
		});
		elfs = otherElfs;
	}

	const part1 = elfs[0].i;

	let part2;
	// Naïve implementation (which is too slow) to find a pattern
	// elfs = [];
	// for (let i = 0 ; i < input ; i++)
	//  elfs.push({ i: i + 1, p: 1 });
	// let currentIndex = 0;
	// while (elfs.length > 1) {
	//  if (elfs.length % 1000 === 0) console.log(elfs.length);
	//  const half = Math.floor(elfs.length / 2);
	//  const oppositeIndex = (currentIndex + half) % elfs.length;
	//  elfs.splice(oppositeIndex, 1);
	//  if (oppositeIndex > currentIndex) {
	//   currentIndex++;
	//  } else {
	//   if (currentIndex >= elfs.length) currentIndex = 0;
	//  }
	// }
	// part2 = elfs[0].i;

	let powValue = 0;
	let pow = 0;
	while (powValue <= input) {
		pow++;
		powValue = Math.pow(3, pow);
	}
	pow--;
	powValue = Math.pow(3, pow);

	let inc = 1;
	let ind = powValue;
	let res = 0;
	if (Math.pow(3, pow) === input) {
		part2 = input;
	} else {
		while (ind < input) {
			if (ind === 2 * powValue) inc = 2;
			res += inc;
			ind++;
		}
		part2 = res;
	}

	return {
		part1: part1,
		part2: part2
	};
};

exports.day = day19;
