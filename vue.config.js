const { defineConfig } = require('@vue/cli-service')

const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { TDesignResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
      less:'less'
    },
    plugins:[
      AutoImport({
        resolvers: [TDesignResolver()],
      }),
      Components({
        resolvers: [TDesignResolver()],
      }),
    ]
  }
})


