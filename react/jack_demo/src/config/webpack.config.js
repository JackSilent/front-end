var path = require('path');

module.exports = {
    entry: {
        'index':'./src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../dist/'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    "plugins": [
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": "css" // `style: true` 会加载 less 文件
                        }]
                    ]
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            },{
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }]
    },
    devServer: {
        historyApiFallback: true,
        inline:true,
        contentBase: path.join(__dirname, "../../dist"),
        // compress: true,
        port: 9000
    }
}