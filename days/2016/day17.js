const { cloneDeep, flattenDeep } = require('lodash');
const md5 = require('js-md5');
const utils = require('../../utils');

const reachDay17 = (input, maze, pos, path = '') => {
	const copyMaze = cloneDeep(maze);
	if (pos.x === copyMaze.size - 1 && pos.y === copyMaze.size - 1) {
		return path;
	}
	const md5Hash = md5(`${input}${path}`);
	const limitedMd5Hash = md5Hash.substring(0, 4);

	const cell = copyMaze.array[pos.y][pos.x];

	const isOpen = (character) => utils.isLowerCaseLetter(character) && character !== 'a';

	cell.up = isOpen(limitedMd5Hash[0]);
	cell.down = isOpen(limitedMd5Hash[1]);
	cell.left = isOpen(limitedMd5Hash[2]);
	cell.right = isOpen(limitedMd5Hash[3]);

	if (pos.x === 0) cell.left = false;
	if (pos.x === copyMaze.size - 1) cell.right = false;
	if (pos.y === 0) cell.up = false;
	if (pos.y === copyMaze.size - 1) cell.down = false;

	if (!(cell.up) && !(cell.down) && !(cell.left) && !(cell.right)) {
		return -1;
	}

	const possiblePaths = [];
	if (cell.down) {
		const newPos = { x: pos.x, y: pos.y + 1 };
		const res = reachDay17(input, copyMaze, newPos, `${path}D`);
		if (res !== -1)
			possiblePaths.push(res);
	}
	if (cell.up) {
		const newPos = { x: pos.x, y: pos.y - 1 };
		const res = reachDay17(input, copyMaze, newPos, `${path}U`);
		if (res !== -1)
			possiblePaths.push(res);
	}
	if (cell.left) {
		const newPos = { x: pos.x - 1, y: pos.y };
		const res = reachDay17(input, copyMaze, newPos, `${path}L`);
		if (res !== -1)
			possiblePaths.push(res);
	}
	if (cell.right) {
		const newPos = { x: pos.x + 1, y: pos.y };
		const res = reachDay17(input, copyMaze, newPos, `${path}R`);
		if (res !== -1)
			possiblePaths.push(res);
	}

	return possiblePaths.length ? possiblePaths : -1;
};

const day17 = (input) => {
	const SIZE = 4;
	const maze = { array: utils.create2DArray(SIZE, SIZE, { up: false, right: false, down: false, left: false }), size: SIZE };
	const position = {
		x: 0,
		y: 0
	};

	const path = flattenDeep(reachDay17(input, maze, position));
	return {
		part1: path.reduce((a, b) => a.length < b.length ? a : b),
		part2: path.reduce((a, b) => a.length > b.length ? a : b).length,
	};
};

exports.day = day17;
