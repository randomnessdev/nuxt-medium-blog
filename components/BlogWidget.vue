<template>
  <div class="widget-container">
    <nuxt-link v-for="post in $store.state.posts" :key="post.id" :to="'/posts/' + Sanitize(post.title)">
      <div class="blog-post">
        <img :src="post.thumbnail ? post.thumbnail : '~/assets/img/blank.png'" :alt="post.title" />
        <h2>{{ post.title }}</h2>
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
.blog-post
  color: #353535
  display: flex
  align-items: center
  img
    min-width: 4em
    max-width: 4em
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
