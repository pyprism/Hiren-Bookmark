var webpack = require('webpack');

module.exports = {
    entry: [
        './app/app.js'
    ],
    output : {
        path: __dirname,
        filename: 'public/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};