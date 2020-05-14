export default {
    methods: {
        toDescriptionPreview(post, length) {
            if (post.description != '') {
                return post.description
            }
    
            let content = post.content
                //.replace(/<([^p>]+?)([^h*>]*?)>(.*?)<\/\1>/ig, '')
                //.match(/<p>(.*?)<\/p>/g)[0]
                .replace(/<h.*>.*?<\/h.*>/ig, '')
                .replace(/(<([^>]+)>)/gi, '')
    
            if (content.length < length) {
                return content
            }
    
            return content.substring(0, length) + '...'
        }
    }
}