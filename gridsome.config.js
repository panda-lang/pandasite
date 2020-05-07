// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pandasite',
  siteUrl: 'https://panda-lang.org/',

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
      use: '@microflash/gridsome-plugin-feed',
      options: {
        contentTypes: [ 'NewsPost' ],

        feedOptions: {
          title: 'Pandasite',
          description: 'panda-lang organization website'
        },

        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/feed.atom'
        },
        json: {
          enabled: true,
          output: '/feed.json'
        },

        maxItems: 25,
        htmlFields: ['content'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,

        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.content
        })
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: { 
        shouldPurge: false
      }
    },
    { 
      use: 'gridsome-plugin-pug' 
    },
    { 
      use: 'gridsome-plugin-purgecss' 
    }
  ]
}
