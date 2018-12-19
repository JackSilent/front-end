var path = require('path');

module.exports = {
    entry: {
        'index':'./src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            },{
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }]
    }
}