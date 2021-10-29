const path = require("path");
const config = require("./gulp/config");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	devtool: config.isDev ? "eval-source-map" : false,
	context: path.resolve(__dirname, "src"),
	target: "web",
	entry: {
		//common: "./js/common/common.js",
		"index-page": "./js/pages/index.js",
		"about-page": "./js/pages/about.js",
	},
	output: {
		path: path.resolve(__dirname, `${config.out.baseDir}/js`),
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		//alias: {
		//	"@js": path.resolve(__dirname, "src/js/"),
		//	"@less": path.resolve(__dirname, "src/less/"),
		//	"@assets": path.resolve(__dirname, "src/assets/"),
		//	"@src": path.resolve(__dirname, "src"),
		//},
	},
	mode: config.isDev ? "development" : "production",
	optimization: {
		minimize: config.isDev ? false : true,
		//splitChunks: {
		//	chunks: "all",
		//},
	},
	plugins: [
		new CleanWebpackPlugin(),
		//new BundleAnalyzerPlugin({
		//	openAnalyzer: false,
		//}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					//options: {
					//	presets: ["@babel/preset-env"],
					//},
				},
			},
		],
	},
};
