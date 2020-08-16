export default {
  methods: {
    social (name, content) {
      return {
        key: name,
        name,
        content
      }
    },
    description (post, length) {
      let content = post.content

      if (post.description != '') {
        content = post.description
      }

      content = content
        //.replace(/<([^p>]+?)([^h*>]*?)>(.*?)<\/\1>/ig, '')
        //.match(/<p>(.*?)<\/p>/g)[0]
        .replace(/<h.*>.*?<\/h.*>/gi, '')
        .replace(/(<([^>]+)>)/gi, '')

      if (content.length < length) {
        return content
      }

      return content.substring(0, length) + '...'
    }
  }
}
