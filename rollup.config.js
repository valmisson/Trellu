import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import alias from 'rollup-plugin-alias'
import workbox from 'rollup-plugin-workbox-build'
import postcss from 'rollup-plugin-postcss'

// postcss plugins
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,

      emitCss: true,

      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write('public/bundle.css')
      }
    }),

    postcss({
      plugins: [
        postcssImport(),
        postcssPresetEnv({
          stage: 4,
          browsers: 'last 2 versions'
        }),
        cssnano({
          preset: 'default'
        })
      ],
      extract: true,
      extensions: ['.css']
    }),

    // define alias
    alias({
      resolve: ['', '.js', '.svelte'],
      entries: [
        { find: '~', replacement: './' },
        { find: '@', replacement: 'src' },
        { find: '@components', replacement: 'src/components' },
        { find: '@views', replacement: 'src/views' },
        { find: '@datastore', replacement: 'src/datastore/index.js' },
        { find: '@utils', replacement: 'src/utils/index.js' },
        { find: '@store', replacement: 'src/store.js' }
      ]
    }),

    // generate service work
    production && workbox({
      mode: 'generateSW',
      options: {
        globDirectory: 'public',
        globPatterns: [
          '**/*.{html,json,js,css,png,svg,woff,ttf,eot}'
        ],
        swDest: 'public/sw.js',
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: '/index.html',
        navigateFallbackWhitelist: [/^\/b\//]
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),
    commonjs(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}
