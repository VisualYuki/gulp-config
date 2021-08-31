const path = require("path");
const config = require("./gulp/config");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

//console.log(config);

module.exports = {
	devtool: config.isDev ? "eval-source-map" : false,
	context: path.resolve(__dirname, "src"),
	target: "web",

	entry: {
		pageOne: "./js/pages/index.js",
		//pageTwo: "./js/pages/_index.js",
	},
	output: {
		path: path.resolve(__dirname, `${config.out.baseDir}/js`),
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@js": path.resolve(__dirname, "src/js/"),
			"@less": path.resolve(__dirname, "src/less/"),
			"@assets": path.resolve(__dirname, "src/assets/"),
			"@src": path.resolve(__dirname, "src"),
		},
	},
	mode: config.isDev ? "development" : "production",
	optimization: {
		//minimize: false,
		//splitChunks: {
		//	chunks: "all",
		//},
	},
	plugins: [new CleanWebpackPlugin()],
};
