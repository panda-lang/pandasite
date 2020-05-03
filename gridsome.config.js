// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pandasite',

  templates: {
      NewsPost: '/news/:path',
      GuidePost: '/guide/:title'
  },

  transformers: {
    remark: {
      plugins: [
        // '@gridsome/remark-prismjs'
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './features/*.md',
        typeName: 'Feature'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './guides/*.md',
        typeName: 'GuidePost'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './news/*.md',
        typeName: 'NewsPost',
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
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'GuidePost',
            indexName: 'GuidePost',
            fields: [ 'id', 'title', 'content' ]
          }
        ],
        searchFields: [ 'title', 'content' ]
      }
    },
    { 
      use: 'gridsome-plugin-pug' 
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: { 
        shouldPurge: false
      }
    },
    { 
      use: 'gridsome-plugin-purgecss' 
    }
  ]
}
