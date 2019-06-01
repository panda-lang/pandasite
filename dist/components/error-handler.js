const component = {
  name: `error-handler`,
  lazy: false,
  props: ['err'],
  functional: true,
  render (h, ctx) {
    const { err } = ctx.props
    if (ctx.props.err) {
      return h('error', { props: { err } })
    }

    return ctx.slots().default
  },
}
component.waffle_style = false
component.waffle_template = false
