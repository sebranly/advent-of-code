const allDaysInput = require('./data');
const daysInput = {};
daysInput[2016] = allDaysInput.daysInput2016;
daysInput[2018] = allDaysInput.daysInput2018;

const allSolvers = require('./days');
const solvers = {};
solvers[2016] = allSolvers.solvers2016;
solvers[2018] = allSolvers.solvers2018;

const DAY_NUMBER = 9;
const YEAR = 2018;

const dayResult = solvers[YEAR][DAY_NUMBER - 1](daysInput[YEAR][DAY_NUMBER - 1]);
console.log(dayResult);
