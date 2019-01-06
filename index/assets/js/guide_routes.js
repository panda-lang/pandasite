const guideEntries = {
  'Getting Started': 'index/assets/guide/getting_started.md',
}

const guideArticles = []
for (const i in guideEntries) {
  guideArticles.push({
    title: i,
    contentUrl: guideEntries[i],
    href: `/guide/${slugify(i)}`,
  })
}

routes['/guide/'] = {
  redirect: guideArticles[0].href,
}

for (const entry of guideArticles) {
  routes[entry.href] = {
    templatePath: 'templates/guide',
    async created () {
      const { data } = await axios.get(entry.contentUrl, { responseType: 'text' })
      this.content = marked(data)
    },
    data () {
      return { articles: guideArticles, content: '' }
    },
    computed: {
      article () {
        return {
          ...entry,
          content: this.content,
        }
      }
    }
  }
}
