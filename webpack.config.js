var path = require('path')
var webpack = require ('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './apps/static/js/index.js',
    ],
    output: {
        path: path.resolve('./apps/static/bundles/'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/static/bundles', // Tell Django to use this URL to load packages and not use STATIC_URL + bundle_name
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),  // don't reload if there is an error
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    module: {
        loaders: [
            // we pass the output from babel loader to react-hot loader
            { test: /\.js?$/, exclude: [/node_modules/], loaders: ['babel-loader'], },
            { test: /\.html$/, loader: 'raw' }, 
        ],
    },
    resolve: {
        // modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx']
    }
}

