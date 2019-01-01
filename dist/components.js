(function () {
  'use strict';

  var component = {
    name: `error-handler`,
    lazy: false,
    functional: true,
    render (h, ctx) {
      if (!!_waffle.err) {
        return h('error')
      }

      return ctx.slots().default
    },
  };

  var component$1 = {
    name: `error`,
    lazy: false,
    props: {
      err: {
        type: Object,
        default () {
          return !_waffle.err ? {} : _waffle.err
        },
      },
    },
    data () {
      const faces = [ '(;´༎ຶД༎ຶ`)', '⚆ _ ⚆', '｡゜(｀Д´)゜｡', '¬_¬', '(ʘᗩʘ\')', 'ಥ_ಥ', '(ノಠ益ಠ)ノ彡┻━┻', '>.<' ];
      const face  = faces[Math.random() * faces.length ^ 0];

      return { face }
    },
  };

  var component$2 = {
    name: `limg`,
    lazy: true,
    props: [
      'src',
      'placeholder',
      'scroll',
    ],

    data () {
      return {
        blob: '',
        loaded: false,
      }
    },

    async mounted () {
      const fetch = async () => {
        const { data } = await axios.get(this.src, { responseType: 'blob' });
        this.blob = URL.createObjectURL(data);
        this.loaded = true;
      };

      if (typeof this.scroll === 'undefined') {
        await fetch();
        return this.lazy()
      }

      const observer = new IntersectionObserver(entries => {
        const [ el ] = entries;

        if (!el.isIntersecting) return

        fetch();
        observer.disconnect();
      });

      observer.observe(this.$el);
      this.lazy();
    },
  };



  var components = /*#__PURE__*/Object.freeze({
    errorHandler: component,
    error: component$1,
    limg: component$2
  });

  const styled = {"error":true};

  const resolver = (c, args, resolve) => {
    const component$$1 = components[c];
    const template = args.pop();

    if (template) {
      return resolve({
        template: template.data.replace(/%view%/g, _waffle.view),
        ...component$$1,
      })
    }

    resolve(component$$1);
  };

  Object.keys(components).map(c => {
    const component$$1 = components[c];

    Vue.component(component$$1.name, (resolve, reject) => {
      const promises = [];

      if (styled[c]) {
        promises.push(_waffle.loadStyle(c));
      }

      if (component$$1.lazy) {
        component$$1.methods = component$$1.methods || {};

        component$$1.methods.lazy = function () {
          this.$root.$emit('lazy-remove');
        };

        const bc = component$$1.beforeCreate || function () {};
        component$$1.beforeCreate = function () {
          this.$root.$emit('lazy-add');
          bc.apply(this, arguments);
        };
      }

      if (component$$1.template || component$$1.render) {
        return Promise.all(promises).then(args => {
          resolver(c, args, resolve);
        })
      }

      const request = axios.get(`components/${c}.tmpl`, { responseType: 'text' });
      promises.push(request);

      return Promise.all(promises).then(args => {
        resolver(c, args, resolve);
      })
    });
  });

}());
