export default {
  name: `limg`,
  lazy: true,
  props: [
    'src',
    'placeholder',
    'scroll',
  ],

  data () {
    return {
      blob: '',
      loaded: false,
    }
  },

  async mounted () {
    const fetch = async () => {
      const { data } = await axios.get(this.src, { responseType: 'blob' })
      this.blob = URL.createObjectURL(data)
      this.loaded = true
    }

    if (typeof this.scroll === 'undefined') {
      await fetch()
      return this.lazy()
    }

    const observer = new IntersectionObserver(entries => {
      const [ el ] = entries

      if (!el.isIntersecting) return

      fetch()
      observer.disconnect()
    })

    observer.observe(this.$el)
    this.lazy()
  },
}
