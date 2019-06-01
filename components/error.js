const component = {
  name: `error`,
  lazy: false,
  props: ['err'],
  data () {
    const faces = [ '(;´༎ຶД༎ຶ`)', '⚆ _ ⚆', '｡゜(｀Д´)゜｡', '¬_¬', '(ʘᗩʘ\')', 'ಥ_ಥ', '(ノಠ益ಠ)ノ彡┻━┻', '>.<' ]
    const face  = faces[Math.random() * faces.length ^ 0]

    return { face }
  },
}
component.waffle_style = true
component.waffle_template = true
