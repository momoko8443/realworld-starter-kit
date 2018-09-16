const path = require('path');

module.exports = [
    {
        output:{
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'umd'
        },
        entry: './src/entry.js',
        devtool: 'source-map',
        mode: 'development',
        module:{
            rules:[
                {
                    test: /\.js$/,
                    use: ["source-map-loader"],
                    enforce: "pre"
                }
            ]
        }
    },
    {
        output:{
            
            filename: 'service.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'umd'
        },
        entry: './src/api.service.js',
        devtool: 'source-map',
        mode: 'development'
    }
];