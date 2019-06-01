const component = {
  name: `icon`,
  lazy: false,
  css: [
    'eva-icons/style/eva-icons.min.css',
  ],
  js: {},
  props: {
    color: { type: String },
  },
  functional: true,
  render (h, ctx) {
    const { text } = ctx.slots().default[0]

    return h('i', {
      'class': {
        eva: true,
        vmiddle: true,
        [`eva-${text}`]: true,
        [ctx.data.staticClass]: true,
      },
      style: {
        color: ctx.color,
      },
    })
  }
}
component.waffle_style = false
component.waffle_template = false
