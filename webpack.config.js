const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
devServer: { // devserver modifed to remember browserHistory for react router 
    historyApiFallback: true, // allows the browser history to be stored in order for react router to access pages 
    contentBase: './',
    hot: true
},
entry: "./src/index.js",
output: {
filename: "bundle.[hash].js",
path: path.resolve(__dirname, "dist"),
},
plugins: [
new HtmlWebpackPlugin({
template: "./src/index.html",
}),
],
resolve: {
modules: [__dirname, "orc", "node_modules"],
extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
},
module: {
rules: [
{
test: /\.jsx?$/,
exclude: /node_modules/,
loader: require.resolve("babel-loader"),
},
{
test: /\.css$/,
use: ["style-loader", "css-loader"],
},
{
test: /\.png|svg|jpg|gif$/,
use: ["file-loader"],
},
],
},
};