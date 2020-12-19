import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e2d92fa = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6347f6f8 = () => interopDefault(import('../pages/Jokes/index.vue' /* webpackChunkName: "pages/Jokes/index" */))
const _12518522 = () => interopDefault(import('../pages/Jokes/_id/index.vue' /* webpackChunkName: "pages/Jokes/_id/index" */))
const _5de56dbf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _3e2d92fa,
    name: "about"
  }, {
    path: "/Jokes",
    component: _6347f6f8,
    name: "Jokes"
  }, {
    path: "/Jokes/:id",
    component: _12518522,
    name: "Jokes-id"
  }, {
    path: "/",
    component: _5de56dbf,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
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
