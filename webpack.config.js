const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: 'web',
    devServer: {
        port: '9500', // port of dev server
        static: ['./public'], // the static file webpack should serve
        open: true, // open browser on dev server start
        hot: true, // Hot Module Replacement
        liveReload: true // liveReload as the name suggests
    },
    resolve: {
        /** "extensions"
         * if multiple files have same name resolve the one with the
         * extension listed first in the array and skip the rest.
         */
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        /** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
         * file inside of a require()/import statement, use the babel-loader to transform it before you 
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
         * being searched"
         */
        rules: [
            {
                test: /\.(js|jsx)$/, // kind of file extension this rule should look for and apply 
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};