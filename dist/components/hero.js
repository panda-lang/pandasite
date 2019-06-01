const component = {
  name: `hero`,
  lazy: false,
  props: {
    small: { default: false },
    fixed: { default: false },
    bg:    { default: '' },
    dim:   { default: 0.5 },
    autoHeight: { default: false },
  },
  computed: {
    style () {
      return {
        backgroundImage: this.background,
        backgroundColor: this.background,
        backgroundAttachment: this.attach,
        height: this.autoHeight ? 'auto' : undefined,
      }
    },

    background () {
      const colors = [
        '#',
        'rgba(',
        'hsla(',
        'rgb(',
        'hsl(',
      ]

      if (colors.some(c => this.bg.startsWith(c))) {
        return this.bg
      }

      return `url(${waffle.image(this.bg)})`
    },

    attach () {
      return this.fixed ? 'fixed' : 'local'
    },
  }
}
component.waffle_style = true
component.waffle_template = true
