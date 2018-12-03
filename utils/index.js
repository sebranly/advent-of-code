const array = require('./array');
const crypto = require('./crypto');
const file = require('./file');
const math = require('./math');
const other = require('./other');
const path = require('./path');
const string = require('./string');

module.exports = {
	...array,
	...crypto,
	...file,
	...math,
	...other,
	...path,
	...string
};
