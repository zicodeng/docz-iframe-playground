import { css } from 'docz-plugin-css';

export default {
  dest: 'docs',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      },
    }),
  ],
};
