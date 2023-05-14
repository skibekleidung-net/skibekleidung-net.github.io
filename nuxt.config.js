import config from "./assets/data/config.json"

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: config.title,
    htmlAttrs: {
      lang: config.seo.htmlLang
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css' },
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' }
    ],
    script: [
      // { type: 'text/javascript', src: '/assets/js/easing/easing.js', body: true },
      // { type: 'text/javascript', src: 'https://code.jquery.com/jquery-3.4.1.min.js', body: true },
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js', integrity: "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=", crossorigin: "anonymous", body: false },
      { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', body: true },
      { type: 'text/javascript', src: '/assets/js/main.js', body: true },
      {
        hid: 'snipcart',
        innerHTML: `
                window.SnipcartSettings = {
                    publicApiKey:
                      "${config.snipcart.apiKeys.live}",
                    loadStrategy: "on-user-interaction",
                    "currency": "eur",
                  };
              
                  (function () {
                    var c, d;
                    (d = (c = window.SnipcartSettings).version) != null ||
                      (c.version = "3.0");
                    var s, S;
                    (S = (s = window.SnipcartSettings).timeoutDuration) != null ||
                      (s.timeoutDuration = 2750);
                    var l, p;
                    (p = (l = window.SnipcartSettings).domain) != null ||
                      (l.domain = "cdn.snipcart.com");
                    var w, u;
                    (u = (w = window.SnipcartSettings).protocol) != null ||
                      (w.protocol = "https");
                    var m, g;
                    (g = (m = window.SnipcartSettings).loadCSS) != null || (m.loadCSS = !0);
                    var y =
                        window.SnipcartSettings.version.includes("v3.0.0-ci") ||
                        (window.SnipcartSettings.version != "3.0" &&
                          window.SnipcartSettings.version.localeCompare("3.4.0", void 0, {
                            numeric: !0,
                            sensitivity: "base",
                          }) === -1),
                      f = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
                    window.LoadSnipcart = o;
                    document.readyState === "loading"
                      ? document.addEventListener("DOMContentLoaded", r)
                      : r();
                    function r() {
                      window.SnipcartSettings.loadStrategy
                        ? window.SnipcartSettings.loadStrategy === "on-user-interaction" &&
                          (f.forEach(function (t) {
                            return document.addEventListener(t, o);
                          }),
                          setTimeout(o, window.SnipcartSettings.timeoutDuration))
                        : o();
                    }
                    var a = !1;
                    function o() {
                      if (a) return;
                      a = !0;
                      let t = document.getElementsByTagName("head")[0],
                        n = document.querySelector("#snipcart"),
                        i = document.querySelector(
                          'src[src^="'
                            .concat(window.SnipcartSettings.protocol, "://")
                            .concat(window.SnipcartSettings.domain, '"][src$="snipcart.js"]')
                        ),
                        e = document.querySelector(
                          'link[href^="'
                            .concat(window.SnipcartSettings.protocol, "://")
                            .concat(
                              window.SnipcartSettings.domain,
                              '"][href$="snipcart.css"]'
                            )
                        );
                      n ||
                        ((n = document.createElement("div")),
                        (n.id = "snipcart"),
                        n.setAttribute("hidden", "true"),
                        document.body.appendChild(n)),
                        h(n),
                        i ||
                          ((i = document.createElement("script")),
                          (i.src = ""
                            .concat(window.SnipcartSettings.protocol, "://")
                            .concat(window.SnipcartSettings.domain, "/themes/v")
                            .concat(window.SnipcartSettings.version, "/default/snipcart.js")),
                          (i.async = !0),
                          t.appendChild(i)),
                        !e &&
                          window.SnipcartSettings.loadCSS &&
                          ((e = document.createElement("link")),
                          (e.rel = "stylesheet"),
                          (e.type = "text/css"),
                          (e.href = ""
                            .concat(window.SnipcartSettings.protocol, "://")
                            .concat(window.SnipcartSettings.domain, "/themes/v")
                            .concat(
                              window.SnipcartSettings.version,
                              "/default/snipcart.css"
                            )),
                          t.prepend(e)),
                        f.forEach(function (v) {
                          return document.removeEventListener(v, o);
                        });
                    }
                    function h(t) {
                      !y ||
                        ((t.dataset.apiKey = window.SnipcartSettings.publicApiKey),
                        window.SnipcartSettings.addProductBehavior &&
                          (t.dataset.configAddProductBehavior =
                            window.SnipcartSettings.addProductBehavior),
                        window.SnipcartSettings.modalStyle &&
                          (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle),
                        window.SnipcartSettings.currency &&
                          (t.dataset.currency = window.SnipcartSettings.currency),
                        window.SnipcartSettings.templatesUrl &&
                          (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl));
                    }
                  })();
                `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },

  generate: {
    dir: 'docs'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    // '@static/assets/css/animate/animate.min.css',
    // '@static/assets/css/bootstrap.min.css',
    '@static/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/jsonld.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-purgecss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@/modules/sitemapRouteGenerator'
  ],

  purgeCSS: {
    // your settings here
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Sitemap
  sitemap: {
    hostname: config.hostname,
    gzip: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/assets/',
    parallel: true,
    cache: true,
    hardSource: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },

  image: {
    staticFilename: '[publicPath]/images/[name][ext]',
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: config.imageQuality,
        }
      },
      productThumbnail: {
        modifiers: {
          format: 'webp',
          quality: config.imageQuality,
          width: 407,
          height: 229
        }
      },
      productHeader: {
        modifiers: {
          format: 'webp',
          quality: config.imageQuality,
          width: 612,
          height: 400
        }
      },
      footerThumbnail: {
        modifiers: {
          format: 'webp',
          quality: config.imageQuality,
          width: 58,
          height: 58
        }
      },
      seventyFourty: {
        modifiers: {
          format: 'webp',
          quality: config.imageQuality,
          width: 70,
          height: 40
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/assets/'
  },

  googleFonts: {
    display: 'swap',
    base64: true,
    overwriting: true,
    download: true,
    families: {
      Heebo: {
        wght: [400, 500, 600]
      },
      Nunito: {
        wght: [600, 700, 800]
      },
      // Roboto: true,
      // 'Josefin+Sans': true,
      // Lato: [100, 300],
      // Raleway: {
      //     wght: [100, 400],
      //     ital: [100]
      // },
    }
  },
  router: {
    trailingSlash: true
  }
}