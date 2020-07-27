export const state = () => ({
  posts: {},
  error: {}
})

export const mutations = {
  SET_IDEAS(state, posts) {
    state.posts = posts
  },
  SET_ERROR(state, error) {
    state.error = error
  },
}

export const actions = {
  async fetchIdeas({ commit }) {
    try {
      let blogPosts = await this.$http.$get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@randomnessdev')
      blogPosts = blogPosts.items
      commit('SET_IDEAS', blogPosts)
    } catch (e) {
      const error = 'Please create an Idea post'
      commit('SET_ERROR', error);
    }
  }
}
