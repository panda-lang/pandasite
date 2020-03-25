export default [
  {
    path: "/support/",
    component: () => import(/* webpackChunkName: "page--src-pages-support-vue" */ "J:\\Java\\Panda\\pandasite\\src\\pages\\Support.vue")
  },
  {
    path: "/page-not-found/",
    component: () => import(/* webpackChunkName: "page--src-pages-page-not-found-vue" */ "J:\\Java\\Panda\\pandasite\\src\\pages\\PageNotFound.vue")
  },
  {
    path: "/news/",
    component: () => import(/* webpackChunkName: "page--src-pages-news-vue" */ "J:\\Java\\Panda\\pandasite\\src\\pages\\News.vue")
  },
  {
    path: "/guide/",
    component: () => import(/* webpackChunkName: "page--src-pages-guide-vue" */ "J:\\Java\\Panda\\pandasite\\src\\pages\\Guide.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src-pages-docs-vue" */ "J:\\Java\\Panda\\pandasite\\src\\pages\\Docs.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "J:\\Java\\Panda\\pandasite\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "J:\\Java\\Panda\\pandasite\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "J:\\Java\\Panda\\pandasite\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

