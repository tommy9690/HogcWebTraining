export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as Joke } from '../../components/Joke.vue'
export { default as SearchJokes } from '../../components/SearchJokes.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/AppHeader" */).then(c => c.default || c)
export const LazyJoke = import('../../components/Joke.vue' /* webpackChunkName: "components/Joke" */).then(c => c.default || c)
export const LazySearchJokes = import('../../components/SearchJokes.vue' /* webpackChunkName: "components/SearchJokes" */).then(c => c.default || c)
