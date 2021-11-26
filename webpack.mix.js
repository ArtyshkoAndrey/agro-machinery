// eslint-disable-next-line no-undef
const path = require('path')
// eslint-disable-next-line no-undef
const fs = require('fs-extra')
// eslint-disable-next-line no-undef
const mix = require('laravel-mix')
// eslint-disable-next-line no-undef
require('laravel-mix-versionhash')


// eslint-disable-next-line no-undef
const publicDir = path.resolve(__dirname, './public')

fs.removeSync(path.join(publicDir, 'dist'))
fs.removeSync(path.join(publicDir, 'user'))
fs.removeSync(path.join(publicDir, 'admin_spa'))

mix
  .js('resources/js/admin/app.js', 'public/admin_spa/dist/js').vue({version: 2})
  .sass('resources/scss/admin/app.scss', 'public/admin_spa/dist/css')

  .js('resources/js/user/app.js', 'public/user/dist/js').vue({version: 2})
  .sass('resources/scss/user/app.scss', 'public/user/dist/css')

  .disableNotifications()

if (mix.inProduction()) {
  // mix.versionHash()
  mix.sourceMaps()
} else {
  mix.sourceMaps()
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      // eslint-disable-next-line no-undef
      '~': path.join(__dirname, './resources/js')
    }
  },
  output: {
    chunkFilename: 'dist/js/[chunkhash].js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, './public')
  }
})

mix.then(() => {
  if (mix.inProduction()) {
    // process.nextTick(() => publishAseets())
  }
})

mix.browserSync('http://localhost/')
