const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/test': { page: '/test' },
      // '/readme.md': { page: '/readme' },
      // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    }
  }
})
