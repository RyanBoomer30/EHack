const path = require('path');

module.exports = {
    entry: './assets/scripts/index.js',
    output: {
        'path': path.resolve(__dirname, 'website', 'static', 'website'),
        'filename': 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '...'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}