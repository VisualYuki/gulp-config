const del = require("del");
let config = require("./config");

module.exports = function clear() {
	return del(config.out.baseDir, { force: true });
};
