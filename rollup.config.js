import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: './index.js',
  output: { file: 'dist/index.min.js', format: 'esm' },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-react',
        ['@babel/preset-env', { modules: false }],
      ],
      plugins: ['@babel/plugin-proposal-class-properties'],
      babelrc: false,
    }),
    terser(),
    postcss({
      extract: true,
    }),
  ],
  external: Object.keys(pkg.peerDependencies),
};
