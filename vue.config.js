module.exports = {
  configureWebpack: {
    devServer: {
      port: 8000,
      // open: true,
      host:"localhost",
      proxy: {
        '/api': {
          target: 'http://47.97.156.130:8080',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/api': '/'
          }
        }
      }
    }
  }
};
