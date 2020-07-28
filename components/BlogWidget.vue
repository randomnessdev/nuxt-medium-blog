<template>
  <div class="widget-container">
    <nuxt-link v-for="post in $store.state.posts" :key="post.id" :to="'/posts/' + Sanitize(post.title)">
      <div class="blog-post">
        <img :src="post.thumbnail" :alt="post.title" />
        <h3>{{ post.title }}</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "blog-widget",
};
</script>

<style lang="sass">
.widget-container
  margin-top: 2em
  a
    text-decoration: none
    color: inherit
    &:hover
      h3
        color: #3b8070
.blog-post
  color: #353535
  display: flex
  align-items: center
  margin-bottom: .5em
  img
    min-width: 4em
    max-width: 4em
    border-radius: 50%
    height: 4em
    margin-right: 1em
    object-fit: cover
    background: white
    background-size: cover
    text-indent: 100%
    white-space: nowrap
    overflow: hidden
    background: rgba(black, .5)
h2
  margin: 0
</style>
