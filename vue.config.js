module.exports = {
  publicPath      : '/marcelo-ai-ml-portfolio/',
  css             : { loaderOptions: { css: { url: false } } },
  configureWebpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test   : require('path').resolve(__dirname, 'node_modules/leader-line/'),
        loader : 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },
}
// vue.config.js
// module.exports = { publicPath: '/marcelo-ai-ml-portfolio/' }
