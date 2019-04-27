var webpackMerge = require('webpack-merge')
module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      if (config.optimization) {
        config.optimization = webpackMerge({
          mangleWasmImports: true,
          removeEmptyChunks: true,
          mergeDuplicateChunks: true,
          occurrenceOrder: true,
          removeAvailableModules: true,
          namedChunks: true,
          chunkIds: 'size',
          splitChunks: {
            automaticNameDelimiter: '.',
            minSize: 20000,
            maxSize: 50000,
            name: false
          },
          runtimeChunk: {
            name: entrypoint => `manifest.${entrypoint.name}`
          }
        }, config.optimization)
      }
      if (config.output) {
        config.output.chunkFilename = 'js/chunk-[name]-[contenthash].js'
        config.output.filename = 'js/chunk-[name]-[contenthash].js'
      }

      let includesPlugins = config.plugins.filter(item => item.__pluginName !== 'named-chunks')


      let extraceCSSPlugin = includesPlugins.find(item => item.__pluginName === 'extract-css')
      extraceCSSPlugin.options.chunkFilename = 'css/chunk-[name]-[contenthash].css'
      extraceCSSPlugin.options.filename = 'css/chunk-[name]-[contenthash].css'

      let htmlWebpackPlugins = includesPlugins.filter(item => item.__pluginName.indexOf('html-') === 0)
      if (htmlWebpackPlugins) {
        htmlWebpackPlugins.forEach(item => {
          let entryChunk = item.__pluginName.replace('html-', '')
          if (item.options) {
            item.options.chunks = [entryChunk]
            item.options.minify.minifyCSS = true
            item.options.minify.minifyJS = true
            item.options.minify.removeComments = false
          }
        })
      }
      config.plugins = includesPlugins
    } else {
      // 为开发环境修改配置...
    }
  },
  pages: {
    app: {
      entry: 'src/main.js',
      filename: 'index.html',
      template: 'public/index.html'
    },
    richText: {
      entry: './src/newby-shows-modules/rich-text-page/main-rich-text.js',
      filename: 'mobile-rich-text-page.html',
      template: 'src/newby-shows-modules/rich-text-page/mobile-rich-text-page.html'
    }
  }
}
