<template>
  <div class="container">
    <div>
      <h1 class="title">Nuxt Medium Blog</h1>
      <h2 class="subtitle">Nuxt full static Blog using Medium RSS</h2>
      <h3 class="latest">Latest articles:</h3>
      <BlogWidget />
      <div class="links">
        <a
          href="https://medium.com/@randomnessdev/nuxt-static-blog-using-medium-as-a-headless-cms-6b367e3e50da?sk=72cde58a254b3b931c2346e4bd19880d"
          target="_blank"
          class="button--green"
        >Medium article</a>
        <a
          href="https://github.com/randomnessdev/nuxt-medium-blog/"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import BlogWidget from "~/components/BlogWidget.vue";
export default {
  layout: "default",
  components: {
    BlogWidget,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title, .latest {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 45px;
}
h3.latest {
  margin-top: 4em;
  text-align: left;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: .125em;

}
</style>
