const path = require('path');
const webpack = require('webpack');

module.exports = {
    plugins: [
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'walletlink.bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer")
        }
    },
};