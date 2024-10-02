import path from 'node:path'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import terser from '@rollup/plugin-terser'
import alias from '@rollup/plugin-alias'
import { generateSW } from 'rollup-plugin-workbox'
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
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !production,

        // we'll extract any component CSS out into
        // a separate file — better for performance
        css: 'injected'
      },

      emitCss: false,
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
        { find: '~', replacement: path.resolve(__dirname, './') },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@views', replacement: path.resolve(__dirname, 'src/views') },
        { find: '@datastore', replacement: path.resolve(__dirname, 'src/datastore/index.js') },
        { find: '@utils', replacement: path.resolve(__dirname, 'src/utils/index.js') },
        { find: '@store', replacement: path.resolve(__dirname, 'src/store.js') }
      ]
    }),

    // generate service work
    production && generateSW({
      mode: 'generateSW',
      globDirectory: 'public',
      globPatterns: [
        '**/*.{html,json,js,css,png,svg,woff,ttf,eot}'
      ],
      swDest: 'public/sw.js',
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/index.html',
      navigateFallbackAllowlist: [/^\/b\//]
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      exportConditions: ['svelte'],
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
