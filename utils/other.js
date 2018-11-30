const { isUpperCaseLetter } = require('./string');

const b = (a) => {
	let count = 0;
	const matches = a.match(/^\((\d+)x\d+\)/);
	let number = matches ? matches[1] : 0;
	const c = [];
	let ch = [];
	let sawLetter = false;
	let sawInitialClose = false;
	for (let i = 0 ; i < a.length ; i++) {
		if (isUpperCaseLetter(a[i])) {
			sawLetter = true;
			count += 1;
			ch.push(a[i]);
		} else if (a[i] === '(' && sawLetter && count >= number) {
			portion = a.substring(i);
			const goals = portion.match(/^\((\d+)x\d+\)/);
			number = goals ? goals[1] : 0;
			c.push(ch.join(''));
			ch = [a[i]];
			sawLetter = false;
			sawInitialClose = false;
			count = 0;
		} else {
			if (!sawInitialClose && a[i] === ')') {
				sawInitialClose = true;
			} else if (sawInitialClose) {
				count += 1;
			}
			ch.push(a[i]);
		}
	}
	c.push(ch.join(''));
	return c;
};

const indexDay4 = (array, character) => {
	for (let i = 0 ; i < array.length ; i++) {
		if (array[i].character === character)
			return i;
	}
	return undefined;
};

const sanitizeTupleDay3 = (tuple) =>
	tuple.split(' ').map((v) => parseInt(v, 10));

module.exports = {
	b,
	indexDay4,
	sanitizeTupleDay3
};
