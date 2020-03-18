// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Pandasite',
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                // ...global plugins
            ]
        }
    },

    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'posts/**/*.md',
                typeName: 'Post',
                remark: {
                    plugins: [
                        // ...local plugins
                    ]
                }
            }
        },
        {
            use: `gridsome-plugin-netlify-cms`,
            options: {
                publicPath: `/admin`
            }
        },
        {
            use: '@gridsome/plugin-critical',
            options: {
                paths: ['/'],
                width: 1300,
                height: 900
            }
        },
        {
            use: 'gridsome-plugin-pug',
            options: {
                pug: { /* Options for `pug-plain-loader` */},
                pugLoader: { /* Options for `pug-loader` */}
            }
        },
        {
            use: "gridsome-plugin-tailwindcss"
        }
    ],
    chainWebpack(config) {

    }
}
