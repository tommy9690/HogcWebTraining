import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c700eff0 = () => interopDefault(import('../node_modules/@nuxtjs/tailwindcss/lib/ui/pages/index.vue' /* webpackChunkName: "" */))
const _62a04466 = () => interopDefault(import('../pages/hello.vue' /* webpackChunkName: "pages/hello" */))
const _f7bcc396 = () => interopDefault(import('../pages/lesson2.vue' /* webpackChunkName: "pages/lesson2" */))
const _5739edcd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_tailwind",
    component: _c700eff0,
    name: "_tailwind"
  }, {
    path: "/hello",
    component: _62a04466,
    name: "hello"
  }, {
    path: "/lesson2",
    component: _f7bcc396,
    name: "lesson2"
  }, {
    path: "/",
    component: _5739edcd,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
