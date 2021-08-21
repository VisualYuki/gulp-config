const path = require("path");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
	devtool: isDev ? "eval-source-map" : false,
	context: path.resolve(__dirname, "src"),
	target: "web",
	entry: {
		pageOne: "./js/pages/index.js",
		pageTwo: "./js/pages/_index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist/js"),
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
	mode: isDev ? "development" : "production",
	optimization: {
		minimize: false,
		splitChunks: {
			chunks: "all",
		},
	},
};
