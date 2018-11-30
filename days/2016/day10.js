const utils = require('../../utils');

const day10 = ({ microchip1, microchip2, instructions }) => {
	let part1 = -1;
	const max = { bot: -1, output: -1 };
	const regex1 = /value (\d+) goes to bot (\d+)/;
	const regex2 = /bot (\d+) gives low to ([a-z]+) (\d+) and high to ([a-z]+) (\d+)/;

	instructions.forEach((instruction) => {
		const matchesGo = instruction.match(regex1);
		const matchesGive = instruction.match(regex2);
		if (matchesGo) {
			const botNumber = parseInt(matchesGo[2], 10);
			if (botNumber > max.bot) {
				max.bot = botNumber;
			}
		} else if (matchesGive) {
			const botNumber1 = parseInt(matchesGive[1], 10);
			if (botNumber1 > max.bot)
				max.bot = botNumber1;

			const number = parseInt(matchesGive[3], 10);
			if (matchesGive[2] === 'bot') {
				if (number > max.bot)
					max.bot = number;
			} else if (matchesGive[2] === 'output') {
				if (number > max.output)
					max.output = number;
			}

			const number1 = parseInt(matchesGive[5], 10);
			if (matchesGive[4] === 'bot') {
				if (number1 > max.bot)
					max.bot = number1;
			} else if (matchesGive[4] === 'output') {
				if (number1 > max.output)
					max.output = number1;
			}
		}
	});
	max.bot += 1;
	max.output += 1;

	const bots = new Array(max.bot);
	for (let i = 0 ; i < max.bot ; i++) {
		bots[i] = { values: [], lower: { type: '', number: -1 }, higher: { type: '', number: -1 } };
	}
	const outputs = new Array(max.output);
	for (let i = 0 ; i < max.output ; i++) {
		outputs[i] = { values: [] };
	}

	const pushValue = (botNumber, value) => {
		const bot = bots[botNumber];
		bot.values.push(value);
		if (bot.values.length === 2) {
			bot.values = utils.minMax(bot.values);
			if (microchip1 === bot.values[0] && microchip2 === bot.values[1]) {
				part1 = botNumber;
			}
			if (bot.lower.type === 'output') {
				outputs[bot.lower.number] = bot.values[0];
			} else {
				pushValue(bot.lower.number, bot.values[0]);
			}
			if (bot.higher.type === 'output') {
				outputs[bot.higher.number] = bot.values[1];
			} else {
				pushValue(bot.higher.number, bot.values[1]);
			}
			bot.values = [];
		}
	};

	instructions.forEach((instruction) => {
		const matchesGive = instruction.match(regex2);
		if (matchesGive) {
			const botNumber = parseInt(matchesGive[1], 10);
			const type1 = matchesGive[2];
			const type1Number = parseInt(matchesGive[3]);
			const type2 = matchesGive[4];
			const type2Number = parseInt(matchesGive[5]);
			bots[botNumber].lower.type = type1;
			bots[botNumber].lower.number = type1Number;
			bots[botNumber].higher.type = type2;
			bots[botNumber].higher.number = type2Number;
		}
	});

	instructions.forEach((instruction) => {
		const matchesGo = instruction.match(regex1);
		if (matchesGo) {
			const value = parseInt(matchesGo[1], 10);
			const botNumber = parseInt(matchesGo[2], 10);
			pushValue(botNumber, value);
		}
	});

	return {
		part1,
		part2: outputs[0] * outputs[1] * outputs[2]
	};
};

exports.day = day10;
