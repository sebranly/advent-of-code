const array = require('./array');
const crypto = require('./crypto');
const file = require('./file');
const linkedList = require('./linkedList');
const math = require('./math');
const other = require('./other');
const path = require('./path');
const string = require('./string');

module.exports = {
	...array,
	...crypto,
	...file,
	...linkedList,
	...math,
	...other,
	...path,
	...string
};
