<template>
  <section class="post-container">
    <!-- Slices block component -->
    <h1>{{ post.title }}</h1>
    <div class="date-share">
      <div class="date">{{ post.pubDate }}</div>
      <a :href="link" class="read-link" target="_blank">Read on Medium</a>
      <span class="divider"> | </span>
      <SocialShare :post="post" />
    </div>
    <article v-html="post.content" />
  </section>
</template>

<script>
import SocialShare from "~/components/SocialShare.vue";
export default {
  name: "post",
  components: {
    SocialShare,
  },
  head() {
    return {
      title:
        (this.post.title ? this.post.title : "Loading") + " | Nuxt Medium Blog",
    };
  },
  data() {
    return {
      post: {},
      link: ''
    };
  },
  methods: {
    getPost() {
      this.$store.state.posts.forEach((post) => {
        if (this.Sanitize(post.title) == this.$route.params.uid) {
          this.post = post;
          this.title = post.title;
          this.link = post.link;
        }
      });
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<style lang="sass">
.post-container
  display: flex
  flex-direction: column
  max-width: 680px
  padding: 5em 0
  margin: auto
  color: rgba(41, 41, 41, 1)
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif
  font-size: 21px
  line-height: 32px
  letter-spacing: -.0003em
  word-break: break-word
  text-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased
  h1
    font-family: Georgia,Cambria,"Times New Roman",Times,serif
    font-style: normal
    font-weight: 400
    line-height: 1.25
    letter-spacing: 0
    font-size: 42px
  h3
    font-family: "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif
    font-weight: 600
    font-size: 30px
    line-height: 1.15
    letter-spacing: -.015em
    color: rgba(0,0,0,.84)
    &:not(:first-child)
      margin-top: 56px
  .date-share
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 2em
    button
      border: 0
      background: transparent
      outline: 0
      opacity: .5
      transition: opacity .25s
      padding: .25em
      &:hover
        opacity: 1
        cursor: pointer
  span.divider
    margin: 0 1em
    font-size: .75em
  .date, .read-link
    color: rgba(117, 117, 117, 1)
    font-size: 14px
    line-height: 20px
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif
  .read-link
    margin-left: auto
  figure
    margin: 2.5em 0
    img
      max-width: 100%
    figcaption
      text-align: center
      font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif
      color: rgba(117, 117, 117, 1)
      font-size: .65em
  pre
    white-space: pre-wrap
    font-size: .75em
    color: rgba(41, 41, 41, 1)
    background: rgba(242, 242, 242, 1)
    padding: 20px
    font-family: Menlo, Monaco, "Courier New", Courier, monospace
    letter-spacing: -0.022em
    line-height: 1.21
    margin: 3em 0
  blockquote
    padding-left: 23px
    box-shadow: inset 3px 0 0 0 rgba(41, 41, 41, 1)
    margin: 2em 0
    font-style: italic
    letter-spacing: -0.003em
    color: rgba(41, 41, 41, 1)
  p
    margin: 1em 0
  a
    color: inherit
    &:hover
      opacity: .7
      transition: opacity .25s
</style>
