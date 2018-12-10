const { orderBy } = require('lodash');
const utils = require('../../utils');

const day9 = (input, partNumber) => {
	const m = input.match(/(\d+) players; last marble is worth (\d+) points/);
	const playersCount = parseInt(m[1], 10);
	const marblesMultiplier = partNumber === 2 ? 100 : 1;
	const marbleTotal = parseInt(m[2], 10) * marblesMultiplier + 1;

	const solution = {};

	const players = new Array(playersCount);
	for (let i = 0 ; i < playersCount ; i++) {
		players[i] = { score: 0, key: i + 1 };
	}

	const allNodes = [];
	utils.modifyNodes(0, allNodes, 0, 'insert', 0);
	utils.modifyNodes(0, allNodes, 0, 'insert', 1);

	let currentMarbleKey = 1;
	let marbleCount = 2;

	while (marbleCount < marbleTotal) {
		if (marbleCount % 23 === 0) {
			const { deletedKey, keyAfterDelete } = utils.modifyNodes(currentMarbleKey, allNodes, -7, 'delete', marbleCount);
			const currentPlayer = (marbleCount - 1) % playersCount;
			players[currentPlayer].score += marbleCount + deletedKey;
			currentMarbleKey = keyAfterDelete;
		} else {
			utils.modifyNodes(currentMarbleKey, allNodes, 1, 'insert', marbleCount);
			currentMarbleKey = marbleCount;
		}
		marbleCount++;
	}

	const bestScore = orderBy(players, ['score'], ['desc'])[0].score;

	if (partNumber === 2) {
		solution.part2 = bestScore;
	} else {
		solution.part1 = bestScore;
	}
	return solution;
};

exports.day = day9;