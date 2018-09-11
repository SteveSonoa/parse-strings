// If we're not convinced that our variable is a stringified object or simply a string (ie 'Not Resolved'), this will correctly handle parsing.

parseObject = object => {
	if (typeof object === 'object') {
		return JSON.parse(object);
	} else return object;
};

console.log(parseObject('hello world'));
