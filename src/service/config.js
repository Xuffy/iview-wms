export default {
  env: {
    local: {
      api: 'http://store.test.tailorx.cn/api/v2'
    },
    develop: {
      api: 'http://store.dev.tailorx.cn/api/v2'
    },
    test: {
      api: 'http://store.test.tailorx.cn/api/v2'
    },
    production: {
      api: 'http://store.tailorx.cn/api/v2'
    }
  }[process.env.NODE_ENV]
}
