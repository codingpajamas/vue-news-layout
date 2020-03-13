module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'NewsOnline',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'sw.js',
      // ...other Workbox options...
    }
  },
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: false
    }
  }
}