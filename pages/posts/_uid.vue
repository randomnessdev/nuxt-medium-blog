<template>
  <section class="post-container">
    <!-- Slices block component -->
    <h1>{{ post.title }}</h1>
    <div class="date-share">
      <div class="date">{{ post.pubDate }}</div>
      <div class="share">
        <button>
          <svg width="29" height="29" class="bo">
            <path
              d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"
            />
          </svg>
        </button>
        <button>
          <svg width="29" height="29" viewBox="0 0 29 29" class="bo">
            <path
              d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"
            />
            <path
              d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z"
              fill="#fff"
            />
          </svg>
        </button>
        <button>
          <svg width="29" height="29" class="bo">
            <path
              d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"
            />
          </svg>
        </button>
      </div>
    </div>
    <article v-html="post.content" />
  </section>
</template>

<script>
export default {
  name: "post",
  head() {
    return {
      title: this.post.title + " | Nuxt Medium Blog",
    };
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    getPost() {
      this.$store.state.posts.forEach((post) => {
        if (this.Sanitize(post.title) == this.$route.params.uid) {
          this.post = post;
          this.title = post.title;
        }
      });
    },
  },
  beforeMount() {
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
      &:hover
        opacity: 1
        cursor: pointer
  .date
    color: rgba(117, 117, 117, 1)
    font-size: 14px
    line-height: 20px
    font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif
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
