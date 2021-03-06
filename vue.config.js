const path = require('path');
const { name } = require('./package');

const port = 7002; // dev port

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': '*',
      'Cache-Control': 'no-cache'
    },
  },
  // chainWebpack(config){
  //     config.output.filename('[name].[hash].js').end();
  // },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  },
};
