const path = require("path");

module.exports = {
	context: `${__dirname}/src/js`,
	resolve: {
		root: [
			path.resolve(__dirname, "src/js"),
		],
		extensions: ["", ".js"],
	},
	entry: {
		app: ["core/app.jsx"],
	},
	output: {
		path: `${__dirname}/dist`,
		filename: "app.bundle.js",
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}]
	},
	plugins: [],
};
