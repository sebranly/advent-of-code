const { reverse } = require('lodash');

const day16 = ({ length1, length2, state }, partNumber) => {
	const length = partNumber === 2 ? length2 : length1;

	let data = state;
	while (data.length < length) {
		const a = data;
		const b = reverse(a.split('')).join('');
		const c = b.split('').map((v) => `${1 - parseInt(v, 10)}`).join('');
		data = `${a}0${c}`;
	}
	let newData = data.substring(0, length);
	while (newData.length % 2 === 0) {
		const d = [];
		for (let i = 0 ; i < newData.length / 2 ; i++) {
			const sameConsecutiveCharacters = newData[i * 2] === newData[i * 2 + 1];
			d.push(sameConsecutiveCharacters ? 1 : 0);
		}
		newData = d.join('');
	}

	return {
		part1: newData,
		part2: newData
	}
};

exports.day = day16;
