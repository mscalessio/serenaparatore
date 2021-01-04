import { SET_WORK_POSTS } from './mutations.type'

export const state = () => ({
  blogPosts: [],
  works: [],
})

export const mutations = {
  [SET_WORK_POSTS](state, list) {
    state.works = list
  },
}

export const actions = {
  getPosts(files) {
    return files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  async nuxtServerInit({ commit }) {
    // Blog collection type
    // let blogFiles = await require.context(
    //   '~/assets/content/blog/',
    //   false,
    //   /\.json$/
    // )

    // await commit(SET_BLOG_POSTS, actions.getPosts(blogFiles))

    // Project collection type
    const workFiles = await require.context(
      '~/assets/content/works/',
      false,
      /\.json$/
    )
    await commit(SET_WORK_POSTS, actions.getPosts(workFiles))

    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  },
}
