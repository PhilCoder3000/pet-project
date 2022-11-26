import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ mode, paths }: BuildOptions): RuleSetRule[] {
  const isDev = mode === 'development';

  const cssLoader = {
    test: /\.css$/i,
    include: paths.src,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [tsLoader, cssLoader];
}
