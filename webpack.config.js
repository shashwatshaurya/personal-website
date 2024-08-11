const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
        publicPath: '/' // specifies the location from where the browser will fetch resources, can be a url, cdn or path to another folder under the root directory ('public' in our case) or the root itself (as used here - '/')
    },
    target: 'web',
    devServer: {
        port: '9500', // port of dev server
        historyApiFallback: true, // if route is not found essentially for deeper level routes, then this defaults to index.html
        static: path.resolve(__dirname, 'public'), // the static file webpack should serve
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
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};