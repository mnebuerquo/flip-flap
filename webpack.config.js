var path = require('path')

module.exports = {
    context: __dirname,
    entry: {
        'reactIndex': './apps/static/js/index.js',
    },
    module: {
        loaders: [{
            test: /\.js?$/, 
            exclude: [/node_modules/], 
            loader: ['babel-loader'],
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve('./apps/static/bundles/'),
        publicPath: '/js',
        filename: 'bundle.js',
    },
}

