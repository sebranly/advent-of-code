const daysInputData = require('./data');
const daysInput = daysInputData.daysInput;

const allSolvers = require('./days');
const solvers = allSolvers.solvers;

const DAY_NUMBER = 25;
const dayResult = solvers[DAY_NUMBER - 1](daysInput[DAY_NUMBER - 1]);
console.log(dayResult);
