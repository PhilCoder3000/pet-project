import path from 'path';
import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    modules: [paths.src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  }
}