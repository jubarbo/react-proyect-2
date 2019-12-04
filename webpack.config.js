const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                loader: [
                  MiniCSSExtractPlugin.loader,
                  "css-loader"
                ]
              },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            { 
                test: /\.scss$/, 
                loader: [
                  MiniCSSExtractPlugin.loader,
                  "css-loader",
                  'sass-loader'
                ]
              },
              {
                  test: /\.(png|gif|jpg)$/,
                  use: [
                      {
                          'loader': 'file-loader',
                          options: {
                              name: 'assets/[hash].[ext]'
                          }
                      }
                  ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: "estilos.css",
        }), 
    ]
};