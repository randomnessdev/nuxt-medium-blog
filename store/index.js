export const state = () => ({
  posts: {},
  error: {}
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_ERROR(state, error) {
    state.error = error
  },
}

export const actions = {
  async fetchPosts({ commit }) {
    try {
      let posts = await this.$http.$get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@randomnessdev')
      posts = posts.items
      commit('SET_POSTS', posts)
    } catch (e) {
      const error = 'Please create an Idea post'
      commit('SET_ERROR', error);
    }
  }
}
