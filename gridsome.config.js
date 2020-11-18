// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  siteName: 'Gridsome',
  alias: {
    "@": resolve('src'),
    "@pages": resolve('/src/pages'),
  },
  plugins: [{
    use: '@gridsome/source-strapi',
    options: {
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['blog', 'Tag', 'followings', 'followers', 'project'],
      singleTypes: ['general'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      // loginData: {
      //   identifier: '',
      //   password: ''
      // }
    }
  }
  ]
}
