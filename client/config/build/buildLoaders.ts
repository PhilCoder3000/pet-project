import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ paths }: BuildOptions): RuleSetRule[] {
  const fontLoader = {
    test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'files/',
        },
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.tsx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          outputPath: 'assets/',
        },
      },
    ],
  };

  const cssLoader = {
    test: /\.css$/i,
    include: paths.src,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, fontLoader, tsLoader, cssLoader];
}
