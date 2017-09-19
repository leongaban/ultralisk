import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import chalk from 'chalk';

const ultralisk = path.resolve(__dirname, 'ultralisk');
const pub = path.resolve(__dirname, 'public');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/public/index.html`,
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'rights_manager.css',
  disable: false,
  allChunks: true
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([{ from: 'public/static', to: 'static' }]);

const PATHS = {
  pub,
  build: ultralisk
};

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const developmentPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
});

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const base = {
  entry: [
    PATHS.pub
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: ultralisk
        })
      }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '/public')]
  }
};

const developmentConfig = {
  devServer: {
    publicPath: '',
    contentBase: path.join(__dirname, 'ultralisk'),
    quiet: true,
    inline: true,
    compress: true,
    stats: 'errors-only',
    open: false
  },
  devtool: 'cheap-module-inline-source-map',
  plugins: [
    CopyWebpackPluginConfig,
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
    developmentPlugin
  ]
};

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    CopyWebpackPluginConfig,
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
    productionPlugin
  ]
};

/* eslint-disable no-console */
console.log(`${chalk.magenta('🤖 ')} ${chalk.green('npm run:')} ${chalk.red(LAUNCH_COMMAND)}`);
/* eslint-enable */

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
);
