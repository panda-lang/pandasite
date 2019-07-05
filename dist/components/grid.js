const component = {
  name: `grid`,
  lazy: false,
  css: [],
  js: {},
  props: ['template'],
  functional: true,
  render (h, ctx) {
    const { template } = ctx.props

    const isarray = Array.isArray(template)
    const content = isarray ? template : template.split('|')

    const colnum = content[0]
        .replace(/\s+/g, '')
        .length

    const rownum = content.length

    const areas = 'abcdefghijklmnopqrstuvwxyz'

    return h('div', {
      class: 'grid',
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${colnum}, 1fr)`,
        gridTemplateAreas: content
          .map(f => `"${f.split(/ |/).join(' ')}"`)
          .join(' '),
        }
      },

      ctx.children
        .filter(a => a.data)
        .filter(a => !(a.elm instanceof Comment))
        .map((a, i) => {
          a.data.staticStyle = a.data.staticStyle || {}
          a.data.staticStyle.gridArea = areas[i]
          return a
        })
    )
  }
}
component.waffle_style = true
component.waffle_template = false
