const webpack = require('webpack');
const path = require('path');
/* helps to Work with Directories and Paths */
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const sourcePath = path.join(__dirname, './client'); // Where is the Source Code
const staticsPath = path.join(__dirname, './static'); // Where to put my bundle file
/* Saving two File Locations */

var webpackConfig = {
    devtool: 'eval-source-map',
    /*
       source-mapping to help map the minimized files to the original source of the file, helpful in debugging
       There are different kinds of source maps, Few are help ful in Develpomnent and few in production
       https://webpack.js.org/configuration/devtool/ */
    context: sourcePath,
    /* By Default Webpack Looks for Current Director while picking Path above,
     if you want to run webpack in different directory other than Current, this Helpds */
    entry: {
        js: './index.js',
    },
    /* This is the Entry Point of the Webpack */
    watchOptions: {
        poll: true
    },
    /* helps During the Development to Watch for any Changes */
    output: {
        path: staticsPath,
        filename: 'bundle.js',
    },
    /* Bundles and places to the path */
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ],
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
        test: /\.(png|jpg|gif|html)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ],
    },
    /* All the Tranpilation Goes in here */
    devServer: {
        contentBase: './client',
        /* This is same as context, if you buildng on
        different directory and have serve running on Different directory specify here*/
        historyApiFallback: true,
        /* 404 Responses to Load incase of endpoint does not resolve*/
        port: 3000,
        /* Port to run the server localhost:3000*/
        inline: true,
        /* This adds the webpack-dev-server client entry point to the webpack configuration. */
        hot: true
    /* This adds the HotModuleReplacementPlugin to the webpack configuration */
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        }),
        /* open the browser Immediately when build Succeeds */
        new webpack.HotModuleReplacementPlugin()
    /* Hot Reload without Browser Refresh */
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        /* What to Resolve */
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ]
    /* Where to Look for list of directories in an Array */
    }
/* Resolve helps the Webpack where to look for these files */
}

module.exports = webpackConfig
