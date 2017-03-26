var path = require('path')

module.exports = {
    context: __dirname,
    entry: {
        'index': './apps/static/js/index.js',
    },
    module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: [
					'es2015', 'react', 'stage-0',
				],
			}
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

