export { default as HeaderComponent } from '../../components/HeaderComponent.vue'
export { default as Links } from '../../components/Links.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyHeaderComponent = import('../../components/HeaderComponent.vue' /* webpackChunkName: "components/HeaderComponent" */).then(c => c.default || c)
export const LazyLinks = import('../../components/Links.vue' /* webpackChunkName: "components/Links" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
