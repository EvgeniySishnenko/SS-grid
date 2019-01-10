const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');



const config = {
    devtool: 'source-map',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ["@babel/preset-env"]}
                    }
                ]
            }
            
            
        
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $:"jquery/dist/jquery.min.js",
            jQuery:"jquery /dist/ jquery.min.js",
    "window.jQuery":"jquery/dist/jquery.min.js"
      })

    ]
};

module.exports = config;