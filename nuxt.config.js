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
        ]
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