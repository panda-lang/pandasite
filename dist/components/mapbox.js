const component = {
  name: `mapbox`,
  lazy: true,
  css: [
    'https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css',
  ],
  js: {
    mapboxgl: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js',
  },
  props: {
    token: { type: String, required: true },
    styleUrl: { type: String, default: 'mapbox://styles/mapbox/light-v9' },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    zoom: { type: Number, default: 17 },
    marker: { type: Boolean, default: false },
    noScroll: { type: Boolean, default: false },
  },
  data () {
    const id = `map-${Math.round(Math.random() * 0xffffff).toString(16)}`
    return { id, name: 'mapbox' }
  },
  async mounted () {
    this.center = [
      this.lat || 0,
      this.lng || 0,
    ]

    this.$on('imported', () => {
      const { mapboxgl } = this
      mapboxgl.accessToken = this.token

      this.map = new mapboxgl.Map({
        style: this.styleUrl,
        container: this.id,
        zoom: this.zoom,
        center: this.center,
      })

      if (this.marker) {
        this.addMarker()
      }

      if (this.noScroll) {
        this.map.scrollZoom.disable()
      }

      this.lazy()
    })
  },
  methods: {
    addMarker (center, options = {}) {
      const { mapboxgl } = this
      new mapboxgl.Marker({ color: '#00aaff', ...options })
        .setLngLat(center || this.center)
        .addTo(this.map)
    }
  }
}
component.waffle_style = true
component.waffle_template = true
