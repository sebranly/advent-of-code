const array = require('./array');
const crypto = require('./crypto');
const math = require('./math');
const other = require('./other');
const path = require('./path');
const string = require('./string');

module.exports = {
	...array,
	...crypto,
	...math,
	...other,
	...path,
	...string
};
