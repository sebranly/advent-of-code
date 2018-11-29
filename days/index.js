const array = new Array(25);
for (let i = 0 ; i < array.length ; i++)
	array[i] = i + 1;

const solvers = array.map((v) => require(`./day${v}`).day);
exports.solvers = solvers;
