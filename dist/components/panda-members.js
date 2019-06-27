const component = {
  name: `panda-members`,
  lazy: true,
  props: {
    columns: { type: Number, default: 4 },
    imageSize: { type: Number, default: 55 },
    hiddenUsers: { type: Array, default: [] },
  },
  data () {
    return { users: [] }
  },

  async created () {
    this.users = await waffle.get('https://api.github.com/orgs/panda-lang/members', 'json')
    this.lazy()
  },

  computed: {
    members () {
      return this.users.filter(u => {
        return !this.hiddenUsers.includes(u.login)
      })
    },
    columnWidth () {
      return +(100 / Math.min(this.members.length, this.columns)).toFixed(2)
    }
  }
}
component.waffle_style = true
component.waffle_template = true
