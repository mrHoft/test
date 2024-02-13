import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isProduction = process.env.NODE_ENV === 'production'
console.log('Production mode: ', isProduction)

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: './src/app.js',
    styles: './src/styles.scss',
  },
  devServer: {
    // open: true,
    compress: true,
    static: './dist',
    // https: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/template/*.tmpl', to: 'template/[name][ext]' },
        { from: 'public/*.ogg', to: 'public/[name][ext]' },
        { from: 'public/*.png', to: '[name][ext]' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ogg|mp3)$/i,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.js'],
  },
}

export default config
