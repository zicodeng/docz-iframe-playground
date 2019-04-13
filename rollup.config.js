import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: './src/IFramePlayground.jsx',
  output: { file: './dist/IFramePlayground.min.js', format: 'esm' },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    commonjs(),
    babel({
      presets: [
        '@babel/preset-react',
        ['@babel/preset-env', { modules: false }],
      ],
      plugins: ['@babel/plugin-proposal-class-properties'],
      babelrc: false,
    }),
    terser(),
    postcss({
      modules: true,
    }),
  ],
  external: Object.keys(pkg.peerDependencies),
};
