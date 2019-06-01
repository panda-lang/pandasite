const waffle = {
  styles: document.createElement('style'),

  async get (url, type = 'text', options = {}) {
    if (options.headers && !(options.headers instanceof Headers)) {
      const { headers } = options
      options.headers = new Headers()
      for (const [key, value] of Object.entries(headers)) {
        options.headers.append(key, value)
      }
    }

    const response = await fetch(url, options)
    return response[type]()
  },

  async post (url, data, type = 'text', options = {}) {
    if (options.headers && !(options.headers instanceof Headers)) {
      const { headers } = options
      options.headers = new Headers()
      for (const [key, value] of Object.entries(headers)) {
        options.headers.append(key, value)
      }
    }


    const response = await fetch(url, { method: 'POST', body, ...options })
    return response[type]()
  },

  ajax: {
    async get (url, headers) {
      return waffle.ajax.request('get', url, undefined, headers)
    },

    async post (url, data, headers) {
      const body = new FormData()
      for (const [key, value] of Object.entries(data)) {
        body.append(key, value)
      }

      return waffle.ajax.request('post', url, body, headers)
    },

    async request (method, url, body, headers = {}) {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)

      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value)
      }

      return new Promise((resolve, reject) => {
        xhr.onerror = () => {
          return resolve({ success: false, status: xhr.status, statusText: xhr.statusText, response: xhr.response })
        }

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            return resolve({ success: true, status: xhr.status, statusText: xhr.statusText, response: xhr.response })
          }

          xhr.onerror()
        }

        xhr.send(body)
      })

    },
  },

  async import (url, ...args) {
    if (url.endsWith('.css')) {
      if (this.styles[url]) return
      this.styles[url] = true

      if (!url.startsWith('http')) {
        url = `https://cdn.jsdelivr.net/npm/${url}`
      }

      const style = document.createElement('link')
      style.rel = 'stylesheet'
      style.href = url
      document.head.appendChild(style)
      return style
    }

    if (url.startsWith('http')) {
      return System.import(url, ...args)
    }

    return System.import(`https://cdn.jsdelivr.net/npm/${url}`, ...args)
  },

  async loadStyle (component) {
    if (this.styles[component]) return
    this.styles[component] = true

    const data = await this.get(`components/styles/${component}.css`)
    this.styles.innerHTML += data
  },

  asset (url) {
    if (url.startsWith('http')) {
      return url
    }

    if (url.startsWith('/')) {
      return url.slice(1)
    }

    return `${waffle.view}/assets/${url}`
  },

  image (url) {
    if (url.startsWith('http')) {
      return url
    }

    if (url.startsWith('/')) {
      return url.slice(1)
    }

    return waffle.asset(`img/${url}`)
  },
}

document.head.appendChild(waffle.styles)
