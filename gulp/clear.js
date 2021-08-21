const del = require("del");
const config = require("./config");

module.exports = function clear() {
	return del(config.out.baseDir, { force: true });
};
