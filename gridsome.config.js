// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pandasite',
  plugins: [
    { 
      use: 'gridsome-plugin-pug' },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: { 
        shouldPurge: false
      }
    },
    { 
      use: 'gridsome-plugin-purgecss' 
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/news/*.md',
        typeName: 'Post',
        route: '/news/:title',
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/transformer-remark'
    }
  ]
}
