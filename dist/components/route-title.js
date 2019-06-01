const component = {
  name: `route-title`,
  props: [],
  render () {
    const title = this.$slots.default[0]
    const app = waffle.app
    document.title = !title || !title.text ? app : `${title.text} | ${app}`
    return false
  }
}
component.waffle_style = false
component.waffle_template = false
