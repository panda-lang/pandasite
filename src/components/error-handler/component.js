export default {
  name: `error-handler`,
  lazy: false,
  functional: true,
  render (h, ctx) {
    if (!!_waffle.err) {
      return h('error')
    }

    return ctx.slots().default
  },
}
